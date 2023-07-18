import React, { useReducer } from 'react';

const initialState = {
  favourites: [],
  showModal: false,
  selectedPhoto: {},
};

const reducer = (state, action) => {
  switch (action.type) {
  case 'TOGGLE_FAVOURITES':
    if (state.favourites.includes(action.id)) {
      return {
        ...state,
        favourites: state.favourites.filter((photo) => photo !== action.id)
      };
    }
      
    return {
      ...state,
      favourites: [...state.favourites, action.id],
    };
  case 'SET_PHOTO_CLICKED':
    return {
      ...state,
      showModal: action.clicked,
    };
  case 'SELECT_PHOTO':
    return {
      ...state,
      selectedPhoto: action.info,
    };
  default:
    throw new Error(
      `Tried to reduce with unsupported action type: ${action.type}`
    );
  }
};

const useApplicationData = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleFavourites = (id) => {
    dispatch({ type: 'TOGGLE_FAVOURITES', id });
  };

  const setShowModal = (clicked) => {
    dispatch({ type: 'SET_PHOTO_CLICKED', clicked });
  };

  const setSelectedPhoto = (info) => {
    dispatch({ type: 'SELECT_PHOTO', info });
  };

  return {
    state: state,
    toggleFavourites,
    setShowModal,
    setSelectedPhoto
  };


};

export default useApplicationData;