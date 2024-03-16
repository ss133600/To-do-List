import Header from 'components/Header';
import './App.css';
import TodoEditor from 'components/TodoEditor';
import TodoList from 'components/TodoList';
import styled from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import { Footer } from 'components/Footer';

//목 데이터 설정
const mockTodo = [
  {
    id: 0,
    isDone: false,
    content: '네이버 자소서',
    createdTime: '오전 10:00',
  },
  {
    id: 1,
    isDone: false,
    content: '코테 공부하기',
    createdTime: '오전 11:00',
  },
  {
    id: 2,
    isDone: false,
    content: 'todolist시간기능 구현',
    createdTime: '오전 12:00',
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

  useEffect(() => {
    // 로컬 스토리지에서 할 일 목록 가져오기
    const savedTodo = JSON.parse(localStorage.getItem('todo'));
    if (savedTodo) {
      setTodo(savedTodo);
    }
  }, []);

  // 고유 아이디 생성 = useRef
  const idRef = useRef(3);

  const saveTodoToLocalStorage = (todoList) => {
    // 로컬 스토리지에 할 일 목록 저장
    localStorage.setItem('todo', JSON.stringify(todoList));
  };

  // 새로운 할 일 아이템 추가하는 함수 onCreate
  const onCreate = (content) => {
    const newItem = {
      id: idRef.current,
      isDone: false,
      content,
      createdTime: getCurrentTime(),
    };

    setTodo((prevTodo) => {
      const updatedTodo = [newItem, ...prevTodo];
      saveTodoToLocalStorage(updatedTodo);
      return updatedTodo;
    });
    idRef.current += 1;
  };

  // 할 일 수정을 위한 함수
  const onUpdate = (targetId) => {
    setTodo((prevTodo) => {
      const updatedTodo = prevTodo.map((it) => {
        if (it.id === targetId) {
          return {
            ...it,
            isDone: !it.isDone,
          };
        }
        return it;
      });
      saveTodoToLocalStorage(updatedTodo);
      return updatedTodo;
    });
  };

  // 할 일 삭제하는 함수
  const onDelete = (targetId) => {
    setTodo((prevTodo) => {
      const updatedTodo = prevTodo.filter((it) => it.id !== targetId);
      saveTodoToLocalStorage(updatedTodo);
      return updatedTodo;
    });
  };

  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours();
    const ampm = hours >= 12 ? '오후' : '오전';
    const formattedHours = hours % 12 || 12;
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${ampm} ${formattedHours}:${minutes}`;
  };

  return (
    <Wrapper>
      <Header />
      <TodoEditor onCreate={onCreate} />
      <TodoList
        todo={todo}
        onUpdate={onUpdate}
        onDelete={onDelete}
        getCurrentTime={getCurrentTime}
      />
      <Footer />
    </Wrapper>
  );
}

export default App;
