import React from "react";

const ThreadListItem = (props) => {
  const { topic } = props;

  return <li>{topic}</li>;
};

export default ThreadListItem;
