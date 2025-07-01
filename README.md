# Nürnberg Digital Festival Events App

A modern, mobile-first React web application showcasing events from the Nürnberg Digital Festival 2025, built with Material-UI and Material Design 3.

## ✨ Features

### 🕒 **Timeline View (NEW)**
- **Chronological Display**: Shows the next 25 upcoming events in chronological order
- **Smart Date Parsing**: Handles German date formats (DD.MM.YYYY)
- **Date Grouping**: Events are grouped by date with clear section headers
- **Automatic Filtering**: Only displays today and future events

### 📅 **Date-Based Navigation**
- **Tab Interface**: Easy switching between Timeline, Today, Tomorrow, and specific dates
- **Responsive Design**: Scrollable tabs on mobile devices
- **Smart Categorization**: Events automatically categorized by content

### 🎨 **Modern UI/UX**
- **Material Design 3**: Authentic Material You design system
- **Mobile-First**: Optimized for mobile devices with responsive layout
- **Event Cards**: Horizontal layout with images and detailed information
- **Category Chips**: Color-coded event types (Tech Conference, Music Festival, etc.)
- **Interactive Elements**: Hover effects and smooth animations

### 🎯 **Event Categories**
Events are automatically categorized based on content:
- **Tech Conference** 🔧 (Purple)
- **Music Festival** 🎵 (Pink) 
- **Art Exhibition** 🎨 (Orange)
- **Food Fair** 🍽️ (Green)
- **Workshop** 🛠️ (Blue)
- **Networking** 🤝 (Teal)

## 🏗️ Technical Architecture

### **Core Technologies**
- **React 19.1.0** - Latest React with modern hooks
- **Material-UI 7.2.0** - Complete Material Design 3 component library
- **Emotion** - CSS-in-JS styling solution

### **Key Components**

#### **App.js** - Main Application Container
- Event data loading and state management
- Tab navigation and routing
- German date parsing and chronological sorting
- Event categorization logic

#### **Timeline.js** - Timeline View Component
- Chronological event display
- Date grouping and formatting
- Handles next 25 upcoming events

#### **EventCard.js** - Individual Event Display
- Horizontal card layout with image and content
- Category chips with color coding
- Interactive click-to-visit functionality

#### **theme.js** - Material Design 3 Theme
- Complete Material You color palette
- Typography scale and component customizations
- Responsive design tokens

## 🎯 Data Source

The app uses **`/events.json`** as the primary data source, containing official Nürnberg Digital Festival 2025 events with the following structure:

```json
{
  "image": "Event image URL",
  "title": "Event title",
  "short_description": "Brief description",
  "event_date_time": "DD.MM.YYYY HH:MM - HH:MM Uhr",
  "website": "Event website URL",
  "organizer": "Event organizer",
  "location": "Event location"
}
```

## 🚀 Getting Started

### **Prerequisites**
- Node.js 16+
- npm or yarn

### **Installation**
```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

### **Available Scripts**
- `npm start` - Development server (http://localhost:3000)
- `npm run build` - Production build
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

## 📱 Usage

### **Timeline View**
1. Click the **"Timeline"** tab to see chronological event listing
2. Events are grouped by date (Today, Tomorrow, specific dates)
3. Shows next 25 upcoming events automatically
4. Click any event card to visit the official event website

### **Date-Specific Views**
1. Use **Today**, **Tomorrow**, or specific date tabs
2. See events organized by specific time periods
3. Consistent card layout across all views

## 🔧 Development

### **Key Development Rules**
- Always use `/events.json` as the data source
- Follow Material Design 3 principles
- Maintain mobile-first responsive design
- Fix ESLint warnings immediately
- Use German date format parsing for chronological sorting

### **Event Date Parsing**
The app includes robust German date parsing:
```javascript
// Handles formats like:
"30.06.2025 16:00 - 22:00 Uhr"
"01. - 04.07.2025 08:00 - 17:00"
```

### **Timeline Logic**
```javascript
// Chronological sorting and filtering
const upcomingEvents = eventsData
  .map(event => ({ ...event, parsedDate: parseEventDate(event.event_date_time) }))
  .filter(event => event.parsedDate >= today)
  .sort((a, b) => a.parsedDate - b.parsedDate)
  .slice(0, 25); // Next 25 events
```

## 📦 Dependencies

### **Production**
- `react: ^19.1.0` - Latest React framework
- `react-dom: ^19.1.0` - React DOM renderer
- `@mui/material: ^7.2.0` - Material-UI components
- `@mui/icons-material: ^7.2.0` - Material Design icons
- `@emotion/react: ^11.14.0` - Emotion CSS-in-JS
- `@emotion/styled: ^11.14.1` - Emotion styled components
- `web-vitals: ^4.2.3` - Performance monitoring

### **Development**
- `react-scripts: 5.0.1` - Create React App tooling
- `@testing-library/*` - Testing utilities

## 🎨 Design System

### **Color Palette**
- **Primary**: Purple (#6750A4) - Material You purple
- **Secondary**: Complementary Material Design colors
- **Surface**: Clean whites and light grays
- **Text**: High contrast for accessibility

### **Typography**
- **Font**: Inter (Google Fonts)
- **Scale**: Material Design 3 type scale
- **Responsive**: Adapts to screen size

### **Layout**
- **Mobile-First**: 320px+ responsive design
- **Container**: Max-width with centered content
- **Spacing**: Consistent 8px grid system

## 🚀 Deployment

Built for modern web deployment:
- Static file generation via `npm run build`
- Compatible with Netlify, Vercel, GitHub Pages
- Service worker ready for PWA capabilities
- Optimized bundles and code splitting

## 📄 License

This project showcases the Nürnberg Digital Festival 2025 events. 