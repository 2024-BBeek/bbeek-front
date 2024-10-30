import { Link } from 'react-router-dom';
import * as S from './style';
import { camera, profile } from '@/assets';

const cameraUrl = '/camera';
const mypageUrl = '/';

const Header = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <Link to={cameraUrl}>
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
