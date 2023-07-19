import { styled } from 'styled-components';

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
    li {
      margin: 5px;
    }
  }
  span {
    margin: 10px 0;
    padding: 0 0 0 10px;
  }
`;

const Result = ({ data }) => {
  const sliceData = data.slice(0, 20);
  if (data.length === 0)
    return (
      <ListContainer>
        <span>검색결과없음</span>
      </ListContainer>
    );
  return (
    <ListContainer>
      <ul>
        {sliceData.map(el => (
          <li key={el.sickCd}>{el.sickNm}</li>
        ))}
      </ul>
    </ListContainer>
  );
};

export default Result;
