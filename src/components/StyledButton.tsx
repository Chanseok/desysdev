import styled from "styled-components/macro";

export const StyledButton = styled.button`
  appearance: none;
  background: none;
  font-size: 32px;
  padding-left: 12px;
  padding-right: 12px;
  outline: none;
  border: 2px solid transparent;
  color: rgb(112, 76, 182);
  padding-bottom: 4px;
  cursor: pointer;
  background-color: rgba(112, 76, 182, 0.1);
  border-radius: 2px;
  transition: all 0.15s;

  &:hover,
  &:focus {
    border: 2px solid rgba(112, 76, 182, 0.4);
  }

  &:active {
    background-color: rgba(112, 76, 182, 0.2);
  }
`;

export const StyledAsyncButton = styled(StyledButton)`
  position: relative;

  &:after {
    content: "";
    background-color: rgba(112, 76, 182, 0.15);
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    opacity: 0;
    transition: width 1s linear, opacity 0.5s ease 1s;
  }
  
  &:active:after {
    width: 0%;
    opacity: 1;
    transition: 0s;
  }
`;
