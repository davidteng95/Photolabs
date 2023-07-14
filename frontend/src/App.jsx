import React from "react";
// import PhotoList from "./components/PhotoList";
// import PhotoListItem from "./components/PhotoListItem";
import "./App.scss";
// import PhotoFavButton from "./components/PhotoFavButton";
// import TopicList from "./components/TopicList";
// import topics from "./mocks/topics";
// import photos from "./mocks/photos";
// import TopNavigationBar from "./components/TopNavigationBar";
import HomeRoute from "./routes/HomeRoute";

// Note: Rendering a single component to build components in isolation
const App = () => {
  // const photos = new Array(3).fill("");

  return (
    <div className="App">
      <HomeRoute />
      {/* <TopNavigationBar /> */}
      {/* <TopicList topics={topics} /> */}
      {/* <span className="photo-list">
        {photos.map((photo, index) => (<PhotoListItem key={index} photo={photo} />))}
      </span> */}
      {/* <PhotoList /> */}
    </div>
  );
};

export default App;
