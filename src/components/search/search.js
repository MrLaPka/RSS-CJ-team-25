import React, { Component } from 'react';
import Icon from '@material-ui/core/Icon';
import './search.css';

export default class Search extends Component {
  constructor({ props }) {
    super();
    this.props = props;
  }

  render() {
    return (
      <form className = "search-form">
        <input className = "search-form-input" placeholder = "search"/>
        <button className = "search-form-button header-link"><Icon className="search-form-button-icon" >search</Icon></button>
      </form>
    );
  }
}
