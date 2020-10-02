import { WhatsAppOutlined } from '@ant-design/icons';
import { Button } from 'antd';

import * as S from './styles';

const PreInscricaoConfirmadaScreen = () => {
  return (
    <>
      <S.Wrapper>
        <S.Title>FALTA APENAS 1 PASSO...</S.Title>
        <S.Description>
          Você está prestes a confirmar a sua Pré-Inscrição para garantir uma
          vaga no Alpha Experience (Curso Completo) + os 6 bônus exclusivos pelo
          MENOR preço já visto na história.
        </S.Description>
        <S.Description>
          Pra confirmar a sua Pré Inscrição, toque/clique no botão abaixo e
          entre no grupo exclusivo de WhatsApp. Só quem estiver no grupo irá
          receber o link de matrícula 1h antes que todo mundo.
        </S.Description>

        <S.CTA>
          <Button
            type="primary"
            href="https://meugrupo.vip/c/268"
            target="_blank"
            rel="noreferrer noopener"
          >
            CONFIRMAR PRÉ INSCRIÇÃO E ENTRAR NO GRUPO VIP <WhatsAppOutlined />
          </Button>
        </S.CTA>
      </S.Wrapper>
      <S.CheckSvg src="/img/check.svg" />
    </>
  );
};

export default PreInscricaoConfirmadaScreen;
