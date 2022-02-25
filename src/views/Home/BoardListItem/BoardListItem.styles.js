import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

const Li = styled.li`
  width: 100%;
  padding: 10px 0px 10px 0px;
  border-bottom: 2px solid ${({ theme }) => theme.palette.seperator};
`;

// eslint-disable-next-line import/prefer-default-export
export { StyledLink, Li };
