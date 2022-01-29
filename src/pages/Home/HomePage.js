import React from "react";

import BoardCategoryList from "components/BoardCategoryList/BoardCategoryList";
import ForumsDisplay from "./ForumsDisplay/ForumsDisplay";

const HomePage = () => {
  return (
    <>
      <h1>Home</h1>
      <ForumsDisplay>
        <BoardCategoryList />
      </ForumsDisplay>
    </>
  );
};

export default HomePage;
