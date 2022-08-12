import React from 'react';
import Modal from 'react-modal';
import "./style.css";
import criar from "../../assets/criar.svg";

export function SideModal({valueSideModal, setValueSideModal}) {
  return (
    <Modal 
    isOpen={valueSideModal}
    onRequestClose={setValueSideModal}
    className="sideModal">
      <div className="modalHeader">
        <img src={criar}/>
        <h1>Criar card</h1>
      </div>

      <div className="modalContent">
        <label>DIGITE UM NOME PARA O CARD</label>
        <input type="text" placeholder="Digite o título"/>

        <label>INCLUA UMA IMAGEM PARA APARECER NO CARD</label>
        <input type="file" placeholder="Nenhum arquivo selecionado"/>
      </div>

      <div className="btnCreateBox"> 
        <button >Criar card</button>
      </div>
      
      
      
    </Modal>
  )
}
