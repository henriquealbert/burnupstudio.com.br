import { FacebookProvider, Comments } from 'react-facebook';
import * as S from './styles';

const FacebookComents = () => {
  return (
    <S.Wrapper>
      <h3>
        Bora me contar aqui embaixo o que você está achando da Semana da
        Produção de Música Eletrônica <span>#OFuturoDaProducao</span>
      </h3>
      <FacebookProvider appId="986858818176378">
        <Comments href="https://burnupstudio.com.br" />
      </FacebookProvider>
    </S.Wrapper>
  );
};

export default FacebookComents;
