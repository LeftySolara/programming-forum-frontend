import React, { useEffect, useState } from "react";

import {
  Button,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";

import useAxios from "hooks/useAxios";
import { createBoard } from "api/services/board";

import * as S from "./CreateBoardForm.styles";

const CreateBoardForm = () => {
  const [topic, setTopic] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [categoryOptions, setCategoryOptions] = useState([]);
  const [resultMessage, setResultMessage] = useState("");

  const {
    response: categories,
    error,
    loading,
  } = useAxios({
    method: "GET",
    url: "/boardCategories",
  });

  useEffect(() => {
    if (categories) {
      setCategoryOptions(categories.sort((a, b) => a.topic > b.topic));
    }
  }, [categories]);

  const handleSubmit = (event) => {
    event.preventDefault();

    createBoard(topic, description, category).then((response) => {
      if (response.status === 201) {
        setResultMessage("Successfully created board.");
      } else {
        setResultMessage(response.data.message);
      }
    });

    setTopic("");
    setDescription("");
    setCategory("");
  };

  return (
    <>
      {loading ? (
        <CircularProgress />
      ) : (
        <Box>
          {error && error.message}
          <S.Form
            autoComplete="off"
            data-testid="create-board-form"
            onSubmit={handleSubmit}
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
              id="description"
              type="text"
              label="Description"
              name="description"
              variant="outlined"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              inputProps={{
                "data-testid": "description",
                "aria-required": "true",
              }}
            />
            <Box>
              <FormControl fullWidth>
                <InputLabel id="category-select-label">Category</InputLabel>
                <Select
                  labelId="category-select-label"
                  id="category-select"
                  value={category}
                  label="Category"
                  name="category"
                  onChange={(e) => setCategory(e.target.value)}
                  inputProps={{
                    "data-testid": "category",
                    "aria-required": "true",
                  }}
                  required
                >
                  {categoryOptions.map((option) => (
                    <MenuItem value={option._id} key={option._id}>
                      {option.topic}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <Button type="submit" variant="contained" sx={{ width: "20%" }}>
              Submit
            </Button>
          </S.Form>
          {resultMessage && (
            <Typography variant="p" component="p">
              {resultMessage}
            </Typography>
          )}
        </Box>
      )}
    </>
  );
};

export default CreateBoardForm;
