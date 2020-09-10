import Link from 'next/link';
import Logo from 'components/Logo';

import * as S from './styles';

const Header = () => (
  <S.Wrapper>
    <S.NavBar>
      <Link href="/">
        <a>
          <Logo color="white" />
        </a>
      </Link>
      <ul>
        <li>
          <a
            href="https://facebook.com/burnupstudio"
            target="_blank"
            rel="noreferrer"
          >
            <S.FacebookIcon />
          </a>
        </li>
        <li>
          <a
            href="https://instagram.com/burnupstudio"
            target="_blank"
            rel="noreferrer"
          >
            <S.InstagramIcon />
          </a>
        </li>
        <li>
          <a
            href="https://youtube.com/burnupstudio"
            target="_blank"
            rel="noreferrer"
          >
            <S.YoutubeIcon />
          </a>
        </li>
      </ul>
    </S.NavBar>
  </S.Wrapper>
);

export default Header;
