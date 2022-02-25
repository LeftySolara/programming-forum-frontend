import React from "react";

import { Typography } from "@mui/material";

import * as S from "./ThreadListItem.styles";

const ThreadListItem = (props) => {
  const { id, topic } = props;

  return (
    <S.ListItem>
      <Typography variant="body1" component="p">
        <S.StyledLink to={`/thread/${id}`}>{topic}</S.StyledLink>
      </Typography>
    </S.ListItem>
  );
};

export default ThreadListItem;
