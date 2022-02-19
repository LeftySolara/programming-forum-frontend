import React, { useState } from "react";

import { Button, TextField, Typography } from "@mui/material";
import { ReplyOutlined } from "@mui/icons-material";
import createPost from "api/services/post";

const ReplyForm = (props) => {
  const { threadId } = props;
  const [content, setContent] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (content === "") {
      return;
    }

    /* TODO: remove placeholder user once auth is implemented */
    createPost("620c11ef46d381e90e7bba37", threadId, content);
    setContent("");
    window.location.reload();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h5" component="h3">
        Quick Reply
      </Typography>
      <TextField
        multiline
        placeholder="Write your reply..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <Button
        variant="contained"
        type="submit"
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <ReplyOutlined />
        Post Reply
      </Button>
    </form>
  );
};

export default ReplyForm;
