import styled from '@emotion/styled';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage, OnBoardPage } from '@/pages';

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
          <Route path='/login' element={<LoginPage />} />
          <Route path='/onboard' element={<OnBoardPage />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
};

export default App;
