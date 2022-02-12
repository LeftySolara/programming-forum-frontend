import { Button, TextField } from "@mui/material";
import React from "react";

const PostThreadForm = () => {
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
      />
      <TextField
        id="content"
        type="text"
        label="content"
        name="content"
        required
        multiline
        inputProps={{ "data-testid": "content", "aria-required": "true" }}
      />
      <Button type="submit" variant="contained">
        Submit
      </Button>
    </form>
  );
};

export default PostThreadForm;
