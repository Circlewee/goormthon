import styled from 'styled-components';

export const Label = styled.label`
  display: inline-block;
  padding: 6px 10px;
  border-radius: 8px 8px 0px 0px;
  background-color: ${({ theme }) => theme.color.darkBlue};
  color: #ffffff;
  font-size: 12px;
  line-height: 12px;
  letter-spacing: -0.02em;
`;
