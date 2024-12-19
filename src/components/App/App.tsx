import { React } from 'react';
import { useEffect, useState } from 'react';
import { fetchImages } from '../../services/Api';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import SearchBar from '../SearchBar/SearchBar';
import ImageModal from '../ImageModal/ImageModal';

function App() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    if (!query) {
      return;
    }

    const getData = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const { results, total_pages } = await fetchImages(query, page);
        setImages(prev => [...prev, ...results]);
        setTotalPages(total_pages);
      } catch (error) {
        console.log('Error in getData:', error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [query, page]);

  const onSubmit = value => {
    setPage(1);
    setImages([]);
    setQuery(value);
  };

  const onPage = () => {
    if (page >= totalPages) {
      console.log('No more images to load');
      return;
    }
    setPage(prev => prev + 1);
  };

  const openModal = image => setSelectedImage(image);
  const closeModal = () => setSelectedImage(null);

  return (
    <div>
      <SearchBar onSubmit={onSubmit} />
      {images.length > 0 && <ImageGallery images={images} openModal={openModal} />}
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {images.length > 0 && page < totalPages && !isError && (
        <LoadMoreBtn onPage={onPage} isLoading={isLoading} />
      )}
      <ImageModal image={selectedImage} onClose={closeModal} />
    </div>
  );
}

export default App;
