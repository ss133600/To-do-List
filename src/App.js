import Header from 'components/Header';
import './App.css';
import TodoEditor from 'components/TodoEditor';
import TodoList from 'components/TodoList';
import styled from 'styled-components';
import { useRef, useState } from 'react';

//목 데이터 설정
const mockTodo = [
  {
    id: 0,
    isDone: false,
    content: '네이버 자소서쓰기',
    createdClock: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: '코테 공부하기',
    createdClock: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: 'todolist 시간함수 코딩',
    createdClock: new Date().getTime(),
  },
];

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: #444;
  /* gap: 10px; */
`;

function App() {
  const [todo, setTodo] = useState(mockTodo);
  console.log(todo);

  // 고유 아이디 생성 = useRef
  const idRef = useRef(3);

  // 새로운 할 일 아이템 추가하는 함수 onCreate
  const onCreate = (content) => {
    const newItem = {
      id: idRef.current,
      isDone: false,
      content,
      createdClock: new Date().getTime(),
    };

    setTodo([newItem, ...todo]);
    idRef.current += 1;
  };

  return (
    <Wrapper>
      <Header />
      <TodoEditor onCreate={onCreate} />
      <TodoList />
    </Wrapper>
  );
}

export default App;
