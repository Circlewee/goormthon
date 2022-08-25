import styled from 'styled-components';

export const Input = styled.input<{ width?: number }>`
  display: block;
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  height: 53px;
  padding-left: 10px;
  font-size: 22px;
  line-height: 22px;
  border-radius: 0px 5px 5px 5px;
`;
