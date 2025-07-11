import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import './SearchBox.css'
import { useState } from 'react';


export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "84505032b89d79a1635187e5ae7aeea3";

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            if (!response.ok) {
                const errorText = await response.text();
                console.warn("Response error:", errorText);
                throw new Error("City not found");
            }
            let jsonResponse = await response.json();
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description
            };
            console.log(result);
            return result;
        } catch (error) {
            console.error("Fetch failed: ", error);
            throw error;
        }
    };


    let handleChange = (event) => {
        setCity(event.target.value);
    }

    let handleSubmit = async (event) => {
        event.preventDefault();
        try {
            console.log("Searching for:", city);
            let newInfo = await getWeatherInfo(city); // use city first
            updateInfo(newInfo);
            setCity(""); // clear input after successful fetch
            setError(false);
        } catch (err) {
            setError(true);
        }
    };

    return (
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="filled" required value={city} onChange={handleChange} />
                &nbsp;&nbsp;
                <br />
                <br />
                <Button variant="contained" type='submit' endIcon={<SendIcon />}>
                    Search
                </Button>
                <br />
                {error && <p style={{ color: "red" }}> No such Place exists!! </p>}
            </form>
        </div>
    )
}