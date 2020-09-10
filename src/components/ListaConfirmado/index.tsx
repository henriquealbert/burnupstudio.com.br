import * as S from './styles';

const ListaConfirmado = () => {
  return (
    <>
      <S.Wrapper>
        <S.Title>Cadastro Confirmado!</S.Title>
        <S.Description>
          Você será avisado por e-mail assim que tivermos novidades sobre a
          próxima turma <br /> do Curso Completo de Produção de Música
          Eletrônica.
        </S.Description>
      </S.Wrapper>
      <S.CheckSvg src="/img/check.svg" />
    </>
  );
};

export default ListaConfirmado;
