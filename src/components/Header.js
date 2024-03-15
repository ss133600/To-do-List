import styled from 'styled-components';
import { CustomDate } from './CustomDate';

const H2 = styled.p`
  /* margin-left: 15px; */
  margin-top: 20px;
  color: #333;
  font-size: 37px;
  font-family: 'YClover';
  font-weight: Bold;
`;

const Header = () => {
  return (
    <>
      <H2>TO-DO LIST 햍</H2>
      <CustomDate />
    </>
  );
};

export default Header;
