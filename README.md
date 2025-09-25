# Weather Dashboard 🌤️

A beautiful, responsive weather dashboard built with HTML, CSS, and vanilla JavaScript. Features a modern glass-morphism design with real-time weather information and 5-day forecasts.

![Weather Dashboard Screenshot](https://via.placeholder.com/800x400/4F94CD/FFFFFF?text=Weather+Dashboard+Screenshot)

## 🌟 Features

- **Modern Design**: Glass-morphism UI with gradient backgrounds
- **Responsive Layout**: Works seamlessly on desktop, tablet, and mobile
- **Current Weather**: Real-time temperature, conditions, and detailed metrics
- **5-Day Forecast**: Extended weather predictions with icons
- **Location Search**: Easy city search functionality
- **Weather Details**: Humidity, wind speed, visibility, and pressure
- **Loading States**: Smooth animations while data loads
- **Error Handling**: User-friendly error messages with retry options

## 🚀 Quick Start

### Option 1: Direct Use
1. Download the HTML file
2. Open `weather-dashboard.html` in your web browser
3. Start exploring the weather dashboard!

### Option 2: Local Server (Recommended)
```bash
# Clone or download the project
# Navigate to project directory
cd weather-dashboard

# Start a local server (Python)
python -m http.server 8000

# Or use Node.js
npx serve .

# Visit http://localhost:8000
```

## 📁 Project Structure

```
weather-dashboard/
│
├── index.html          # Main HTML file with embedded CSS & JS
├── README.md           # This file
└── assets/            # Optional: for screenshots or additional resources
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with flexbox, grid, and backdrop-filter
- **Vanilla JavaScript**: ES6+ classes and async/await
- **SVG Icons**: Custom weather and detail icons

## 🌐 API Integration

Currently uses mock data. To integrate with a real weather API:

### 1. Get API Key
Sign up for a free API key from:
- [OpenWeatherMap](https://openweathermap.org/api) (Recommended)
- [WeatherAPI](https://www.weatherapi.com/)
- [AccuWeather](https://developer.accuweather.com/)

### 2. Update JavaScript
Replace the mock data in the `loadWeatherData()` method:

```javascript
async loadWeatherData() {
    this.showLoading();
    
    try {
        const API_KEY = 'your-api-key-here';
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${this.currentLocation}&appid=${API_KEY}&units=metric`
        );
        
        if (!response.ok) {
            throw new Error('Weather data not found');
        }
        
        const data = await response.json();
        
        const currentWeather = {
            location: data.name,
            temperature: Math.round(data.main.temp),
            condition: data.weather[0].main,
            humidity: data.main.humidity,
            windSpeed: Math.round(data.wind.speed * 3.6), // Convert m/s to km/h
            visibility: Math.round(data.visibility / 1000), // Convert m to km
            pressure: data.main.pressure,
            feelsLike: Math.round(data.main.feels_like)
        };
        
        // Fetch 5-day forecast
        const forecastResponse = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?q=${this.currentLocation}&appid=${API_KEY}&units=metric`
        );
        const forecastData = await forecastResponse.json();
        
        // Process forecast data...
        this.renderWeatherData(currentWeather, forecast);
        
    } catch (error) {
        this.showError('Failed to load weather data');
    }
}
```

## 🎨 Customization

### Colors
Update the CSS variables in the `body` selector:
```css
body {
    background: linear-gradient(135deg, #your-color-1, #your-color-2, #your-color-3);
}
```

### Weather Icons
Replace emoji icons with custom SVGs or icon fonts:
```javascript
getWeatherIcon(condition) {
    const iconMap = {
        'Sunny': '<svg>...</svg>',
        'Cloudy': '<svg>...</svg>',
        // Add your custom icons
    };
    return iconMap[condition] || '<svg>default-icon</svg>';
}
```

### Layout
Modify CSS Grid and Flexbox properties to change the layout:
```css
.weather-details {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    /* Adjust minmax values for different layouts */
}
```

## 📱 Responsive Design

The dashboard is fully responsive with breakpoints:
- **Desktop**: Full layout with all features
- **Tablet**: Optimized grid layouts
- **Mobile**: Stacked layout for better usability

## 🧪 Testing

### Browser Compatibility
- ✅ Chrome 88+
- ✅ Firefox 85+
- ✅ Safari 14+
- ✅ Edge 88+

### Features to Test
- [ ] Location search functionality
- [ ] Responsive design on different screen sizes
- [ ] Loading states and error handling
- [ ] API integration (if implemented)

## 🚀 Deployment

### GitHub Pages
1. Push to GitHub repository
2. Go to Settings > Pages
3. Select source branch
4. Your dashboard will be available at `https://username.github.io/repository-name`

### Netlify
1. Drag and drop your project folder to [Netlify](https://netlify.com)
2. Your site will be deployed instantly

### Vercel
```bash
npm i -g vercel
vercel --prod
```

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📋 Todo / Roadmap

- [ ] Real weather API integration
- [ ] Geolocation support
- [ ] Weather alerts and notifications
- [ ] Historical weather data
- [ ] Weather maps integration
- [ ] Unit conversion (Celsius/Fahrenheit)
- [ ] Dark/Light theme toggle
- [ ] PWA (Progressive Web App) support
- [ ] Offline functionality

## 🐛 Known Issues

- Currently uses mock data (needs real API integration)
- No geolocation support yet
- Limited to text-based weather icons

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com

## 🙏 Acknowledgments

- Weather icons from emoji set
- CSS inspiration from modern glass-morphism designs
- SVG icons created with custom paths

---

⭐ If you found this project helpful, please give it a star!

## 📞 Support

For support, email your.email@example.com or create an issue in this repository.
