import s from './ImageCard.module.css';

const ImageCard = ({ image, openModal }) => {
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
