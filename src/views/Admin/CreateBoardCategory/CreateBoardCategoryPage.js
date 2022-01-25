import React from "react";
import CreateBoardCategoryForm from "./CreateBoardCategoryForm";

const CreateBoardCategoryPage = () => {
  return (
    <>
      <h1>Create Board Category</h1>
      <CreateBoardCategoryForm onSubmit={() => console.log("submitted")} />
    </>
  );
};

export default CreateBoardCategoryPage;
