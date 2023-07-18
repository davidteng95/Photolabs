import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({ photos, favourites, toggleFavourite, onPhotoSelect }) => {
  
  const list = photos.map((photo) => (
    <PhotoListItem
      key={photo.id}
      photo={photo}
      favourites={favourites}
      toggleFavourite={toggleFavourite}
      onPhotoSelect={onPhotoSelect}
    />
  ));
  return (
    <ul className="photo-list">
      {list}
    </ul>
  );
};

export default PhotoList;
