import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Searchbox.css';
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    let [city,setCity]=useState("");
    let [error,setError]=useState(false);
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="a6ed1bec8d10216f1253ab60b8b43d48";
    
    let getWeatherInfo=async()=>{
try{
     let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`);
     let jsonResponse=await response.json();
     console.log(jsonResponse);
     let result = {
        city: city.toUpperCase(),
        temp: (jsonResponse.main.temp - 273.15).toFixed(2), // Convert Kelvin to Celsius
        tempMin: (jsonResponse.main.temp_min - 273.15).toFixed(2), // Convert Kelvin to Celsius
        tempMax: (jsonResponse.main.temp_max - 273.15).toFixed(2), // Convert Kelvin to Celsius
        humidity: jsonResponse.main.humidity,
        feelsLike: (jsonResponse.main.feels_like - 273.15).toFixed(2), // Convert Kelvin to Celsius
        weather: jsonResponse.weather[0].description,
    };
     console.log(result);
     return result;
    }catch(err){
        throw err;
    }
    };
   

let handleChange=(evt)=>{
setCity(evt.target.value);
};

let handleSubmit=async (evt)=>{
    try{
    evt.preventDefault();
    console.log(city);
    setCity("");
    setError(false);
   let newInfo=await getWeatherInfo();
   updateInfo(newInfo);
    }
catch(err){
    setError(true);
}
};

    return(
<div className='Searchbox'>
    <form onSubmit={handleSubmit}>
    <TextField required id="outlined-basic" style={{ color: 'yellow' }} label="Enter City" variant="outlined" value={city} onChange={handleChange}
     InputProps={{
        style: { color: 'white', fontWeight: 'bold' } // Change text color to white and bold
      }}
      InputLabelProps={{
        style: { color: 'white', fontWeight: 'bold' } // Change label color to white and bold
      }}/>
    <br></br>
    <br></br>
    <Button variant="contained" type='submit'>
        Search
      </Button>
      {error && <p style={{color:"red"}}>no such place existes</p>}
    </form>
</div>
    );
}