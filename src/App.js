import React, { Component } from 'react';
import moment from 'moment';

import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Page from './components/Page.js';


const API_ROUTE = 'http://api.openweathermap.org/data/2.5/group?id=6453366,2643743,625144&APPID=1ee170bc62a552b23abc2ea69acbc89a';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      locationList: [],
      timeStamp: ""
    };
    //initial request
    this.getList();
  }

  componentDidMount() {
    //new request every minute
    this.timer = setInterval(() => this.getList(), 60000);
  }

  async getList() {

    fetch(API_ROUTE).then((response) =>{
        if(!response.ok){
          this.setState({requestFailed: true, isLoading: false});
          console.log(this.state);
          throw new Error(response.status);
        }
        else return response.json();
      })
      .then(responseJson => this.setState({
        locationList: responseJson,
        timeStamp: moment()
      }))
      .then(() => this.setState({isLoading: false}))
      .catch(error => console.log(error))
  }

  render() {

    if(this.state.isLoading){
      return (
        <div className="container">
          <h1>Loading...</h1>
        </div>
      )
    }

    else if(this.state.requestFailed) {
      return (
        <div className="container">
          <h1>Something went wrong! Try again</h1>
        </div>
      )
    }
    else {
      return (
        <div className="container">
          <Header timeStamp={this.state.timeStamp}/>
          <Page locationList={this.state.locationList} checkForRain={this.checkForRain}/>
          <Footer timeStamp={this.state.timeStamp}/>
        </div>
      );
    }
  }
}

export default App;
