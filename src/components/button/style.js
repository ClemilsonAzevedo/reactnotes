import styled from "styled-components";

export const Container = styled.button`
  width: auto;
  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  
  height: 56px;
  padding: 0 16px;
  border: 0;

  margin-top: 16px;
  border-radius: 10px;
  font-weight: 500;

  &:disabled{
    opacity: .5;
  }
`