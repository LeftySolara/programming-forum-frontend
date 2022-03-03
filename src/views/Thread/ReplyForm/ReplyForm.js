import React, { useContext, useState } from "react";

import { Button, TextField, Typography } from "@mui/material";
import { ReplyOutlined } from "@mui/icons-material";
import createPost from "api/services/post";

import AuthContext from "context/auth/auth-context";

import * as S from "./ReplyForm.styles";

const ReplyForm = (props) => {
  const { threadId } = props;
  const [content, setContent] = useState("");

  const auth = useContext(AuthContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (content === "") {
      return;
    }

    await createPost(auth.userId, threadId, content, auth.token);
    setContent("");
    window.location.reload();
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <Typography
        variant="h5"
        component="h3"
        sx={{
          display: "flex",
          alignSelf: "flex-start",
          marginLeft: "30px",
          marginBottom: "5px",
        }}
      >
        Quick Reply
      </Typography>
      <TextField
        multiline
        minRows={6}
        maxRows={6}
        placeholder="Write your reply..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        sx={{ width: "95%" }}
      />
      <Button
        variant="contained"
        type="submit"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignSelf: "flex-end",
          marginRight: "30px",
          marginTop: "15px",
        }}
      >
        <ReplyOutlined />
        Post Reply
      </Button>
    </S.Form>
  );
};

export default ReplyForm;
