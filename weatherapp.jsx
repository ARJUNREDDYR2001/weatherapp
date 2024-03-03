import { useState } from 'react';
import InfoBox from './infobox'
import SearchBox from './Searchbox'
import './weatherapp.css'
export default function Weatherapp(){
const [weatherInfo, setWeatherInfo]=useState({
       city:"delhi",
        feelslike:290.87,
        humidity:27,
        temp:25.05,
        tempMin:25.05,
        tempMax:25.05,
        weather:"haze",
}
);
let updateInfo=(newInfo)=>{
  setWeatherInfo(newInfo);  
}

return(
<div style={{textAlign:"center"}}>
<h2>Weather App </h2>
<SearchBox updateInfo={updateInfo}/>
<InfoBox info={weatherInfo}/>
</div>
);
}