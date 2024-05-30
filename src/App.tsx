import { useState, useEffect } from 'react'
import axios from 'axios';
import ErrorMessage from "./components/errorMessage/ErrorMessage";
import ImageGallery from "./components/imageGallery/ImageGallery";
import ImageModal from "./components/imageModal/ImageModal";
import Loader from "./components/loader/Loader";
import LoadMoreBtn from "./components/loadMoreBtn/LoadMoreBtn";
import SearchBar from "./components/searchBar/SearchBar";
import { Toaster } from 'react-hot-toast';
import './App.css'

interface Image {
  id: string;
  urls: {
    small: string;
  }
}

const App: React.FC = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  const fetchImages = async (searchQuery: string, numPage: number): Promise<Image[]> => {
    try {
      setLoading(true);
      const res = await axios.get(
        `https://api.unsplash.com/search/photos?page=${numPage}&query=${searchQuery}`,
        {
          headers: {
            Authorization: "Client-ID 4_WR11_Ip7hlbyldxvi0tM0qq9C8X4YXsdYSKHHG6h4",
          },
        }
      );
      return res.data.results;
    } catch (error: any) {
      setError(error.message);
      return[];
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (query !== "") {
          const newImages = await fetchImages(query, page);
          setImages((prevImg) => [...prevImg, ...newImages]);
        }
      } catch (error) {
        setError(error.message)
      }
    };

    fetchData();
  }, [query, page]);

  const handleSubmit = (searchQuery: string) => {
    setQuery(searchQuery);
    setError(null);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const modalOpen = (photo) => {
    setSelectedImage(photo);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
    <SearchBar onSubmit={handleSubmit}/>
    {error ? (
      <ErrorMessage message={error} />
    ) : (
      <ImageGallery images={images} openModal={modalOpen} />
    )}
    {images.length > 0 && !error && <LoadMoreBtn onClick={handleLoadMore} />}

    {modalIsOpen && selectedImage && (
      <ImageModal image={selectedImage} openModal={modalIsOpen} closeModal={closeModal} />
    )}
    {loading && <Loader />}
    <Toaster position='top-right' reverseOrder={false} />
    </>
  );
}

export default App
