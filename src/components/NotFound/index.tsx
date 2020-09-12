import { Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';

import Link from 'next/link';
import * as S from './styles';

const NotFound = () => {
  return (
    <S.Wrapper>
      <h1>Oops... Página não encontrada.</h1>
      <S.ImgWrapper>
        <img src="/img/404.png" alt="Página não encontrada" />
      </S.ImgWrapper>
      <h2>Estamos reformulando nosso site.</h2>
      <p>Tente acessar a nossa página principal</p>
      <Link href="/">
        <a>
          <Button type="primary">
            <ArrowLeftOutlined />
            Voltar para Home
          </Button>
        </a>
      </Link>
    </S.Wrapper>
  );
};

export default NotFound;
