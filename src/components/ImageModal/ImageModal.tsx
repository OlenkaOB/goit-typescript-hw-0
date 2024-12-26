import React, { FC } from 'react';
import s from './ImageModal.module.css';
import ReactModal from 'react-modal';
import { ImageData } from '../App/App.types';

interface ImageModalProps {
  image: ImageData;
  onClose: () => void;
}

const ImageModal: FC<ImageModalProps> = ({ image, onClose }) => {
  if (!image) {
    return null;
  }
  const {
    urls: { regular },
    alt_description,
    user: { name },
    likes,
  } = image;
  return (
    <ReactModal
      isOpen={!!image}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      className={s.modal}
      overlayClassName={s.overlay}
      ariaHideApp={false}
    >
      <div>
        <img src={regular} alt={alt_description} className={s.img} />
        <p>{alt_description || 'No description'}</p>
        <p>Author: {name}</p>
        <p>Likes: {likes} </p>
      </div>
    </ReactModal>
  );
};
export default ImageModal;
