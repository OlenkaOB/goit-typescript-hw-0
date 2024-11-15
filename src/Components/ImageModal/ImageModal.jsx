import s from './ImageModal.module.css';
// import { IoIosClose } from 'react-icons/io';
import Modal from 'react-modal';

const ImageModal = ({ image, onClose }) => {
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
    <Modal
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
        {/* <button className={s.closeBtn} onClick={onClose}>
          <IoIosClose />
        </button> */}
      </div>
    </Modal>
  );
};
export default ImageModal;
