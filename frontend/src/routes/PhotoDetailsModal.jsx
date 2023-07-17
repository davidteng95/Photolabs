import React from "react";

import "../styles/PhotoDetailsModal.scss";

import PhotoList from "../components/PhotoList";
import PhotoFavButton from "../components/PhotoFavButton";

const PhotoDetailsModal = (props) => {
  const { onClose, photo, favourites, toggleFavourite } = props;
  console.log("detail", photo);
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={onClose}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_428_287)">
            <path
              d="M14.0625 3.9375L3.9375 14.0625"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.0625 14.0625L3.9375 3.9375"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_428_287">
              <rect width="18" height="18" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>

      <div className="photo-details-modal__images">
        <PhotoFavButton favourites={favourites}
          toggleFavourite={toggleFavourite}/>
        <img src={photo.urls.full} className="photo-details-modal__image" />
        <div className="photo-list__user-details">
          <img src={photo.user.profile} className="photo-list__user-profile" />
          <div className="photo-list__user-info-box">
            <div className="photo-list__user-info">{photo.user.name}</div>
            <div className="photo-list__user-location">
              {photo.location.city}, {photo.location.country}
            </div>
          </div>
        </div>
        <p className="photo-details-modal__header">Similar Photos</p>
        <PhotoList
          photos={Object.values(photo.similarPhotos) || []}
          favourites={favourites}
          toggleFavourite={toggleFavourite}
        />
      </div>
    </div>
  );
};
export default PhotoDetailsModal;
