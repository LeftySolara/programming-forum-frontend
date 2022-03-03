import React, { useContext, useState } from "react";
import { Button, TextField } from "@mui/material";
import { useHistory, useParams } from "react-router-dom";

import AuthContext from "context/auth/auth-context";
import createThread from "api/services/thread";

import * as S from "./PostThreadForm.styles";

const PostThreadForm = () => {
  const [topic, setTopic] = useState("");
  const [content, setContent] = useState("");

  const auth = useContext(AuthContext);
  const history = useHistory();

  // The id of the board to post to
  const { id: boardId } = useParams();

  const handleSubmit = async (event) => {
    event.preventDefault();
    await createThread(auth.userId, topic, content, boardId, auth.token);

    setTopic("");
    setContent("");

    history.push(`/board/${boardId}`);
  };

  return (
    <S.Form onSubmit={handleSubmit}>
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
        sx={{ width: "95%" }}
      />
      <TextField
        id="content"
        type="text"
        label="Post Content"
        name="content"
        required
        multiline
        minRows={6}
        maxRows={6}
        inputProps={{ "data-testid": "content", "aria-required": "true" }}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        sx={{ width: "95%", marginTop: "20px" }}
      />
      <Button
        type="submit"
        variant="contained"
        sx={{
          margin: "20px 0px 0px 20px",
          display: "flex",
          alignSelf: "flex-start",
        }}
      >
        Submit
      </Button>
    </S.Form>
  );
};

export default PostThreadForm;
