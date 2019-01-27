import React, { Component } from 'react';
import Icon from '@material-ui/core/Icon';
import './search.css';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.data = JSON.parse(JSON.stringify(this.props.data));
    this.searchCallback = props.searchCallback;
    this.state = {
      inputValue: '',
      isValueGetted: false,
    };
    this.updateInputValue = this.updateInputValue.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  setValueGetted() {
    this.setState({
      inputValue: this.state.inputValue,
      isValueGetted: true,
    });
  }

  search() {
    const result = [];
    if (this.state.inputValue.length === 0) return result;
    const searchString = this.state.inputValue.trim().toLowerCase();
    Object.keys(this.data).filter((item) => {
      const allItemData = JSON.stringify(this.data[item]).toLowerCase();
      if (allItemData.indexOf(searchString) !== -1) {
        result.push(this.data[item]);
      }
      return allItemData.indexOf(searchString) !== -1;
    });
    return result;
  }

  handleKeyPress(event) {
    if (event.key === 'Enter' && this.state.isValueGetted === false) {
      this.setValueGetted();
      if (this.searchCallback) this.searchCallback(this.search());
    }
  }

  handleClick(event) {
    event.preventDefault();
    if (this.state.isValueGetted === false) {
      this.setValueGetted();
      if (this.searchCallback) this.searchCallback(this.search());
    }
  }

  updateInputValue(event) {
    this.setState({
      inputValue: event.target.value,
      isValueGetted: false,
    });
  }

  render() {
    return (
      <form className = "search-form">
        <input
          value = {this.state.inputValue}
          onKeyPress = {this.handleKeyPress}
          onChange = {this.updateInputValue}
          className = "search-form-input"
          placeholder = "search"
        />
        <button
          onClick = {this.handleClick} 
          className = "search-form-button header-link">
            <Icon className="search-form-button-icon" >
              search
            </Icon>
        </button>
      </form>
    );
  }
}
