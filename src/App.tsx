import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  width: 600px;
  height: 100%;
  margin: 0 auto;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const App = () => {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<></>} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
};

export default App;
