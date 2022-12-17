import React from "react";
import { AiOutlineClose } from "react-icons/ai";

type ModalProps = {
  setModal: Function
  images: string[]
  count: number
}

export const Modal = ({setModal, images, count}: ModalProps) => {

  const close = () => {
    setModal(false)
  }

  return (
    <div className="modal-container flex">
     <AiOutlineClose className="closebtn"onClick={close}/>
     <div className="modal-img flex">
      <img src={images[count]} alt="imag"/>
     </div>

    </div>
  );
};
