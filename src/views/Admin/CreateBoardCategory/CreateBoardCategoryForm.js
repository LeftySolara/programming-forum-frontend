import { Button, TextField } from "@mui/material";
import React from "react";

import * as S from "./CreateBoardCategoryForm.styles";

const CreateBoardCategoryForm = (props) => {
  const { onSubmit } = props;

  const handleSubmit = (event) => {
    onSubmit();
    event.preventDefault();
  };

  return (
    <S.Form
      autoComplete="off"
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
        inputProps={{ "data-testid": "topic", "aria-required": "true" }}
      />
      <Button type="submit" variant="contained" sx={{ width: "20%" }}>
        Submit
      </Button>
    </S.Form>
  );
};

export default CreateBoardCategoryForm;
