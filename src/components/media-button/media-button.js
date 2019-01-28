import React, { Component, Fragment } from 'react';
import Icon from '@material-ui/core/Icon';
import Gallery from '../gallery/gallery';
import './media-button.css';

export default class MediaButton extends Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      className: 'media-button header-link',
    };
    const { data } = this.props;

    if (this.props.type === 'videos' && (this.props.data.videos === null || this.props.data.videos === undefined)) {
      this.setState({ className: 'hidden' });
    }

    window.console.log('videos:', this.props.type === 'videos', 'data', this.props.data.videos);

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
          className={this.state.className}
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
