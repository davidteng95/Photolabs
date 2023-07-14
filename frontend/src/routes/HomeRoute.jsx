import React, {useState} from 'react';

import '../styles/HomeRoute.scss';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import topics from '../mocks/topics';
import photos from '../mocks/photos';

const HomeRoute = () => {
  const [favourites, setFavourites] = useState([]);
  console.log("favourites", favourites);
  const toggleFavourite = (photoId) => {
    console.log("photoid", photoId, favourites);
    if (favourites.includes(photoId)) {
      //already included
      setFavourites((prev) => prev.filter((photo) => (photo !== photoId)));
      return;
    }
    // not add
    setFavourites((prev) => {
      return ([...prev, photoId]);
    });
  };

  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} favourites={favourites}/>
      <PhotoList photos={photos} favourites={favourites} toggleFavourite={toggleFavourite}/>
    </div>
  );
};

export default HomeRoute;