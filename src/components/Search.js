import { styled } from 'styled-components';
import { getData } from '../api/axios';
import { useEffect } from 'react';

const Search = ({ setData, setIsFocus, input, setInput }) => {
  const handleFocus = () => {
    setIsFocus(prev => !prev);
  };
  const handleData = e => {
    setInput(e.target.value);
  };
  useEffect(() => {
    getData(input).then(res => {
      console.log('서버 통신');
      setData(res.data);
    });
  }, [input, setData]);
  return (
    <SearchContainer>
      <input onChange={handleData} placeholder="질환명을 입력해주세요." onFocus={handleFocus} onBlur={handleFocus} />
      <button>검색</button>
    </SearchContainer>
  );
};

export default Search;

const SearchContainer = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 35%;
  input {
    flex: 1;
    padding-left: 10px;
    height: 50px;
    border-radius: 10px;
  }
  button {
    border: none;
    background-color: deepskyblue;
    border-radius: 50%;
    height: 70%;
  }
`;
