import { styled } from 'styled-components';

const Result = ({ data, setInput, input, focusIdx }) => {
  if (data.length === 0 || input.length === 0)
    return (
      <ListContainer>
        <span>검색결과없음</span>
      </ListContainer>
    );
  return (
    <ListContainer>
      <ul>
        {data.map((el, idx) => (
          // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
          <li
            role="list"
            key={el.sickCd}
            onClick={() => setInput(el.sickNm)}
            onKeyDown={() => {}}
            className={idx === focusIdx ? 'focus' : ''}>
            {el.sickNm}
          </li>
        ))}
      </ul>
    </ListContainer>
  );
};

export default Result;

const ListContainer = styled.div`
  background-color: white;
  position: absolute;
  top: 210px;
  width: 35%;
  border-radius: 10px;
  border: 1px solid skyblue;
  ul {
    margin: 10px 0;
    padding: 0 0 0 10px;
    .focus {
      background-color: gray;
    }
    li {
      margin: 5px;
      cursor: pointer;
    }
  }
  span {
    margin: 10px 0;
    padding: 0 0 0 10px;
  }
`;
