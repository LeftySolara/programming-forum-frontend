import React from "react";

import { Breadcrumbs, Typography } from "@mui/material";

import * as S from "./Breadcrumbs.styles";

const BoardBreadcrums = (props) => {
  const { location, id } = props;

  return (
    <S.Container>
      <Breadcrumbs aria-label="breadcrumb" separator=">">
        <S.StyledLink to="/">
          <Typography variant="h5" component="h2">
            Index
          </Typography>
        </S.StyledLink>
        <S.StyledLink to={`/board/${id}`}>
          <Typography variant="h5" component="h2">
            {location}
          </Typography>
        </S.StyledLink>
      </Breadcrumbs>
    </S.Container>
  );
};

export default BoardBreadcrums;
