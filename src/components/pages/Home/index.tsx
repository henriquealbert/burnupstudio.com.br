import ListaDeEsperaForm from 'components/ListaDeEsperaForm';
import MyModal from 'components/MyModal';

import * as S from './styles';

const Home = () => {
  return (
    <S.Wrapper>
      <S.Title>Em Breve</S.Title>
      <S.Description>Um novo site</S.Description>
      <S.Paragraph>
        Inscreva-se na lista de espera para ser notificado sobre a próxima turma
        do nosso <br /> Curso Profissional de Produção de Música Eletrônica:
      </S.Paragraph>

      <MyModal
        buttonText="Entrar na Lista de Espera"
        title="Entre na Lista de Espera"
      >
        <ListaDeEsperaForm />
      </MyModal>
    </S.Wrapper>
  );
};

export default Home;
