import ReactDOM from 'react-dom';
import React, { Component, Fragment } from 'react';
import Icon from '@material-ui/core/Icon';
import Timeline from '../Timeline/Timeline';
import Teammate from '../teammate/teammate';
import ButtonsGroup from '../buttons-group/buttons-group';
import ModalDialog from '../modal-dialog/modal-dialog';
import Map from '../map/map';

import './architect.css';

export default class Architect extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.gallery = null;
    this.props = props;
  }

  onClick() {
    if (this.gallery) this.gallery.open();
  }

  showMap() {
    ReactDOM.render(<ModalDialog
      className="map-modal"
      data={<Map data={this.props.data.geo} />}
    />, document.querySelector('.popup-container'));
  }

  render() {
    return <section className="architect" >
      <Timeline data={this.props.data} />
      <div className="architect__info">
        <Teammate data={this.props.data} isArchitect={true} />
        <div className="architect-buttons">
          <ButtonsGroup data={this.props.data} />
          {this.props.data.geo !== null && this.props.data.geo !== undefined && <button
            className="media-button header-link"
            onClick={() => this.showMap()}>
            <Icon> place </Icon>
          </button>}
        </div>
      </div>
    </section>;
  }
}
