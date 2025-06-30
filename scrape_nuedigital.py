import json
import time
import re
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from bs4 import BeautifulSoup

# --- CONFIGURATION ---
URL = "https://nuernberg.digital/de/events/2025"
WAIT_TIME = 5  # seconds to wait for JS to load

def clean_text(text):
    """Remove \n characters and clean up whitespace"""
    if text is None:
        return None
    return re.sub(r'\s+', ' ', text.replace('\n', ' ')).strip()

# --- SETUP SELENIUM ---
options = Options()
options.add_argument("--headless")
options.add_argument("--no-sandbox")
options.add_argument("--disable-dev-shm-usage")
options.add_argument("--window-size=1920,1080")
driver = webdriver.Chrome(options=options)

try:
    print(f"Loading page: {URL}")
    driver.get(URL)
    time.sleep(WAIT_TIME)

    # Step 1: Collect all day tab URLs (from the top pagination)
    date_pattern = re.compile(r"\d{2}\.\d{2}")
    day_tab_links = driver.find_elements(By.CSS_SELECTOR, 'nav.pagy-bootstrap ul.pagination a.page-link')
    print(f"Found {len(day_tab_links)} .page-link elements in pagination.")

    # Only keep links whose .day span matches the date pattern
    day_tab_info = []  # (day_text, href)
    for link in day_tab_links:
        try:
            day_spans = link.find_elements(By.CSS_SELECTOR, 'span.day')
            for span in day_spans:
                day_text = span.text.strip()
                if date_pattern.match(day_text):
                    day_tab_info.append((day_text, link.get_attribute('href')))
        except Exception as e:
            continue
    print(f"Filtered to {len(day_tab_info)} day tabs with .day span matching date pattern.")

    all_events = []
    seen_titles = set()

    for i, (day_text, day_href) in enumerate(day_tab_info):
        print(f"Navigating to day {i+1}/{len(day_tab_info)}: {day_text} ({day_href})")
        try:
            driver.get(day_href)
            time.sleep(WAIT_TIME)
        except Exception as e:
            print(f"Could not navigate to day tab {i+1}: {e}")
            continue

        # Step 2: For this day, collect all event pagination URLs (not day tabs)
        event_page_urls = set()
        try:
            # Get all pagination links and filter them properly
            pag_links = driver.find_elements(By.CSS_SELECTOR, 'nav.pagy-bootstrap ul.pagination a.page-link, .pagination a.page-link')
            for plink in pag_links:
                # Skip day tabs (those with .day span)
                if plink.find_elements(By.CSS_SELECTOR, 'span.day'):
                    continue
                    
                url = plink.get_attribute('href')
                if url:
                    # For day 1 (index 0), include URLs without day_page or with day_page=1
                    if i == 0:
                        if 'day_page=' not in url or 'day_page=1' in url:
                            event_page_urls.add(url)
                    else:
                        # For other days, include URLs with the correct day_page
                        if f'day_page={i+1}' in url:
                            event_page_urls.add(url)
        except Exception as e:
            print(f"Error collecting event pagination links: {e}")
        # Always include the current page
        event_page_urls.add(day_href)
        print(f"  Found {len(event_page_urls)} event pagination URLs for this day.")

        for page_url in sorted(event_page_urls):
            try:
                driver.get(page_url)
                time.sleep(WAIT_TIME)
            except Exception as e:
                print(f"  Could not navigate to event page {page_url}: {e}")
                continue

            # Wait for events to load
            try:
                WebDriverWait(driver, 10).until(
                    EC.presence_of_element_located((By.CSS_SELECTOR, ".card.event-grid-item, .event-grid-item, .card, [class*='event'], [class*='program'], .event-card, .program-item"))
                )
            except:
                print("Timeout waiting for events after clicking tab.")
                continue

            # --- SCRAPE EVENTS HERE ---
            soup = BeautifulSoup(driver.page_source, "html.parser")
            event_cards = soup.select(".card.event-grid-item")
            print(f"    Scraping {len(event_cards)} events from {page_url}")
            for card in event_cards:
                try:
                    # Image
                    image = card.select_one("img")
                    image_url = image["src"] if image and image.has_attr("src") else None

                    # Title
                    title = card.select_one(".h5.mb-0")
                    title_text = clean_text(title.get_text(strip=True) if title else None)

                    # Date and Time
                    date_time_block = card.select_one(".d-flex.justify-content-between.align-items-center.text-body-secondary")
                    date_text, time_text = None, None
                    if date_time_block:
                        spans = date_time_block.find_all("span")
                        if len(spans) == 2:
                            date_text = clean_text(spans[0].get_text(strip=True))
                            time_text = clean_text(spans[1].get_text(strip=True))
                    event_date_time = f"{date_text} {time_text}".strip() if date_text or time_text else None

                    # Website
                    website = card.select_one("a.btn.btn-primary.stretched-link")
                    website_url = website["href"] if website and website.has_attr("href") else None
                    if website_url and not website_url.startswith('http'):
                        website_url = 'https://nuernberg.digital' + website_url

                    # Organizer
                    organizer = None
                    for org_block in card.select(".d-flex.gap-2.align-items-center.text-body-secondary"):
                        icon = org_block.select_one(".bi-buildings")
                        if icon:
                            span = org_block.select_one("span")
                            if span:
                                organizer = clean_text(span.get_text(strip=True))
                                break

                    # Location
                    location = None
                    for loc_block in card.select(".d-flex.gap-2.align-items-center.text-body-secondary"):
                        icon = loc_block.select_one(".bi-geo-alt")
                        if icon:
                            span = loc_block.select_one("span")
                            if span:
                                location = clean_text(span.get_text(strip=True))
                                break

                    # Description (from tab-pane fade)
                    description = None
                    tab_panes = card.select(".tab-pane.fade")
                    for pane in tab_panes:
                        desc_div = pane.select_one("div")
                        if desc_div:
                            description = clean_text(desc_div.get_text(strip=True))
                            break

                    # Short Description (try to get from the next div after title, fallback to description)
                    short_description = None
                    if title:
                        next_div = title.find_next_sibling("div")
                        if next_div:
                            short_description = clean_text(next_div.get_text(strip=True))
                    if not short_description:
                        short_description = description

                    event = {
                        "image": image_url,
                        "title": title_text,
                        "short_description": short_description,
                        "description": description,
                        "language": None,
                        "event_date_time": event_date_time,
                        "website": website_url,
                        "organizer": organizer,
                        "location": location
                    }
                    event_key = (title_text, website_url)
                    if event_key not in seen_titles and title_text:
                        all_events.append(event)
                        seen_titles.add(event_key)
                except Exception as e:
                    print(f"      Error extracting event: {e}")

    print(f"\nTotal unique events found: {len(all_events)}")
    with open('events.json', 'w', encoding='utf-8') as f:
        json.dump(all_events, f, indent=2, ensure_ascii=False)
    print(f"Events saved to events.json")

except Exception as e:
    print(f"Error occurred: {e}")
    import traceback
    traceback.print_exc()
finally:
    driver.quit()

# ---
# If you need to adjust selectors, inspect the page in your browser and update the CSS selectors above accordingly.
# If you want to save to a file, replace the print() with writing to a file.
