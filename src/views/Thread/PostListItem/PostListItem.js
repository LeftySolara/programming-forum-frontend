import React from "react";

import moment from "moment";

import * as S from "./PostListItem.styles";

const PostListItem = (props) => {
  const { author, content, date } = props;

  const formattedDate = moment(date).format("YYYY-MM-DD HH:mm:ss");

  return (
    <S.ListItem key={date}>
      [{formattedDate}] {author}: {content}
    </S.ListItem>
  );
};

export default PostListItem;
