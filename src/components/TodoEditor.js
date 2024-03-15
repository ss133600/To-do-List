import styled from 'styled-components';

const EditWrapper = styled.div`
  width: 95%;
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
`;

const TodoEditor = () => {
  return (
    <>
      <EditWrapper>
        <input type="text" placeholder="새로운 Todo 작성하기 ✏️" />
        <InsertBtn>추가</InsertBtn>
      </EditWrapper>
    </>
  );
};
export default TodoEditor;
