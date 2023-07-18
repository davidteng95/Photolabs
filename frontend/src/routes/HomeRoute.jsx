import React, {useState} from 'react';

import '../styles/HomeRoute.scss';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';

const HomeRoute = ({ onPhotoSelect, favourites, toggleFavourite, topics, photos, setTopic}) => {
  

  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} favourites={favourites} setTopic={setTopic}/>
      <PhotoList photos={photos} favourites={favourites} toggleFavourite={toggleFavourite} onPhotoSelect={onPhotoSelect}/>
    </div>
  );
};

export default HomeRoute;