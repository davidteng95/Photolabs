import React, {useState} from 'react';

import '../styles/HomeRoute.scss';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import topics from '../mocks/topics';
import photos from '../mocks/photos';

const HomeRoute = ({ onPhotoSelect, favourites, toggleFavourite}) => {
  

  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} favourites={favourites}/>
      <PhotoList photos={photos} favourites={favourites} toggleFavourite={toggleFavourite} onPhotoSelect={onPhotoSelect}/>
    </div>
  );
};

export default HomeRoute;