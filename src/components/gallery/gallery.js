import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Lightbox from 'react-images-texts-videos';

class Gallery extends Component {
  constructor(props) {
    super(props);
    const itemType = props.type;
    const { data } = props;
    let sources;

    if (itemType === 'images') sources = this.prepareSources(data, itemType, 'buildings');
    else if (itemType === 'videos') {
      sources = this.prepareSources(data, itemType, 'videos');
    }

    this.state = {
      sources,
      lightboxIsOpen: false,
      currentItem: 0,
      itemType,
      showThumbnails: true,
    };

    this.closeLightbox = this.closeLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
    this.gotoItem = this.gotoItem.bind(this);
    this.handleClickItem = this.handleClickItem.bind(this);
    this.onClick = this.handleClickItem.bind(this);
    this.onTouchEnd = this.handleClickItem.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
  }

  prepareSources(data, itemType, rootKey) {
    let result = null;
    if (itemType === 'images') {
      result = Object.keys(data[rootKey]).map(image => ({
        src: `${data[rootKey][image].photo}`,
        name: data[rootKey][image].name,
        year: data[rootKey][image].year,
        caption: `${data[rootKey][image].name}`,
      }));
    } if (itemType === 'videos') {
      if (Object.prototype.hasOwnProperty.call(data, rootKey) && data[rootKey] !==null) {
        result = Object.keys(data[rootKey]).map(video => data[rootKey][video].videoId);
      }
    }
    return result;
  }

  open() {
    this.setState({
      currentItem: 0,
      lightboxIsOpen: true,
    });
  }

  openLightbox(index, event) {
    event.preventDefault();
    this.setState({
      currentItem: index,
      lightboxIsOpen: true,
    });
  }

  closeLightbox() {
    this.setState({
      currentItem: 0,
      lightboxIsOpen: false,
    });
  }

  gotoPrevious() {
    this.setState({
      currentItem: this.state.currentItem - 1,
    });
  }

  gotoNext() {
    this.setState({
      currentItem: this.state.currentItem + 1,
    });
  }

  gotoItem(index) {
    this.setState({
      currentItem: index,
    });
  }

  handleClickItem() {
    if (this.state.currentItem === this.state.sources.length - 1) {
      this.setState({
        currentItem: 0,
        lightboxIsOpen: false,
      });
      return;
    }
    this.gotoNext();
  }

  render() {
    return (
    <Lightbox
    items={{
      type: this.state.itemType,
      srcset: null,
      items: this.state.sources,
    }}
    currentItem = {this.state.currentItem}
    isOpen = {this.state.lightboxIsOpen}
    onClickImage = {this.handleClickItem}
    onClick = {this.onClick}
    onClickItem ={this.onClick}
    onTouchEnd = {this.onTouchEnd}
    onClickNext = {this.gotoNext}
    onClickPrev = {this.gotoPrevious}
    onClickThumbnail = {this.gotoItem}
    onClose = {this.closeLightbox}
    showThumbnails = {this.props.showThumbnails}
    imageCountSeparator = {'/'}
    />
    );
  }
}

Gallery.displayName = 'Gallery';
Gallery.propTypes = {
  heading: PropTypes.string,
  images: PropTypes.array,
  texts: PropTypes.array,
  showThumbnails: PropTypes.bool,
  subheading: PropTypes.string,
};

export default Gallery;
