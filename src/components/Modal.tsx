import React from "react";
import { AiOutlineClose } from "react-icons/ai";

type ModalProps = {
  setModal: Function
  images: string[]
  count: number
  productArray: {
    id: number
    name: string
    price: string
    imgUrl: string
    desc: string
    del: string
}[]
}

export const Modal = ({setModal, images, count, productArray}: ModalProps) => {

  const close = () => {
    setModal(false)
  }

  return (
    <div className="modal-container flex">
     <AiOutlineClose className="closebtn"onClick={close}/>
     <div className="modal-img flex">
      <img src={productArray[0].imgUrl[count]} alt="imag"/>
     </div>

    </div>
  );
};
