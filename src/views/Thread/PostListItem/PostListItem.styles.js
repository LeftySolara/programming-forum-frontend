import styled from "@emotion/styled";

const ListItem = styled.li`
  list-style: none;
  margin: 0;
  padding: 10px;
`;

const Header = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  border-bottom: 2px solid gray;
`;

export { ListItem, Header };
