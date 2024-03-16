import { useRef, useState } from 'react';
import styled from 'styled-components';

const EditWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 5px;

  input {
    /* margin-left: 10px; */
    flex: 1;
    box-sizing: border-box;
    border: 1px solid rgb(220, 220, 220);
    border-radius: 5px;
    padding: 15px;
    font-weight: 500;
  }
  input:focus {
    outline: none;
    /* border: 1px solid #ff2865; */
    border: 1px solid #fc6736;
  }
`;

const InsertBtn = styled.button`
  cursor: pointer;
  width: 60px;
  border: none;
  /* background: #ff2865; */
  background-color: #fc6736;
  color: white;
  border-radius: 5px;
  font-weight: 500;
`;

const TodoEditor = ({ onCreate }) => {
  //전달받은 데이터를 저장 할 함수
  const [content, setContent] = useState('');
  console.log(content);
  const inputRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  //content에 빈 문자열이면 input에 커서가 들어감
  const onSubmit = () => {
    if (!content) {
      inputRef.current.focus();
      return;
    }
    onCreate(content);
    //아이템 추가한 후 빈 입력상자 만들기
    setContent('');
  };

  //Enter키로 아이템 추가하기
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  return (
    <>
      <EditWrapper>
        <input
          type="text"
          placeholder="새로운 Todo 작성하기 ✏️"
          value={content}
          onChange={onChangeContent}
          ref={inputRef}
          onKeyDown={onKeyDown}
        />

        <InsertBtn onClick={onSubmit}>추가</InsertBtn>
      </EditWrapper>
    </>
  );
};
export default TodoEditor;
