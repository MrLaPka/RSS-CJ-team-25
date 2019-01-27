import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import './architect-list.css';

import Architect from '../architect/architect';
import Teammate from '../teammate/teammate';
import Search from '../search/search';

class ArchitectList extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    const defaultData = props.data; // global.contentLang;
    this.state = {
      filtredData: defaultData,
    };
  }

  renderClickedArchitect(i) {
    ReactDOM.render(<Architect data={global.contentLang[i]} />, document.getElementById('content'));
  }

  searchCallback(data) {
    window.console.log('before Filtered Data', this.state.filtredData);
    this.setState({ filtredData: data });
    window.console.log('Filtered Data', this.state.filtredData);
  }

  render() {
    window.console.log('data in render', this.state.filtredData);
    return (
      <section className="architect-list">
        <Search searchCallback={this.searchCallback} data = {global.contentLang}/>
        {
          Object.keys(this.state.filtredData).map(index => (
            <Teammate
              key = {index}
              data = {this.state.filtredData[index]}
              isArchitect = {true}
              onClick={() => this.renderClickedArchitect(index)} />
          ))
        }
      </section>
    );
  }
}

export default ArchitectList;
