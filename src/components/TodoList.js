import styled from 'styled-components';
import TodoItem from './TodoItem';

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

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const TodoList = () => {
  return (
    <>
      <SearchBar type="text" placeholder="검색어를 입력하세요"></SearchBar>
      <ListWrapper>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </ListWrapper>
    </>
  );
};
export default TodoList;
