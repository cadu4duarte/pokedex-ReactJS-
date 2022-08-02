import React from 'react';
import Modal from 'react-modal';

export function SideModal({valueSideModal, setValueSideModal}) {
  const customStyle = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
    }
  }

  return (
    <Modal 
    isOpen={valueSideModal}
    onRequestClose={setValueSideModal}
    style={customStyle}>
      <h1>teste modal</h1>
    </Modal>
  )
}
