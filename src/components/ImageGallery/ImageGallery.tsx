import React, { FC } from 'react';
import ImageCard from '../ImageCard/ImageCard';
import s from './ImageGallery.module.css';
import { ImageData } from '../App/App.types';

interface ImageGalleryProps {
  images: ImageData[];
  openModal: (image: ImageData) => void;
}

const ImageGallery: FC<ImageGalleryProps> = ({ images, openModal }) => {
  return (
    <ul className={s.galleryList}>
      {images.map(image => {
        return (
          <li key={image.id} className={s.item}>
            <ImageCard image={image} openModal={openModal} />
          </li>
        );
      })}
    </ul>
  );
};
export default ImageGallery;
