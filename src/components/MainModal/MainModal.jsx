import React from 'react';
import Modal from "react-modal";
import "./style.css";


export function MainModal({valueMainModal, setMainModal}) {
  return (
    <Modal
    isOpen={valueMainModal}
    onRequestClose={setMainModal}
    className="mainModal"
    >
      <h1>main modal</h1>
    </Modal>
  )
}
