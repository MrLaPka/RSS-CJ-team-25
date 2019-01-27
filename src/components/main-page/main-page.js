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
    const i = (new Date().getDate()) % global.contentLang.length;
    return (
      <section className="main-page" >
        <div class="main-page__content">
          <div class="main-page__text">
            {global.controlsLang.main.today}
          </div>
          <Teammate isArchitect={true} onClick={() => this.renderClickedArchitect(i)} data={global.contentLang[i]} />
        </div>
      </section>
    );
  }
}

export default MainPage;
