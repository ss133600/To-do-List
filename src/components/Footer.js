import styled from 'styled-components';

const Container = styled.footer`
  padding: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 11px;
  font-family: none;
  font-weight: 400;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
`;

export const Footer = () => {
  return <Container>ⓒ 2024. SERIM SHIN All rights reserved.</Container>;
};
