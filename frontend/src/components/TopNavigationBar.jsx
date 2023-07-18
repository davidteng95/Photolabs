import React from 'react';

import '../styles/TopNavigationBar.scss';
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigationBar = (props) => {

  const isFavPhotoExist = props.favourites.length > 0;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <div className='top-nav-bar__topic__fav'>
        <TopicList topics={props.topics} setTopic={props.setTopic}/>
        <FavBadge isFavPhotoExist={isFavPhotoExist} />
      </div>
    </div>
  );
};

export default TopNavigationBar;