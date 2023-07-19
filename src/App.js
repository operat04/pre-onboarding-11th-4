import { styled } from 'styled-components';
import GlobalStyle from './style/GlobalStyle';
import SearchContainer from './components/SearchContainer';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <SearchContainer />
      </Container>
    </>
  );
}

export default App;
