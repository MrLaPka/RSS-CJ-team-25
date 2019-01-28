import React, { Component } from 'react';
import MediaButton from '../media-button/media-button';
import './buttons-group.css';

export default class ButtonsGroup extends Component {
  constructor(props) {
    super();
    this.props = props;
  }

  render() {
    return (
      <div className="buttons-group">
        <MediaButton type="videos" icon="videocam" data = {this.props.data} />
        <MediaButton type="images" icon="photo_size_select_actual" data={this.props.data}/>
      </div>
    );
  }
}
