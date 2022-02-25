import styled from "@emotion/styled";

const List = styled.ul`
  width: 100%;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ListContainer = styled.div`
  width: 75%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  padding: 40px;
  background-color: white;
`;

// eslint-disable-next-line import/prefer-default-export
export { List, ListContainer };
