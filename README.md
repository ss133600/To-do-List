[To-Do List] 앱 만들기

프로젝트 준비하기!!

<요구사항>

1. 오늘의 날짜를 요일, 월, 일, 연도 순으로 표시한다.
2. 할 일을 작성하는 입력 폼이 있고 <추가> 버튼을 클릭하면 할 일 아이템을 생성한다.
3. 생성한 아이템 페이지 하단에 리스트로 표시되며, 키워드 검색으로 원하는 할 일만 추출 가능하게 제작한다.
4. 리스트에 아이템 각각에 할 일을 마쳤는지 여부를 표시하는 체크박스, 아이템 이름, 등록 날짜, <삭제> 버튼으로 제작한다.

<해야할일>

- 프로젝트 설정하기
- UI개발
- 컴포넌트 나누기
- CRUD
- 데이터 모델링
- 목 데이터
- 기능의 흐름
- 기능의 완성도
- key, map, filter

<UI컴포넌트 단위>

- Header: 오늘의 날짜를 표시합니다.
- TodoEditor: 새로운 할 일 아이템을 등록합니다.
- TodoList: 검색어에 맞게 필터링된 할 일 리스트를 렌더링 합니다.
  (검색 폼이 공백이면 필터링 하지 않는다)
- TodoItem: 할 일 아이템에는 기본 정보외에도 체크박스와 <삭제> 버튼으로 구성한다. 체크박스를 클릭 할 시 할 일을 마쳤는지 토글되고 <삭제> 버튼을 클릭 할 시 해당 아이템을 삭제한다.

<필요 라이브러리 설치>

- npm i styled-components
- npm i react-icons
