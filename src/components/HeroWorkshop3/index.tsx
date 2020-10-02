import { useEffect } from 'react';

import Logo from 'components/Logo';
import Link from 'next/link';
import MyModal from 'components/MyModal';
import PreInscricaoForm from 'components/PreInscricaoForm';
import Cookies from 'js-cookie';

import * as S from './styles';

const HeroWorkshop3 = () => {
  useEffect(() => {
    if (!Cookies.get('viewCpl3')) {
      setTimeout(() => {
        document.getElementById('pre-inscricao')?.classList.add('show');
        Cookies.set('viewCpl3', String(Date.now()));
      }, 2580000);
    }
    if (Cookies.get('viewCpl3')) {
      document.getElementById('pre-inscricao')?.classList.add('show');
    }
  }, []);

  return (
    <S.Wrapper>
      <S.Container>
        <S.HeaderWrapper>
          <Logo color="white" />
        </S.HeaderWrapper>
        <S.Headline>
          <span>AULA 03:</span>O Porquê Você Chegou Tarde para Produzir Música
          Eletrônica!
        </S.Headline>
        <S.WrapperVideoLinks>
          <S.NavLinkVideos>
            <ul>
              <li>
                <Link href="/producao/workshop/aula-01/">
                  <a>
                    <img src="/img/Thumb0_small.png" alt="Aula 1" />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/producao/workshop/ws-aula-02/">
                  <a>
                    <img src="/img/Thumb1_small.png" alt="Aula 2" />
                  </a>
                </Link>
              </li>
              <li>
                <img src="/img/Thumb3_small.png" alt="Aula 4" />
              </li>
            </ul>
          </S.NavLinkVideos>
          <S.Video>
            <iframe
              src="https://fast.wistia.net/embed/iframe/kxwdlr8f7n?seo=false&videoFoam=true"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </S.Video>
        </S.WrapperVideoLinks>
        <S.CTA id="pre-inscricao">
          <MyModal
            buttonText="FAZER PRÉ-INSCRIÇÃO AGORA!"
            title="FAZER PRÉ-INSCRIÇÃO AGORA!"
          >
            <PreInscricaoForm />
          </MyModal>
        </S.CTA>
      </S.Container>
    </S.Wrapper>
  );
};

export default HeroWorkshop3;
