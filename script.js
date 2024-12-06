const cities = [
    "Cairo", "Alexandria", "Giza", "Shubra El-Kheima", "Port Said", "Suez",
    "Mansoura", "Tanta", "Asyut", "Ismailia", "Faiyum", "Zagazig", "Damietta",
    "Aswan", "Minya", "Beni Suef", "Qena", "Sohag", "Hurghada", "Luxor",
    "Sharm El Sheikh", "Kafr El Sheikh", "Mallawi", "El Mahalla El Kubra",
    "10th of Ramadan City", "Sadat City", "Obour City", "6th of October City",
    "Helwan", "Qalyub", "New York", "Los Angeles", "Chicago", "Houston", 
    "Phoenix", "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose",
    "Austin", "Jacksonville", "Fort Worth", "Columbus", "Charlotte", 
    "San Francisco", "Indianapolis", "Seattle", "Denver", "Washington", "Boston", 
    "El Paso", "Nashville", "Detroit", "Oklahoma City", "Portland", "Las Vegas",
    "Memphis", "Louisville", "Baltimore"
];
const searchInput = document.getElementById('searchInput');
const resultsContainer = document.getElementById('results');
const cityDisplay = document.getElementById('city');
const temperatureDisplay = document.getElementById('temperature');
const humidityDisplay = document.getElementById('humidity');
const windSpeedDisplay = document.getElementById('windSpeed');
const conditionDisplay = document.getElementById('condition');
function getRandomWeather() {
    const conditions = ["Sunny", "Cloudy", "Rainy", "Stormy", "Snowy"];
    return {
        temperature: (Math.random() * (35 - 15) + 15).toFixed(1),
        humidity: Math.floor(Math.random() * 101),
        windSpeed: (Math.random() * 15).toFixed(1),
        condition: conditions[Math.floor(Math.random() * conditions.length)]
    };
}

function updateWeather(city) {
    const weather = getRandomWeather();
    cityDisplay.textContent = city;
    temperatureDisplay.textContent = `Temperature: ${weather.temperature}°C`;
    humidityDisplay.textContent = `Humidity: ${weather.humidity}%`;
    windSpeedDisplay.textContent = `Wind Speed: ${weather.windSpeed} m/s`;
    conditionDisplay.textContent = `Condition: ${weather.condition}`;
    clearResults(); 
}

searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    resultsContainer.innerHTML = ''; 
    if (query.trim() === '') return; 
    const filteredCities = cities.filter(city => city.toLowerCase().includes(query));
    filteredCities.forEach(city => {
        const li = document.createElement('li');
        li.textContent = city;
        li.addEventListener('click', () => updateWeather(city));
        resultsContainer.appendChild(li);
    });
});


function clearResults() {
    resultsContainer.innerHTML = '';
}

const themeSwitch = document.getElementById('themeSwitch');
const themeLabel = document.getElementById('themeLabel');
const body = document.body;

const savedTheme = localStorage.getItem('theme') || 'light';
body.setAttribute('data-theme', savedTheme);
themeSwitch.checked = savedTheme === 'dark';
themeLabel.textContent = savedTheme === 'dark' ? 'Dark Mode' : 'Light Mode';

themeSwitch.addEventListener('change', () => {
    const isDarkMode = themeSwitch.checked;
    const newTheme = isDarkMode ? 'dark' : 'light';
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    themeLabel.textContent = isDarkMode ? 'Dark Mode' : 'Light Mode';
});

