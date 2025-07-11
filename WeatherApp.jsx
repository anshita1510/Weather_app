import { useState } from "react"
import InfoBox from "./InfoBox"
import SearchBox from "./SearchBox"

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState(
        {
            city: "Jalandhar",
            feelsLike: 37.52,
            humidity: 62,
            temp: 31.93,
            tempMax: 31.93,
            tempMin: 31.93,
            weather: "Overcast clouds"
        }
    );

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }
    return (
        <div style={{ textAlign: "center" }}>
            <h1 style={{fontFamily: '"Gill Sans Extrabold", sans-serif'}}><u>Weather App by delta</u></h1>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    )
}