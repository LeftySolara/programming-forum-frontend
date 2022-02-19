import React from "react";

import { Button, TextField, Typography } from "@mui/material";
import { ReplyOutlined } from "@mui/icons-material";

const ReplyForm = () => {
  return (
    <form>
      <Typography variant="h5" component="h3">
        Quick Reply
      </Typography>
      <TextField multiline placeholder="Write your reply..." />
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
