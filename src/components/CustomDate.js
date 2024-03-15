import styled from 'styled-components';

const Dday = styled.div`
  margin-left: 5px;
  margin-top: 25px;
  margin-bottom: -3px;
  font-size: 16px;
  font-weight: 400;
  font-family: 'YClover';
  font-weight: Regular;
`;

export const CustomDate = () => {
  const today = new Date();
  const formattedDate = `${today.getFullYear()}년
      ${today.getMonth() + 1}월 ${today.getDate()}일 `;

  return (
    <>
      <Dday>
        {formattedDate}
        {today.getDay() === 0
          ? '(일)'
          : today.getDay() === 1
          ? '(월)'
          : today.getDay() === 2
          ? '(화)'
          : today.getDay() === 3
          ? '(수)'
          : today.getDay() === 4
          ? '(목)'
          : today.getDay() === 5
          ? '(금)'
          : '(토)'}
      </Dday>
      <Dday></Dday>
    </>
  );
};
