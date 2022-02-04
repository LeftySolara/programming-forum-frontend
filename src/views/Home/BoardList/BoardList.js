import React from "react";
import BoardListItem from "../BoardListItem/BoardListItem";

import * as S from "./BoardList.styles";

/**
 * Displays a list of boards with their topics and descriptions.
 *
 * @param {Array} props.boards An array of board objects with the shape {_id: Stirng, topic: String, description: String}.
 */
const BoardList = (props) => {
  const { boards } = props;

  return (
    <S.List>
      {boards.map((board) => (
        <BoardListItem
          key={board._id}
          id={board._id}
          topic={board.topic}
          description={board.description}
        />
      ))}
    </S.List>
  );
};

export default BoardList;
