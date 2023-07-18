import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = ({ topics, setTopic }) => {
  const list = topics.map((topic) => (
    <TopicListItem
      key={topic.id}
      id={topic.id}
      title={topic.title}
      slug={topic.slug}
      setTopic={setTopic}
    />
  ));
  return <div className="top-nav-bar__topic-list">{list}</div>;
};

export default TopicList;
