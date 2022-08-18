import React from 'react';
import Modal from "react-modal";
import "./style.css";
import lixeira from "../../assets/lixeira.svg";


export function MainModal({valueMainModal, setMainModal}) {
  return (
    <Modal
    isOpen={valueMainModal}
    onRequestClose={setMainModal}
    className="mainModal"
    >
      <div className="modalContainer">
        <div className="imgBox">
          <img src={lixeira}/>
        </div>

        <div className="textBox">
          <h3>Excluir</h3>
          <p>CERTEZA QUE DESEJA EXCLUIR?</p>
        </div>
      </div>

      <div className="modalBtnBox">
        <button className="deleteBtn">
          Excluir
        </button>

        <button className="cancelBtn">
          Cancelar
        </button>
      </div>
    </Modal>
  )
}
