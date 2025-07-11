import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import './InfoBox.css';

export default function InfoBox({ info }) {
    const HOT_URL = "https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?q=80&w=1170&auto=format&fit=crop";
    const COLD_URL = "https://images.unsplash.com/photo-1674407866481-a39b2239f771?w=500&auto=format&fit=crop";
    const RAIN_URL = "https://images.unsplash.com/photo-1583054994298-cc68ddaca862?w=500&auto=format&fit=crop";

    const getWeatherIcon = () => {
        if (info.humidity > 80) return <ThunderstormIcon fontSize="large" />;
        else if (info.temp > 15) return <WbSunnyIcon fontSize="large" />;
        else return <AcUnitIcon fontSize="large" />;
    };

    return (
        <div className="info-box">
            <Card className="weather-card" sx={{ borderRadius: 4, boxShadow: 6 }}>
                <CardMedia
                    component="img"
                    height="180"
                    image={info.humidity > 80 ? RAIN_URL : (info.temp > 15 ? HOT_URL : COLD_URL)}
                    alt="Weather condition"
                />
                <CardContent>
                    <Typography variant="h5" component="div" className="city-name">
                        {info.city} &nbsp; {getWeatherIcon()}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" className="weather-details">
                        Temperature: {info.temp}°C<br />
                        Feels like: {info.feelsLike}°C<br />
                        Humidity: {info.humidity}%<br />
                        Max Temp: {info.tempMax}°C<br />
                        Min Temp: {info.tempMin}°C<br />
                        Condition: "{info.weather}"
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary">Share</Button>
                    <Button size="small" color="primary">Learn More</Button>
                </CardActions>
            </Card>
        </div>
    );
}
