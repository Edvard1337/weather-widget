import React, { Component } from 'react';
import { Textfit } from 'react-textfit';

import './css/Page.css';


export default class Page extends Component {


  checkForRain(list) {
    let id = list.weather[0].id;
    //ID's found @ https://openweathermap.org/weather-conditions
    if((id >= 200 && id <=232) || (id >= 300 && id <=321) || (id >= 500 && id <=531)){
      return true;
    }
  }

  render() {
    let list = this.props.locationList.list;
    return (
      <div className="flex-container">
      {
        list.map((location, index) => {
            return (
            <div key={location.id} className="weather-container">
              <ul>
                <Textfit mode="multi">
                  <li>
                      <h2>{location.name}</h2>
                  </li>
                </Textfit>
                <li>{Math.round(location.main.temp - 273.15) + "°C"} </li>
                <li>{location.weather[0].main}</li>
                <li><span>Umbrella? {this.checkForRain(list[index]) ? "Yes" : "No"}</span></li>
                <li id="icon-container">
                  {/*A few icons is not available @ http://openweathermap.org/img/w2/ so I went with w1*/}
                  <img className="icon" alt="Icon showing the weather condition" src={"http://openweathermap.org/img/w/" + location.weather[0].icon + ".png"}></img>
                </li>
              </ul>
            </div>
            )
          })
        }
      </div>
    );
  }
}
