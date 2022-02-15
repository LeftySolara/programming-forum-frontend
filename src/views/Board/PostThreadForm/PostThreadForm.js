import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { useParams } from "react-router-dom";

import createThread from "api/services/thread";

const PostThreadForm = () => {
  const [topic, setTopic] = useState("");
  const [content, setContent] = useState("");

  // The id of the board to post to
  const { id: boardId } = useParams();

  const handleSubmit = (event) => {
    event.preventDefault();
    createThread(topic, content, boardId);

    setTopic("");
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id="topic"
        type="text"
        label="Topic"
        name="topic"
        variant="outlined"
        required
        inputProps={{ "data-testid": "topic", "aria-required": "true" }}
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />
      <TextField
        id="content"
        type="text"
        label="content"
        name="content"
        required
        multiline
        inputProps={{ "data-testid": "content", "aria-required": "true" }}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <Button type="submit" variant="contained">
        Submit
      </Button>
    </form>
  );
};

export default PostThreadForm;
