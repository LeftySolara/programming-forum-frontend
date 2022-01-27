import React, { useEffect, useState } from "react";
import { getBoardCategories } from "api/services/boardCategories";

const BoardCategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getBoardCategories().then((data) => {
      setCategories(data);
    });
  }, []);

  return (
    <ul>
      {categories.map((cat) => (
        <li key={cat._id}>{cat.topic}</li>
      ))}
    </ul>
  );
};

export default BoardCategoryList;
