import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  border: 0;
  border-radius: 10px;
  padding: 22px;
  margin-bottom: 16px;

  > h1 {
    text-align: left;
    flex: 1;
    font-weight: 700;
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > footer{
    width: 100%;
    display: flex;
    margin-top: 24px;
  }

  
`