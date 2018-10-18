import React, { Component } from 'react';
import moment from 'moment';

import './css/Footer.css';

export default class Header extends Component {
  render() {
    return (
        <footer className="footer">
            <span>Copyright © {moment(this.props.timeStamp).format("YYYY")}</span>
        </footer>
    );
  }
}
