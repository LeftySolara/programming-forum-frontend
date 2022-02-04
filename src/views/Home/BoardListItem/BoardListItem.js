import { Typography } from "@mui/material";
import React from "react";

import { Link } from "react-router-dom";

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
    <li key={id}>
      <Link to={`/board/${topic.replaceAll(" ", "_").toLowerCase()}`}>
        <Typography variant="h4" component="h3">
          {topic}
        </Typography>
      </Link>
      <Typography variant="p" component="p">
        {description}
      </Typography>
    </li>
  );
};

export default BoardListItem;
