import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import './modal-dialog.css';

export default class ModalDialog extends Component {
  handleClick(e) {
    if (e.target.className === 'modal__screen'
      || e.target.className === 'modal__close') {
      ReactDOM.unmountComponentAtNode(document.querySelector('.popup-container'));
    }
  }

  render() {
    return <div className="modal__screen" onClick={e => this.handleClick(e)}>
      <div class="modal__blur"></div>
      <div className="modal">
        <div className="modal__close">×</div>
        {this.props.data}
      </div>
    </div>;
  }
}
