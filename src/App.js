import Header from 'components/Header';
import './App.css';
import TodoEditor from 'components/TodoEditor';
import TodoList from 'components/TodoList';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: #444;
  /* gap: 10px; */
`;

function App() {
  return (
    <Wrapper>
      <Header />
      <TodoEditor />
      <TodoList />
    </Wrapper>
  );
}

export default App;
