import React from "react";

import BoardCategoryList from "views/Home/BoardCategoryList/BoardCategoryList";
import ForumsDisplay from "views/Home/ForumsDisplay/ForumsDisplay";

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
