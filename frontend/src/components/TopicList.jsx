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

// TopicList.defaultProps = {
//   topics: [
//     {
//       id: "1",
//       slug: "topic-1",
//       title: "Nature",
//     },
//     {
//       id: "2",
//       slug: "topic-2",
//       title: "Travel",
//     },
//     {
//       id: "3",
//       slug: "topic-3",
//       title: "People",
//     },
//   ],
// };
export default TopicList;
