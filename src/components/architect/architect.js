import ReactDOM from 'react-dom';
import React, { Component, Fragment } from 'react';
import Timeline from '../Timeline/Timeline';
import Teammate from '../teammate/teammate';
import ButtonsGroup from '../buttons-group/buttons-group';
import Icon from '@material-ui/core/Icon';
import ModalDialog from '../modal-dialog/modal-dialog';
import Map from '../map/map';

import './architect.css';

export default class Architect extends Component {
  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
    this.gallery = null;
  }

  onClick() {
    if (this.gallery) this.gallery.open();
  }

  showMap() {
    ReactDOM.render(<ModalDialog data={<Map data={this.props.data.geo} />} />, document.querySelector('.popup-container'));
  }

  // takes a whole architect as 'data'
  render() {
    return <section className="architect" >
      <Timeline data={this.props.data} />
      <div className="architect__info">
        <Teammate data={this.props.data} isArchitect={true} />
        <Fragment>
          <ButtonsGroup data={this.props.data} />
          <button className="media-button header-link" onClick={this.showMap}>
            <Icon> place </Icon>
          </button>
        </Fragment>
      </div>
    </section>;
  }
}
