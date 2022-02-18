import React from "react";

const PostListItem = (props) => {
  const { author, content, date } = props;

  return (
    <li>
      {date} {author}: {content}
    </li>
  );
};

export default PostListItem;
