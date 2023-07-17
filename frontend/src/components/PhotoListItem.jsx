import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  const { photo, favourites, toggleFavourite, onPhotoSelect } = props;
  // console.log("photolistitem", photo);
  // console.log(props);
  /* Insert React */
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

// PhotoListItem.defaultProps = {
//   "id": "1",
//   "location": {
//     "city": "Montreal",
//     "country": "Canada"
//   },
//   "imageSource": `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
//   "username": "Joe Example",
//   "profile": `${process.env.PUBLIC_URL}/profile-1.jpg`
// };

export default PhotoListItem;
