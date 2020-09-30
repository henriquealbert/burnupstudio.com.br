import Logo from 'components/Logo';
import { Button } from 'antd';
import Link from 'next/link';

import * as S from './styles';

const HeroWorkshop2 = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.HeaderWrapper>
          <Logo color="white" />
        </S.HeaderWrapper>
        <S.Headline>
          <span>AULA 02:</span>
          Colocando a Mão na Massa: Criando sua Primeira Track do Zero!
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
                <img src="/img/Thumb2_small.png" alt="Aula 3" />
              </li>
              <li>
                <img src="/img/Thumb3_small.png" alt="Aula 4" />
              </li>
            </ul>
          </S.NavLinkVideos>
          <S.Video>
            <iframe
              src="https://fast.wistia.net/embed/iframe/em8n3yp0yh?seo=false&videoFoam=true"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </S.Video>
        </S.WrapperVideoLinks>
        <S.GenreVideosWrapper>
          <S.VideoGenreWrapper>
            <h2>LOW BPM: Tech House</h2>
            <div>
              <iframe
                src="https://fast.wistia.net/embed/iframe/5wyvnl2owv?seo=false&videoFoam=true"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </S.VideoGenreWrapper>
          <S.VideoGenreWrapper>
            <h2>HIGH BPM: Psytrance</h2>
            <div>
              <iframe
                src="https://fast.wistia.net/embed/iframe/yzrp2u68yo?seo=false&videoFoam=true"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </S.VideoGenreWrapper>
        </S.GenreVideosWrapper>
        <S.CTA>
          <Button
            type="default"
            href="https://drive.google.com/drive/folders/1Wyzz95is_AIDDcT5F86tc_HfRHgR3eJY?usp=sharing"
            target="_blank"
            rel="noreferrer noopener"
            title="Download"
          >
            Download dos DOIS Projetos e Samples
          </Button>
        </S.CTA>
      </S.Container>
    </S.Wrapper>
  );
};

export default HeroWorkshop2;
