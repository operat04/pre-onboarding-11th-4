import { styled } from 'styled-components';
import { useEffect } from 'react';
import getData from '../api/axios';

const Search = ({ setData, setIsFocus, input, setInput, setFocusIdx, data, focusIdx }) => {
  const GetListData = () => {
    if (localStorage.getItem(input)) {
      if (JSON.parse(localStorage.getItem(input)).expiration < new Date().getTime()) {
        localStorage.removeItem(input);
      } else {
        setData(JSON.parse(localStorage.getItem(input)).data);
      }
    }
    if (!localStorage.getItem(input))
      getData(input).then(res => {
        console.log('calling api');
        setData(res.data);
        localStorage.setItem(input, JSON.stringify({ data: res.data, expiration: new Date().getTime() + 10000 }));
      });
  };
  const changeIdxNum = e => {
    if (e.key === 'ArrowDown') {
      setFocusIdx(prev => (prev + 1) % data.length);
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (focusIdx > -1) setFocusIdx(prev => (prev - 1) % data.length);
    }
    if (e.key === 'Escape') {
      setFocusIdx(-1);
      setInput('');
    }
    if (e.key === 'Enter') {
      if (data.length > 0 && focusIdx >= 0) {
        e.preventDefault();
        setInput(data[focusIdx].sickNm);
      }
    }
  };
  const handleFocus = () => {
    setIsFocus(true);
  };
  const handleData = e => {
    setInput(e.target.value);
  };
  useEffect(() => {
    if (!input) return;
    GetListData();
    setFocusIdx(-1);
  }, [input, setFocusIdx]);
  return (
    <SearchContainer>
      <input
        value={input}
        onChange={handleData}
        placeholder="질환명을 입력해주세요."
        onFocus={handleFocus}
        onKeyDown={changeIdxNum}
      />
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
    border: none;
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
