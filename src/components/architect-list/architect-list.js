import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import './architect-list.css';

import Architect from '../architect/architect';
import Teammate from '../teammate/teammate';
import Search from '../search/search';

class ArchitectList extends Component {
  renderClickedArchitect(i) {
    ReactDOM.render(<Architect data={global.contentLang[i]} />, document.getElementById('content'));
  }

  render() {
    return (
      <section className="architect-list">
        <Search/>
        {this.props.data.map((element, index) => <Teammate data={element} isArchitect={true} onClick={() => this.renderClickedArchitect(index)} />)}
      </section>
    );
  }
}

export default ArchitectList;
