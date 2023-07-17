import React, { useState } from "react";

import "./App.scss";

import topics from "./mocks/topics";
import photos from "./mocks/photos";
import HomeRoute from "./routes/HomeRoute";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";
import useApplicationData from "./hooks/userApplicationData";

// Note: Rendering a single component to build components in isolation
const App = () => {
  const { state, setShowModal, setSelectedPhoto, toggleFavourites } = useApplicationData();

  const closemodal = () => {
    setShowModal(false);
  };

  const selectPhoto = (photo) => {
    console.log("selectedphoto", photo);
    setSelectedPhoto(photo);
    setShowModal(true);
  };

  return (
    <div className="App">
      <HomeRoute
        onPhotoSelect={selectPhoto}
        favourites={state.favourites}
        toggleFavourite={toggleFavourites}
      />
      {state.showModal && (
        <PhotoDetailsModal
          onClose={closemodal}
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
