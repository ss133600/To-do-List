import styled from 'styled-components';
import { useState } from 'react';

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
  width: 30px;
  height: 30px;
  input[type='checkbox'] {
    appearance: none;
    width: 100%;
    height: 80%;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 50%;
    margin-right: 5px;
    cursor: pointer;
  }

  input[type='checkbox']:checked {
    background-color: #fc6736;
    border-color: #fc6736;
    color: white;
  }

  input[type='checkbox']:checked::after {
    content: '✓';
    display: block;
    text-align: center;
    color: white;
    font-size: 17px;
    font-weight: 600;
    align-items: center;
  }
`;
const Title = styled.div`
  flex: 1;
  /* 부모의 너비가 해당 아이템보다 작아지면 부모의 너비에 맞추어 줄어든다. */
  color: ${(props) => (props.isChecked ? '#828282' : '#222')};
  text-decoration: ${(props) => (props.isChecked ? 'line-through' : 'none')};
  text-decoration-color: #ff7800;
  cursor: pointer;
  font-size: 20px;
  transition: color 0.2s;
`;
const ToDate = styled.div`
  font-size: 13px;
  color: gray;
`;
const RemoveBtn = styled.button`
  cursor: pointer;
  color: #777;
  font-size: 13px;
  font-weight: 500;
  border: 1px solid #999; 
  border-radius: 5px;
  padding: 5px 10px; 
  background-color: transparent;
  transition: background-color 0.2s, color 0.3s, border-color 0.3s; /* 전환 효과를 추가합니다. */

  &:hover {
    color: #fff;
    background-color: #fc6736;
    border-color: #fc6736; 
`;

const TodoItem = ({ id, content, isDone, onUpdate, onDelete, createdTime }) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckBox = () => {
    setIsChecked(!isChecked);
    onUpdate(id);
  };

  const onClickDelete = () => {
    onDelete(id);
  };

  return (
    <TodoItemWrapper>
      <Checkbox className="checkBoxDesign">
        <input type="checkbox" checked={isDone} onChange={toggleCheckBox} />
      </Checkbox>
      <Title isChecked={isChecked || isDone} onClick={toggleCheckBox}>
        {content}
      </Title>
      <ToDate>{createdTime}</ToDate>
      <div className="btnbox">
        <RemoveBtn onClick={onClickDelete}>삭제</RemoveBtn>
      </div>
    </TodoItemWrapper>
  );
};

export default TodoItem;
