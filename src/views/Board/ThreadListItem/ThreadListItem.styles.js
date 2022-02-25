import styled from "@emotion/styled";

import { Link } from "react-router-dom";

const ListItem = styled.li`
  width: 100%;
  padding: 10px 0px 10px 0px;
  border-bottom: 2px solid ${({ theme }) => theme.palette.seperator};
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

// eslint-disable-next-line import/prefer-default-export
export { ListItem, StyledLink };
