import { Typography } from "@mui/material";
import React from "react";

import * as S from "./BoardListItem.styles";

/**
 * Displays a board's topic and description.
 *
 * @param {String} props.id The board's database ID.
 * @param {String} props.topic The board's topic.
 * @param {String} props.description The board's description.
 */
const BoardListItem = (props) => {
  const { id, topic, description } = props;

  return (
    <S.Li key={id}>
      <S.StyledLink
        to={`/board/${topic
          .replaceAll(" ", "_")
          .replaceAll(",", "")
          .replaceAll("C++", "cpp")
          .replaceAll("C#", "cs")
          .replaceAll("_and_", "_")
          .toLowerCase()}`}
      >
        <Typography variant="link" component="h3">
          {topic}
        </Typography>
      </S.StyledLink>
      <Typography variant="body1" component="p">
        {description}
      </Typography>
    </S.Li>
  );
};

export default BoardListItem;
