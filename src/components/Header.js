import React, { Component } from 'react';
import moment from 'moment';

import './css/Header.css';

export default class Header extends Component {
  render() {
    return (
        <header className="header">
            <h1>Weather as of:</h1>
            <h2> {moment(this.props.timeStamp).format("HH:mm")}</h2>
        </header>
    );
  }
}
