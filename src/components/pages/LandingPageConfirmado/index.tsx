import { WhatsAppOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import Iframe from 'react-iframe';

import * as S from './styles';

const LandingPageConfirmado = () => {
  return (
    <>
      <S.Wrapper>
        <S.Title>VOCÊ ESTÁ A DOIS PASSOS DO SEU FUTURO</S.Title>
        <S.Description>
          ASSISTA ESSE VÍDEO PARA SABER COMO CONFIRMAR A SUA INSCRIÇÃO E TER
          ACESSO A BÔNUS EXCLUSIVOS.
        </S.Description>
        <S.Video>
          <Iframe
            url="https://fast.wistia.net/embed/iframe/argz1kx3w0?seo=false&videoFoam=true"
            width="100%"
            height="100%"
            display="block"
            position="relative"
          />
        </S.Video>
        <S.CTA>
          <Button
            type="primary"
            href="#"
            target="_blank"
            rel="noreferrer noopener"
          >
            ENTRAR NO GRUPO VIP DO WHATSAPP <WhatsAppOutlined />
          </Button>
        </S.CTA>
      </S.Wrapper>
      <S.CheckSvg src="/img/check.svg" />
    </>
  );
};

export default LandingPageConfirmado;
