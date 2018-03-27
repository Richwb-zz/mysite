// Modal component
import React, {Component} from 'react';
import Modal from 'react-modal';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

class ModalHandler extends Component {
  state = {
    isOpen: false
  }
  componentWillMount() {
    Modal.setAppElement('body');
     this.openModal();
  }

  componentDidMount() {
    this.openModal();
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    // this.subtitle.style.color = '#f00';
  }

  openModal = () => {
    this.setState({isOpen: true});
  }
  
  closeModal = () => {
    this.setState({isOpen: false});
    this.props.close();
  }

  render() {
    const modalInfo = this.props.info  
    return (
      <div>
        <Modal
          isOpen={this.state.isOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
  
          <h2 ref={subtitle => this.subtitle = subtitle}>{modalInfo.status}</h2>
          <div>{modalInfo.message}</div>
          <button onClick={this.closeModal}>close</button>
        </Modal>
      </div>
    );
  }
  }

  export default ModalHandler;