import styled from 'styled-components';

const SearchBar = styled.input`
  margin-top: 10px;
  /* margin-left: 15px; */
  box-sizing: border-box;
  width: 95%;
  border: none;
  border-bottom: 1px solid #ccc;
  padding: 15px 15px;
  margin-bottom: 20px;
  &:focus {
    outline: none;
    /* border-bottom: 1px solid #ff2865; */
    border-bottom: 1px solid #fc6736;
  }
`;

const TodoList = () => {
  return (
    <>
      <SearchBar type="text" placeholder="검색어를 입력하세요"></SearchBar>
    </>
  );
};
export default TodoList;
