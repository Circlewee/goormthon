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

export const DeleteButton = styled.button`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  border-radius: 50%;
  background-color: #35393c;
  opacity: 0.5;

  img {
    width: 8px;
    height: 8px;
  }
`;
