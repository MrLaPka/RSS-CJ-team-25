import ReactDOM from 'react-dom';
import React, { Component } from 'react';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Icon from '@material-ui/core/Icon';

import './main-screen.css';

import ModalDialog from './components/modal-dialog/modal-dialog';
import Timeline from './components/Timeline/Timeline';
import Team from './components/team/team';
import Architect from './components/architect/architect';
import Map from './components/map/map';

import ArchitectList from './components/architect-list/architect-list';

import ControlsEn from './locale/en/controls.json';
import TeamEn from './locale/en/team.json';
import ContentEn from './locale/en/architects.json';

import ControlsBy from './locale/by/controls.json';
import TeamBy from './locale/by/team.json';
import ContentBy from './locale/by/architects.json';

import ControlsRu from './locale/ru/controls.json';
import TeamRu from './locale/ru/team.json';
import ContentRu from './locale/ru/architects.json';
import MainPage from './components/main-page/main-page';


// <Architect data={TestArchitect} /> - passing single architect
// global.controlsLang = ControlsBy;
// global.teamLang = TeamBy;

class MainScreen extends Component {
  constructor() {
    super();
    this.state = {
      anchorEl: null,
    };
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({ anchorEl: e.currentTarget });
  }

  handleClose() {
    this.setState({ anchorEl: null });
  }

  showArchitects() {
    ReactDOM.render(<ArchitectList data={global.contentLang} />, document.getElementById('content'));
  }

  showTeam() {
    ReactDOM.render(<Team data={global.teamLang.team} />, document.querySelector('.popup-container'));
  }

  changeLang(e) {
    switch (e) {
      case 'En':
        global.controlsLang = ControlsEn;
        global.teamLang = TeamEn;
        global.contentLang = ContentEn;
        break;
      case 'By':
        global.controlsLang = ControlsBy;
        global.teamLang = TeamBy;
        global.contentLang = ContentBy;
        break;
      case 'Ru':
        global.controlsLang = ControlsRu;
        global.teamLang = TeamRu;
        global.contentLang = ContentRu;
        break;
      default:
        break;
    }
    this.handleClose();
    ReactDOM.unmountComponentAtNode(document.querySelector('body'));
    ReactDOM.render(<MainScreen />, document.querySelector('body'));
  }

  render() {
    const { anchorEl } = this.state;
    return <div class="page">
      <header>
        <button class="header-link" onClick={this.showArchitects}>{global.controlsLang.header.architects}</button>
        <button class="header-link" onClick={this.showTeam}>{global.controlsLang.header.team}</button>
        <button class="header-link lang-button"
          onClick={(e) => { this.handleClick(e); }}
          aria-owns={anchorEl ? 'simple-menu' : undefined}
          aria-haspopup='true'
        ><Icon>language</Icon></button>
        <Menu
          className='lang-menu'
          id='simple-menu'
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={() => { this.handleClose(); }}
        >
          <MenuItem
            className='lang-menu__item'
            onClick={() => this.changeLang('En')}
          >
            En
          </MenuItem>
          <MenuItem
            className='lang-menu__item'
            onClick={() => this.changeLang('By')}
          >
            By
          </MenuItem>
          <MenuItem
            className='lang-menu__item'
            onClick={() => this.changeLang('Ru')}
          >
            Ru
          </MenuItem>
        </Menu>
      </header>

      <main id="content">
        {/* <Map data={geo} /> */}
        <MainPage i={Math.floor(Math.random() * Math.floor(global.contentLang.length)) }/>
      </main>

      <footer class="popup-container">
      </footer>
    </div>;
  }
}

export default MainScreen;
