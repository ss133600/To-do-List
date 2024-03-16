import styled from 'styled-components';
import Clock from './Clock';

const TodoItemWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid rgb(240, 240, 240);
`;
const Checkbox = styled.div`
  display: flex;
  align-items: center;
  width: 20px;
`;
const Title = styled.div`
  flex: 1;
  /* 부모의 너비가 해당 아이템보다 작아지면 부모의 너비에 맞추어 줄어든다. */
`;
const ToDate = styled.div`
  font-size: 12px;
  color: gray;
`;
const RemoveBtn = styled.button`
  cursor: pointer;
  color: gray;
  font-size: 14px;
  border: none;
  border-radius: 5px;
  padding: 5px;
`;

const TodoItem = ({ id, content, isDone, createdClock }) => {
  return (
    <TodoItemWrapper>
      <Checkbox>
        <input type="checkbox" />
      </Checkbox>
      <Title>{content}</Title>
      <ToDate>
        <Clock />
      </ToDate>
      <div className="btnbox">
        <RemoveBtn>삭제</RemoveBtn>
      </div>
    </TodoItemWrapper>
  );
};

export default TodoItem;
