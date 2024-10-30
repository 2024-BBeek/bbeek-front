import { Link, useLocation } from 'react-router-dom';
import * as S from './style';
import { camera, profile } from '@/assets';

const cameraUrl = '/camera';
const mypageUrl = '/';

const Header = () => {
  const { pathname } = useLocation();

  return (
    <S.Wrapper>
      <S.Container>
        <Link
          onClick={() => {
            if (pathname === cameraUrl) location.reload();
          }}
          to={cameraUrl}
        >
          <S.IconImg src={camera} />
        </Link>
        <Link to={mypageUrl}>
          <S.IconImg src={profile} />
        </Link>
      </S.Container>
    </S.Wrapper>
  );
};

export default Header;
