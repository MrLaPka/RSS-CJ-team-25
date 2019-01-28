
import React, { Component, Fragment } from 'react';
import Icon from '@material-ui/core/Icon';
import Gallery from '../gallery/gallery';
import './media-button.css';

export default class MediaButton extends Component {
  constructor(props) {
    super();
    this.props = props;
    this.gallery = null;
    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    event.preventDefault();
    if (this.gallery) this.gallery.open();
  }

  render() {
    return (
      <Fragment>
        <button
          className="media-button header-link"
          onClick={this.onClick}>
          <Icon>
            {this.props.icon}
          </Icon>
        </button>
        <Gallery
          ref={(CurrentGallery) => { this.gallery = CurrentGallery; }}
          type={this.props.type}
          data={this.props.data}
        />
      </Fragment>
    );
  }
}
