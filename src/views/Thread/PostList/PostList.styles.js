import styled from "@emotion/styled";

const PostListContainer = styled.div`
  width: 75%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 20px 0px 20px 0px;
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
`;

// eslint-disable-next-line import/prefer-default-export
export { PostListContainer, List };
