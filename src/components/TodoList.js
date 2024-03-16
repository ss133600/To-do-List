import styled from 'styled-components';
import TodoItem from './TodoItem';
import { useState } from 'react';

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

const TodoList = ({ todo, onUpdate, onDelete, getCurrentTime }) => {
  const [search, setSearch] = useState('');

  //감지를 위한 값
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  //필터링 되는 값
  const getSearchResult = () => {
    return search === ''
      ? todo
      : todo.filter((it) =>
          it.content.toLowerCase().includes(search.toLowerCase()),
        );
    //toLowerCase은 대소문자 구별 없이 쓸 수 있음
  };

  return (
    <>
      <SearchBar
        type="text"
        placeholder="검색어를 입력하세요"
        onChange={onChangeSearch}
      ></SearchBar>
      <ListWrapper>
        {getSearchResult().map((it) => (
          <TodoItem
            key={it.id}
            {...it}
            onUpdate={onUpdate}
            onDelete={onDelete}
            getCurrentTime={getCurrentTime}
          />
        ))}
      </ListWrapper>
    </>
  );
};
export default TodoList;
