import React from "react";

import { Card, Typography } from "@mui/material";

import * as S from "./ThreadListItem.styles";

const ThreadListItem = (props) => {
  const { id, topic } = props;

  return (
    <li>
      <Card sx={{ marginTop: "20px" }}>
        <Typography variant="h5" component="p">
          <S.StyledLink to={`/thread/${id}`}>{topic}</S.StyledLink>
        </Typography>
      </Card>
    </li>
  );
};

export default ThreadListItem;
