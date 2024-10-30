import styled from '@emotion/styled';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage, OnBoardPage, FoodProfilingPage, SigninPage, MainPage } from '@/pages';


const Container = styled.div`
  width: 600px;
  height: 100%;
  margin: 0 auto;

  @media (max-width: 600px) {
    width: 100vw;
  }
`;

const App = () => {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signin' element={<SigninPage />} />
          <Route path='/onboard' element={<OnBoardPage />} />
          <Route path='/foodProfiling' element={<FoodProfilingPage />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
};

export default App;
