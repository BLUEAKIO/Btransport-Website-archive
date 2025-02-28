import styled from 'styled-components';

const mockStyled = (component) => {
  return styled(component)`
    ${(props) => props.css}
  `;
};

module.exports = {
  ...styled,
  default: mockStyled,
  css: jest.fn(),
  styled: mockStyled,
};
