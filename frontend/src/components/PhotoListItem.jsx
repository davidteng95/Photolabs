
import React from 'react';

import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = (props) => {
  const {photo, favourites, toggleFavourite} = props;
  console.log(props);
  /* Insert React */
  /*<div className='photo-details'>
        <div className='username'>{props.username}</div>
        <div className='location'>{props.location.city}, {props.location.country}</div>
      </div>
      <img src={props.profile} alt={`${props.username}'s profile`} className='profile-picture' />
      */
  return (
    <div className='photo-list__item'>
      <PhotoFavButton favourites={favourites} toggleFavourite={toggleFavourite} photoId={photo.id}/>
      <img src={photo.urls.regular} alt={`Photo ${photo.id}`} className='photo-list__image' />
      
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