import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

import * as S from "./CreateBoardCategoryForm.styles";

/**
 * A simple form for creating new board categories.
 *
 * @param {function} props.onSubmit A function to execute when the form is submitted. Takes a single string as an argument.
 */
const CreateBoardCategoryForm = (props) => {
  const { onSubmit } = props;

  const [topic, setTopic] = useState("");

  const handleSubmit = (event) => {
    onSubmit(topic);
    setTopic("");
    event.preventDefault();
  };

  // TODO: show confirmation message after form submission
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
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        inputProps={{ "data-testid": "topic", "aria-required": "true" }}
      />
      <Button type="submit" variant="contained" sx={{ width: "20%" }}>
        Submit
      </Button>
    </S.Form>
  );
};

export default CreateBoardCategoryForm;
