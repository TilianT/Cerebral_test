import React from 'react';
import Modal from 'react-modal';
import { state } from 'cerebral'
import { connect } from '@cerebral/react'
import { sequences } from 'cerebral'
import styled from 'styled-components'

Modal.setAppElement('#root')

const customStyles = {
  overlay: {
    zIndex: 100,
  },
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    transform             : 'translate(-50%, -50%)'
  }
};

const ModalContainer = ( { modalInfo, closeModal, posts } ) => {
  const post = posts[modalInfo.id - 1];

  const postTitle = post === undefined ? "nope" : post.title;
  const postText = post === undefined ? "nope" : post.body;

  return (
    <Modal
      isOpen={ modalInfo.show }
      onRequestClose={ () => closeModal() }
      contentLabel="Example Modal"
      style={
        customStyles
      }
    >
      <h3>{ postTitle }</h3>
      <p>{ postText }</p>
      <CloseButton onClick={ () => closeModal() } />
    </Modal>
  );
}

const CloseButton = styled.div`
  position: absolute;
  display: block;
  width: 40px;
  height: 40px;
  top: 0px;
  right: 0;
  
  cursor: pointer;
  
  :hover {
    transform: scale(1.05);
  }
  :active {
    transform: scale(0.95);
  }
  
  ::after,
  ::before {
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    width: 40px;
    height: 4px;
   
    background: #c5c5c5;
    border-radius: 2px;
  }
  ::after {
    transform: rotate(-45deg);
  }
  ::before {
    transform: rotate(45deg);
  }
`

export default connect({
    modalInfo: state`postModal`,
    posts: state`posts`,
    closeModal: sequences`closeModal`,
  },
  ModalContainer
)