import styled, { css } from "styled-components";

const Form = styled.form`
  max-width: 100%;

  ${(props) =>
    props.type === "regular" &&
    css`
      padding: 2.4rem 4rem;
      background-color: var(--color-grey-0);
      border: 1px solid var(--color-grey-100);
      border-radius: var(--border-radius-md);

      @media (max-width: 600px) {
        padding: 2rem;
      }
    `}

  ${(props) =>
    props.type === "modal" &&
    css`
      width: 100%;
      max-width: 80rem;

      @media (max-width: 900px) {
        max-width: 65rem;
      }

      @media (max-width: 600px) {
        max-width: 100%;
        padding: 2rem;
      }
    `}

  overflow: hidden;
  font-size: 1.4rem;
`;

export default Form;
