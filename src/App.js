import { styled } from 'styled-components';
import GlobalStyle from './style/GlobalStyle';
import SearchContainer from './components/SearchContainer';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    margin: 1px 0;
  }
`;
function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <h1>국내 모든 임상시험 검색하고</h1>
        <h1>온라인으로 참여하기</h1>
        <SearchContainer />
      </Container>
    </>
  );
}

export default App;
