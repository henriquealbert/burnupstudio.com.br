import Button from 'components/Button';
import Link from 'next/link';

import * as S from './styles';

const Main = () => (
  <S.Wrapper>
    <S.Title>Em Breve</S.Title>
    <S.Description>Um novo site</S.Description>
    <S.Paragraph>
      Inscreva-se na lista de espera para ser notificado sobre a próxima turma
      do nosso <br /> Curso Profissional de Produção de Música Eletrônica:
    </S.Paragraph>
    <Link href="/producao/lista-de-espera">
      <a>
        <Button>Entrar na Lista de Espera</Button>
      </a>
    </Link>
  </S.Wrapper>
);

export default Main;
