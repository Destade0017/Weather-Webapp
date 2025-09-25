class WeatherDashboard {
            constructor() {
                this.currentLocation = 'New York';
                this.loadingEl = document.querySelector('.loading');
                this.contentEl = document.getElementById('weatherContent');
                this.locationInput = document.getElementById('locationInput');
                
                this.setupEventListeners();
                this.loadWeatherData();
            }

            setupEventListeners() {
                this.locationInput.addEventListener('keypress', (e) => {
                    if (e.key === 'Enter') {
                        const location = e.target.value.trim();
                        if (location) {
                            this.currentLocation = location;
                            this.loadWeatherData();
                        }
                    }
                });
            }

            async loadWeatherData() {
                this.showLoading();
                
                try {
                    // Simulate API delay
                    await new Promise(resolve => setTimeout(resolve, 1000));
                    
                    // Mock weather data - replace with real API call
                    const currentWeather = {
                        location: this.currentLocation,
                        temperature: Math.floor(Math.random() * 25) + 15,
                        condition: 'Partly Cloudy',
                        humidity: Math.floor(Math.random() * 40) + 40,
                        windSpeed: Math.floor(Math.random() * 15) + 5,
                        visibility: Math.floor(Math.random() * 10) + 5,
                        pressure: Math.floor(Math.random() * 50) + 1000,
                        feelsLike: Math.floor(Math.random() * 25) + 17
                    };

                    const forecast = [
                        { day: 'Today', high: 24, low: 18, condition: 'Partly Cloudy', icon: '⛅' },
                        { day: 'Tomorrow', high: 26, low: 19, condition: 'Sunny', icon: '☀️' },
                        { day: 'Friday', high: 23, low: 16, condition: 'Rainy', icon: '🌧️' },
                        { day: 'Saturday', high: 21, low: 15, condition: 'Cloudy', icon: '☁️' },
                        { day: 'Sunday', high: 25, low: 18, condition: 'Sunny', icon: '☀️' }
                    ];

                    this.renderWeatherData(currentWeather, forecast);
                } catch (error) {
                    this.showError('Failed to load weather data');
                }
            }

            showLoading() {
                this.contentEl.innerHTML = `
                    <div class="loading">
                        <div class="spinner"></div>
                        <p>Loading weather data...</p>
                    </div>
                `;
            }

            showError(message) {
                this.contentEl.innerHTML = `
                    <div class="card error">
                        <p>${message}</p>
                        <button class="error-btn" onclick="location.reload()">Try Again</button>
                    </div>
                `;
            }

            renderWeatherData(current, forecast) {
                const weatherIcon = this.getWeatherIcon(current.condition);
                
                this.contentEl.innerHTML = `
                    <!-- Current Weather -->
                    <div class="card">
                        <div class="current-weather">
                            <div class="weather-main">
                                <h2>${current.location}</h2>
                                <div class="temperature">${current.temperature}°C</div>
                                <div class="condition">${current.condition}</div>
                                <div class="feels-like">Feels like ${current.feelsLike}°C</div>
                            </div>
                            <div class="weather-icon">${weatherIcon}</div>
                        </div>

                        <div class="weather-details">
                            <div class="detail-item">
                                <svg class="detail-icon" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"/>
                                </svg>
                                <div class="detail-info">
                                    <h4>Humidity</h4>
                                    <p>${current.humidity}%</p>
                                </div>
                            </div>
                            <div class="detail-item">
                                <svg class="detail-icon" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"/>
                                </svg>
                                <div class="detail-info">
                                    <h4>Wind Speed</h4>
                                    <p>${current.windSpeed} km/h</p>
                                </div>
                            </div>
                            <div class="detail-item">
                                <svg class="detail-icon" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                                    <path fill-rule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clip-rule="evenodd"/>
                                </svg>
                                <div class="detail-info">
                                    <h4>Visibility</h4>
                                    <p>${current.visibility} km</p>
                                </div>
                            </div>
                            <div class="detail-item">
                                <svg class="detail-icon" fill="currentColor" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" d="M2.25 13.5a8.25 8.25 0 018.25-8.25.75.75 0 01.75.75v6.75H18a.75.75 0 01.75.75 8.25 8.25 0 01-16.5 0z" clip-rule="evenodd"/>
                                </svg>
                                <div class="detail-info">
                                    <h4>Pressure</h4>
                                    <p>${current.pressure} hPa</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Forecast -->
                    <div class="card forecast-container">
                        <h3>5-Day Forecast</h3>
                        <div class="forecast-grid">
                            ${forecast.map(day => `
                                <div class="forecast-item">
                                    <div class="forecast-day">${day.day}</div>
                                    <div class="forecast-icon">${day.icon}</div>
                                    <div class="forecast-condition">${day.condition}</div>
                                    <div class="forecast-temps">
                                        <span class="temp-high">${day.high}°</span>
                                        <span class="temp-low">${day.low}°</span>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;
            }

            getWeatherIcon(condition) {
                const iconMap = {
                    'Sunny': '☀️',
                    'Partly Cloudy': '⛅',
                    'Cloudy': '☁️',
                    'Rainy': '🌧️',
                    'Snowy': '❄️',
                    'Thunderstorm': '⛈️'
                };
                return iconMap[condition] || '☀️';
            }
        }

        // Initialize the weather dashboard when page loads
        document.addEventListener('DOMContentLoaded', () => {
            new WeatherDashboard();
        });