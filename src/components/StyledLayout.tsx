import styled from 'styled-components/macro';

export const StyledRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & > button {
    margin-left: 4px;
    margin-right: 8px;
  }

  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const StyledValue = styled.span`
  font-size: 78px;
  padding-left: 16px;
  padding-right: 16px;
  margin-top: 2px;
  font-family: 'Courier New', Courier, monospace;
`;