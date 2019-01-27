import React, { Component } from 'react';
import PhotoAvatar from '../photo-avatar/photo-avatar';
import './teammate.css';

export default class Teammate extends Component {
  constructor({ props }) {
    super();
    this.props = props;
  }

  render() {
    return (
      <article className="teammate" onClick={this.props.onClick}>
        <div className="teammate-photo">
          <PhotoAvatar alt={this.props.data.name} img={this.props.data.photo} />
          {this.props.isArchitect !== true && <a href={this.props.data.github} className="teammate-link" target="_blank"></a>}
        </div>
        <div className="teammate-about">
          <h3 className={`teammate-caption ${this.props.isArchitect === true && 'teammate_architect-name'}`}>{this.props.data.name}</h3>
          <p className={`teammate-text ${this.props.isArchitect === true && 'teammate_architect-text'}`}>{this.props.data.about}</p>
        </div>
      </article>
    );
  }
}
