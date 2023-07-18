import React, { useState, useEffect } from "react";

import "./App.scss";

import HomeRoute from "./routes/HomeRoute";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";
import useApplicationData from "./hooks/userApplicationData";

const App = () => {
  const { state, setShowModal, setSelectedPhoto, toggleFavourites } =
    useApplicationData();

  const [photos, setPhotos] = useState([]);
  const [topics, setTopics] = useState([]);
  const [topic, setTopic] = useState(null);

  useEffect(() => {
    fetch("/api/photos")
      .then((res) => res.json())
      .then((data) => setPhotos(data))
      .catch((error) => {
        console.error("Error fetching photos:", error);
      });
    fetch("/api/topics")
      .then((res) => res.json())
      .then((data) => setTopics(data))
      .catch((error) => {
        console.error("Error fetching topics:", error);
      });
  }, []);

  useEffect(() => {
    if (topic) {
      fetch(`/api/topics/photos/${topic}`)
        .then((res) => res.json())
        .then((data) => {
          setPhotos(data);
        });
    }
  }, [topic]);

  const closeModal = () => {
    setShowModal(false);
  };

  const selectPhoto = (photo) => {
    setSelectedPhoto(photo);
    setShowModal(true);
  };

  return (
    <div className="App">
      <HomeRoute
        onPhotoSelect={selectPhoto}
        favourites={state.favourites}
        toggleFavourite={toggleFavourites}
        photos={photos}
        topics={topics}
        setTopic={setTopic}
      />
      {state.showModal && (
        <PhotoDetailsModal
          onClose={closeModal}
          photo={state.selectedPhoto}
          topics={topics}
          favourites={state.favourites}
          toggleFavourite={toggleFavourites}
          photos={photos}
        />
      )}
    </div>
  );
};

export default App;
