import React, { useState } from "react";
import Search from "./components/Search/Search";
import Weather from "./components/Weather/Weather";

import "./App.css";
const api = {
  key: "10e8ca0d6cd5ac7e54866c8bd287175e",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          console.log(result);
        });
    }
  };

  return (
    <div
      className={
        typeof weather.main != "undefined"
          ? weather.main.temp > 16
            ? "App warm"
            : "App"
          : "App"
      }
    >
      <main>
        <Search query={query} setQuery={setQuery} search={search} />
        {typeof weather.main !== "undefined" && <Weather weather={weather} />}
      </main>
    </div>
  );
}

export default App;

// function App() {
// const [query, setQuery] = useState('')
// const [weather, setWeather] = useState({})

// const search = evt =>{
//   if (evt.key === "Enter") {
//     fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
//     .then(res => res.json())
//     .then(result => {
//       setWeather(result);
//       setQuery('')
//       console.log(result)
//     })
//   }
// }

// const dateBuilder = (d) => {
//   let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
//   let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

//   let day = days[d.getDay()]
//   let date = d.getDate()
//   let month = months[d.getMonth()]
//   let year = d.getFullYear()

//   return `${day} ${date} ${month} ${year}`
// }

//   return (
//     <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'App warm' : 'App') : 'App'}>
//       <main>
//         <div className='search-box'>
//           <input
//             type="text"
//             className="search-bar"
//             placeholder='Search...'
//             onChange={e => setQuery(e.target.value)}
//             value={query}
//             onKeyPress={search}
//           />
//         </div>

//         {(typeof weather.main != "undefined") ? (
//         <div>
//           <div className='location-box'>
//           <div className='location'>{weather.name}, {weather.sys.country}</div>
//           <div className='date'>{dateBuilder(new Date())}</div>
//         </div>

//         <div className='weather-box'>
//           <div className='temp'>{Math.round(weather.main.temp)} C</div>
//           <div className='weather'>{weather.weather[0].main}</div>
//         </div>
//         </div>
//         ) : ('')}

//       </main>
//     </div>
//   );
// }

// export default App;
