import React, { FC } from 'react';
import s from './ImageCard.module.css';
import { ImageData } from '../App/App.types';

interface ImageCardProps {
  image: ImageData;
  openModal: (image: ImageData) => void;
}

const ImageCard: FC<ImageCardProps> = ({ image, openModal }) => {
  const {
    alt_description,
    urls: { small },
  } = image;
  return (
    <>
      <div className={s.card} onClick={() => openModal(image)}>
        <img src={small} alt={alt_description} className={s.image} />
      </div>
    </>
  );
};

export default ImageCard;
