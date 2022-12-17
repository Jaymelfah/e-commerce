import React from "react";
import { AiOutlineClose } from "react-icons/ai";

type ModalProps = {
  setModal: Function
}

export const Modal = ({setModal}: ModalProps) => {

  const close = () => {
    setModal(false)
  }
  
  return (
    <div className="modal-container flex">
     <h1>Modal</h1>
     <AiOutlineClose onClick={close}/>

    </div>
  );
};
