import { Button, TextField } from "@mui/material";
import React from "react";

const CreateBoardCategoryForm = (props) => {
  const { onSubmit } = props;

  const handleSubmit = (event) => {
    onSubmit();
    event.preventDefault();
  };

  return (
    <form
      autoComplete="off"
      noValidate
      onSubmit={handleSubmit}
      data-testid="create-category-form"
    >
      <TextField
        id="topic"
        type="text"
        label="Topic"
        name="topic"
        variant="outlined"
        required
        inputProps={{ "data-testid": "topic" }}
      />
      <Button type="submit" variant="contained">
        Submit
      </Button>
    </form>
  );
};

export default CreateBoardCategoryForm;
