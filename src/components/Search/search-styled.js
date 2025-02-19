import styled from "styled-components";

export const SectionSearch = styled.section`
  width: 100%;
  height: 4rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InputStyled = styled.input`
  width: 80%;
  height: 2rem;
  border-radius: 0.5rem;
  border: 1px solid #000;
  padding: 0.5rem;
  font-size: 1rem;
  outline: none;
  transition: 0.3s;
  &:focus {
    border: 1px solid #b7fbcb;
  }
`;
