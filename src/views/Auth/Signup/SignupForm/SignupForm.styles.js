import styled from "@emotion/styled";

const Form = styled.form`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  height: 400px;
  width: 450px;
  @media (max-width: 450px) {
    width: 350px;
  }
`;

// eslint-disable-next-line import/prefer-default-export
export { Form };
