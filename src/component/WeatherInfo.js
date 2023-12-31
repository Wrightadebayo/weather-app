import React from 'react'
import '../Styles/Weather.css'


const WeatherInfo =(props)=>{
    const { temp,humidity,desc,city }=props.data
    return (
    <React.Fragment>
        <h3>{desc}</h3>
        <section className='weather-data-flex'>
        <div className="wright">
        <h4>City</h4>
       <p>{city}</p> 
        </div>
        <div className="wright">
        <h4>Temperature</h4>
        <p>{temp}<span className="symbol"></span> F</p>
        </div>
        <div className="wright">
        <h4>Humidity</h4>
        <p>{humidity}%</p>
        </div>
        </section>
    </React.Fragment>
    )   
} 

export default WeatherInfo;