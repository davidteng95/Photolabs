import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  // console.log(props);
  return (
    <div className="topic-list__item" onClick={() => props.setTopic(props.id)}>
      <span>{props.title}</span>
    </div>
  );
};

// TopicListItem.defaultProps = {
//   id: "1",
//   slug: "topic-1",
//   title: "Nature",
// };

export default TopicListItem;
