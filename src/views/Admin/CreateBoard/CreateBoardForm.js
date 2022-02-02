import React, { useEffect, useState } from "react";

import {
  Button,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";

import useAxios from "hooks/useAxios";

import * as S from "./CreateBoardForm.styles";

const CreateBoardForm = () => {
  const [topic, setTopic] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [categoryOptions, setCategoryOptions] = useState([]);

  const { response, error, loading } = useAxios({
    method: "GET",
    url: "/boardCategories",
  });

  useEffect(() => {
    if (response) {
      setCategoryOptions(response.sort((a, b) => a.topic > b.topic));
    }
  }, [response]);

  return (
    <>
      {loading ? (
        <CircularProgress />
      ) : (
        <Box>
          {error && error.message}
          <S.Form autoComplete="off" data-testid="create-board-form">
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
        </Box>
      )}
    </>
  );
};

export default CreateBoardForm;
