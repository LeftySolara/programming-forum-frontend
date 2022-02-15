import React, { useState } from "react";
import { Button, TextField } from "@mui/material";

const PostThreadForm = () => {
  const [topic, setTopic] = useState("");
  const [content, setContent] = useState("");

  return (
    <form>
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
