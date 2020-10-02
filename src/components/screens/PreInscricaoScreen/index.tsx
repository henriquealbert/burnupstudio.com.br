import PreInscricaoForm from 'components/PreInscricaoForm';
import MyModal from 'components/MyModal';

import * as S from './styles';

const PreInscricaoScreen = () => {
  return (
    <S.Wrapper>
      <S.Title>
        Faça agora mesmo a sua pré inscrição para o melhor Curso de Produção de
        Música Eletrônica do Brasil e garanta:
      </S.Title>
      <S.List>
        <li>Curso completo com acesso vitalício pelo valor promocional</li>
        <li>Mais de 140 aulas de conteúdo prático</li>
        <li>Módulo bônus de Remix e Bootleg</li>
        <li>Módulo bônus de Psytrance</li>
        <li>Módulo bônus de Brazilian Bass</li>
        <li>Módulo bônus de Tech House</li>
        <li>Curso completo de Marketing para DJs e Produtores</li>
        <li>
          Módulo bônus de Mixagem e Masterização com Plugins nativos do Ableton
        </li>
        <li>Grupo de WhatsApp para suporte, feedback de tracks e networking</li>
        <li>Tire todas as suas dúvidas direto com o Professor pelo WhatsApp</li>
      </S.List>

      <MyModal
        buttonText="FAZER PRÉ INSCRIÇÃO AGORA!"
        title="FAZER PRÉ INSCRIÇÃO AGORA!"
      >
        <PreInscricaoForm />
      </MyModal>
    </S.Wrapper>
  );
};

export default PreInscricaoScreen;
