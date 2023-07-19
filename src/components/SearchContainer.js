import { useState } from 'react';
import Result from './Result';
import Search from './Search';
import { styled } from 'styled-components';

const SSearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #98dfff;
  position: relative;
  width: 100%;
  height: 50%;
`;

const SearchContainer = () => {
  const [data, setData] = useState([]);
  const [isFocus, setIsFocus] = useState(false);
  const [input, setInput] = useState('');
  return (
    <SSearchContainer>
      <Search setData={setData} setIsFocus={setIsFocus} setInput={setInput} input={input} />
      {isFocus && <Result data={data} />}
    </SSearchContainer>
  );
};

export default SearchContainer;
