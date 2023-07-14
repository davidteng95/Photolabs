import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="photo-list__fav-icon" onClick={handleClick} >
      <div className="photo-list__fav-icon-svg">
        <FavIcon fill={isActive ? "red" : "#EEEEEE"} />
      </div>
    </div>
  );
};

export default PhotoFavButton;