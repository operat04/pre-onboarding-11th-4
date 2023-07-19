import { styled } from 'styled-components';
import { useCallback, useEffect } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import getData from '../api/axios';

const Search = ({ setData, setIsFocus, input, setInput, setFocusIdx, data, focusIdx }) => {
  // 디바운싱
  const DebounceInput = (callback, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => callback(...args), delay);
    };
  };
  const Debounce = useCallback(
    DebounceInput(value => GetListData(value), 500),
    [],
  );
  // 데이터 호출
  const GetListData = input => {
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
  // 검색어 키보드 작동
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
  const handleInput = e => {
    setInput(e.target.value);
  };
  useEffect(() => {
    if (!input) return;
    Debounce(input);
    setFocusIdx(-1);
  }, [input, setFocusIdx]);
  return (
    <SearchContainer>
      <input
        value={input}
        onChange={handleInput}
        placeholder="질환명을 입력해주세요."
        onFocus={handleFocus}
        onKeyDown={changeIdxNum}
      />
      <AiOutlineSearch className="icon" />
    </SearchContainer>
  );
};

export default Search;

const SearchContainer = styled.form`
  display: flex;
  background-color: white;
  justify-content: space-between;
  align-items: center;
  border-radius: 42px;
  width: 35%;
  margin-top: 20px;
  input {
    flex: 1;
    border: none;
    padding-left: 10px;
    border-radius: 42px;
    height: 50px;
    &:focus {
      outline: none;
    }
  }
  .icon {
    font-size: 2rem;
    color: white;
    background-color: #007be9;
    border-radius: 50%;
    margin-right: 10px;
  }
`;
