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
  },
  {
    id: 1,
    isDone: false,
    content: '코테 공부하기',
  },
  {
    id: 2,
    isDone: false,
    content: 'todolist 시간함수 코딩',
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

  // 할 일 수정을 위한 함수
  const onUpdate = (targetId) => {
    setTodo(
      todo.map((it) => {
        if (it.id === targetId) {
          return {
            ...it,
            isDone: !it.isDone,
          };
        } else {
          return it;
        }
      }),
    );
  };

  // 할 일 삭제하는 함수
  const onDelete = (targetId) => {
    setTodo(todo.filter((it) => it.id !== targetId));
  };

  return (
    <Wrapper>
      <Header />
      <TodoEditor onCreate={onCreate} />
      <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete} />
    </Wrapper>
  );
}

export default App;
