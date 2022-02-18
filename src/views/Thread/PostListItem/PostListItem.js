import React from "react";

import { Typography } from "@mui/material";

import moment from "moment";

import * as S from "./PostListItem.styles";

const PostListItem = (props) => {
  const { author, content, date } = props;

  const formattedDate = moment(date).format("YYYY-MM-DD HH:mm:ss");

  return (
    <S.ListItem>
      <S.Header>
        <Typography variant="body1" component="p">
          {author}
        </Typography>
        <Typography variant="body1" component="p">
          {formattedDate}
        </Typography>
      </S.Header>
      {content}
    </S.ListItem>
  );
};

export default PostListItem;
