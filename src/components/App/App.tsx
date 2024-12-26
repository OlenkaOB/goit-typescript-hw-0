import React, { useEffect, useState } from 'react';
import { fetchImages } from '../../services/Api';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import SearchBar from '../SearchBar/SearchBar';
import ImageModal from '../ImageModal/ImageModal';
import { ImageData, feachImagesData } from './App.types';

function App() {
  const [query, setQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [images, setImages] = useState<ImageData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<null | ImageData>(null);
  const [totalPages, setTotalPages] = useState<number>(0);

  useEffect(() => {
    if (!query) {
      return;
    }

    const getData = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const { results, total_pages } = await fetchImages<feachImagesData>(query, page);
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

  const onSubmit = (value: string) => {
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

  const openModal = (image: ImageData): void => setSelectedImage(image);
  const closeModal = (): void => setSelectedImage(null);

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
