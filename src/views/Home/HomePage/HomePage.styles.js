import styled from "@emotion/styled";

const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.palette.background};
`;
// eslint-disable-next-line import/prefer-default-export
export { PageContainer };
