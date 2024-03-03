import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./infobox.css";

export default function InfoBox({info}){
    let init_url="https://images.unsplash.com/photo-1562155955-1cb2d73488d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZHVzdHklMjBpbWFnZXMlMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    let HOT_URL="https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    let RAIN_URL="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";


    return(
    <div className='InfoBox'>
    <div className='cardContainer'>
     <Card sx={{ maxWidth: 345 }}>
     <CardMedia
     sx={{ height: 140 }}
     image={info.humidity>80?RAIN_URL:info.temp>15?HOT_URL:init_url}
     title="green iguana"
   />
   <CardContent>
     <Typography gutterBottom variant="h5" component="div">
       {info.city}
     </Typography>
     <Typography variant="body2" color="text.secondary" component={"span"}>
     <p>Temperature={info.temp}&deg;C</p> 
      <p>Humidity={info.humidity}</p> 
      <p>Min Temp={info.tempMin}&deg;C</p> 
      <p>Max Temp={info.tempMax}&deg;C</p> 
      <p>The weather can be described as <i>{info.weather}</i> feels like={info.tempMin}&deg;C</p>

     </Typography>
   </CardContent>
   
 </Card>
 </div>
 </div>
   );
}