import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import './main-page.css';

import Architect from '../architect/architect';
import Teammate from '../teammate/teammate';

class MainPage extends Component {
  renderClickedArchitect(i) {
    ReactDOM.render(<Architect data={global.contentLang[i]} />, document.getElementById('content'));
  }

  render() {
    const currentArchitectIndex = Math.floor(Math.random() * Math.floor(global.contentLang.length));
    return (
      <section className="main-page">
        <div class="main-page__content">
          <div class="main-page__text">
            text here
          </div>
          <Teammate isArchitect={true} onClick={() => this.renderClickedArchitect(currentArchitectIndex)} data={global.contentLang[currentArchitectIndex]} />
        </div>
      </section>
    );
  }
}

export default MainPage;
