import React, { Component } from 'react';
import api from '../../services/api';

import logo from '../../assets/logo.svg';
import './styles.css';

export default class Box extends Component {
  render() {
    return (
        <div id="box-container">
            <header>
                <img src={logo} alt="" />
                <h1>Teste</h1>
            </header>
        </div>
    );
  }
}
