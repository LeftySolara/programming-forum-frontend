import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Container = styled.div`
  padding: 20px;
`;

// eslint-disable-next-line import/prefer-default-export
export { StyledLink, Container };
