import styled from "@emotion/styled";

const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  background-color: ${({ theme }) => theme.palette.background};
`;

const ListContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

const Header = styled.div`
  width: 100%;
  margin-top: 40px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;
`;

// eslint-disable-next-line import/prefer-default-export
export { PageContainer, ListContainer, Header };
