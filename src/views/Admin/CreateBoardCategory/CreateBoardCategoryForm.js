import { Button, TextField } from "@mui/material";
import React, { useContext, useState } from "react";

import AuthContext from "context/auth/auth-context";

import * as S from "./CreateBoardCategoryForm.styles";

/**
 * A simple form for creating new board categories.
 *
 * @param {function} props.onSubmit A function to execute when the form is submitted. Takes a single string as an argument.
 */
const CreateBoardCategoryForm = (props) => {
  const { onSubmit } = props;
  const auth = useContext(AuthContext);

  const [topic, setTopic] = useState("");
  const [sortOrder, setSortOrder] = useState(0);

  const handleSubmit = (event) => {
    onSubmit(topic, sortOrder, auth.token);
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
      <TextField
        id="sort-order"
        type="number"
        label="Sort Order"
        name="sort-order"
        variant="outlined"
        required
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
        inputProps={{ "data-testid": "sort-order", "aria-required": "true" }}
      />
      <Button type="submit" variant="contained" sx={{ width: "20%" }}>
        Submit
      </Button>
    </S.Form>
  );
};

export default CreateBoardCategoryForm;
