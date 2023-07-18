import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  const { photo, favourites, toggleFavourite, onPhotoSelect } = props;
  
  return (
    <div className="photo-list__item">
      <PhotoFavButton
        favourites={favourites}
        toggleFavourite={toggleFavourite}
        photoId={photo.id}
      />
      <img
        src={photo.urls.regular}
        alt={`Photo ${photo.id}`}
        className="photo-list__image"
        onClick={() => {
          onPhotoSelect(photo);
        }}
      />
      <div className="photo-list__user-details">
        <img src={photo.user.profile} className="photo-list__user-profile"/>
        <div className="photo-list__user-info-box">
          <div className="photo-list__user-info">{photo.user.name}</div>
          <div className="photo-list__user-location">{photo.location.city}, {photo.location.country}</div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
