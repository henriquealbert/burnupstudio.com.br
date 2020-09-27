import Logo from 'components/Logo';
import { WhatsAppOutlined } from '@ant-design/icons';
import { Button } from 'antd';

import * as S from './styles';

const HeroWorkshop = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.HeaderWrapper>
          <Logo color="white" />
        </S.HeaderWrapper>
        <S.Headline>
          <span>AULA 01:</span>
          Dominando o Programa de Produção
        </S.Headline>
        <S.WrapperVideoLinks>
          <S.NavLinkVideos>
            <ul>
              <li>
                <img src="/img/Thumb1_small.png" alt="Aula 2" />
              </li>
              <li>
                <img src="/img/Thumb2_small.png" alt="Aula 3" />
              </li>
              <li>
                <img src="/img/Thumb3_small.png" alt="Aula 4" />
              </li>
            </ul>
          </S.NavLinkVideos>
          <S.Video>
            <iframe
              src="https://fast.wistia.net/embed/iframe/4mddpc2w9r?seo=false&videoFoam=true"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </S.Video>
        </S.WrapperVideoLinks>
        <S.CTA>
          <Button
            type="primary"
            href="https://meugrupo.vip/c/267"
            target="_blank"
            rel="noreferrer noopener"
          >
            ENTRAR NO GRUPO VIP DO WHATSAPP <WhatsAppOutlined />
          </Button>
        </S.CTA>
      </S.Container>
    </S.Wrapper>
  );
};

export default HeroWorkshop;
