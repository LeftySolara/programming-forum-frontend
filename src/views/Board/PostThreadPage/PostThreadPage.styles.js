import styled from "@emotion/styled";

const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 60px;
  flex-flow: column nowrap;
  background-color: ${({ theme }) => theme.palette.background};
`;

// eslint-disable-next-line import/prefer-default-export
export { PageContainer };
