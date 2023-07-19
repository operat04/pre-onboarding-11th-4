import { useState } from 'react';
import { styled } from 'styled-components';
import Result from './Result';
import Search from './Search';

const SSearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #cae9ff;
  position: relative;
  width: 100%;
  height: 50%;
  h1 {
    margin: 5px 0;
  }
`;

const SearchContainer = () => {
  const [focusIdx, setFocusIdx] = useState(-1);
  const [data, setData] = useState([]);
  const [isFocus, setIsFocus] = useState(false);
  const [input, setInput] = useState('');
  const sliceData = data.slice(0, 10);
  return (
    <SSearchContainer>
      <h1>국내 모든 임상시험 검색하고</h1>
      <h1>온라인으로 참여하기</h1>
      <Search
        setData={setData}
        setIsFocus={setIsFocus}
        setInput={setInput}
        input={input}
        data={sliceData}
        setFocusIdx={setFocusIdx}
        focusIdx={focusIdx}
      />
      {isFocus && <Result data={sliceData} setInput={setInput} input={input} focusIdx={focusIdx} />}
    </SSearchContainer>
  );
};

export default SearchContainer;
