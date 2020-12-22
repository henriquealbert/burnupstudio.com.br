import styled, { css } from 'styled-components';
import {
  Headphones,
  Gem,
  Play,
  Rocket,
  Music,
  Desktop,
  Laptop
} from '@styled-icons/fa-solid/';
import { UserGroup } from '@styled-icons/heroicons-outline/';
import { QuoteLeft } from '@styled-icons/boxicons-solid/';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    text-align: center;
    background-image: url('/img/image-bg.jpg');
    background-position: center center;
    background-size: cover;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto;

    h1 {
      color: #fff;
      font-size: 2.25rem;
      font-weight: 900;
      line-height: 1.2em;
      max-width: 800px;
      margin-bottom: 0.5rem;
      span {
        color: ${theme.colors.primary};
      }
    }
    h3 {
      color: #fff;
      font-weight: 300;
      font-size: 1.125rem;
      line-height: 1.5;
      margin-bottom: 2rem;
      max-width: 600px;
      span {
        color: ${theme.colors.primary};
      }
    }

    div {
      margin: 0 auto;
      margin-bottom: 1rem;
    }
  `}
`;

export const BenefitsWrapper = styled.div`
  margin: 4rem auto;
  h2 {
    text-align: center;
    font-size: 2rem;
    line-height: 1.2em;
    font-weight: 700;
    margin-bottom: 4rem;
  }
`;

export const CardBenefit = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  max-width: 500px;
  margin: 0 auto;
  h4 {
    font-size: 25px;
    font-weight: 600;
  }
  p {
    color: #7a7a7a;
  }
`;

export const HeadsetIcon = styled(Headphones)`
  width: 50px;
  height: 50px;
  color: #bfbfbf;
  margin-bottom: 1rem;
`;
export const GemIcon = styled(Gem)`
  width: 50px;
  height: 50px;
  color: #bfbfbf;
  margin-bottom: 1rem;
`;
export const PlayIcon = styled(Play)`
  width: 50px;
  height: 50px;
  color: #bfbfbf;
  margin-bottom: 1rem;
`;
export const MusicIcon = styled(Music)`
  width: 50px;
  height: 50px;
  color: #bfbfbf;
  margin-bottom: 1rem;
`;
export const DesktopIcon = styled(Desktop)`
  width: 50px;
  height: 50px;
  color: #bfbfbf;
  margin-bottom: 1rem;
`;
export const LaptopIcon = styled(Laptop)`
  width: 50px;
  height: 50px;
  color: #bfbfbf;
  margin-bottom: 1rem;
`;
export const RocketIcon = styled(Rocket)`
  width: 50px;
  height: 50px;
  color: #bfbfbf;
  margin-bottom: 1rem;
`;
export const GroupIcon = styled(UserGroup)`
  width: 50px;
  height: 50px;
  color: #bfbfbf;
  margin-bottom: 1rem;
`;
export const QuoteIcon = styled(QuoteLeft)`
  width: 50px;
  height: 50px;
  color: #bfbfbf;
  margin-bottom: 1rem;
`;

export const TestimonialWrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.black};
    color: ${theme.colors.white};
    text-align: center;
    padding: 3rem 0.25rem;
    img {
      width: 185px;
      border-radius: 5px;
      margin: 0 auto 2rem auto;
    }
    a {
      color: #c36;
      font-weight: 600;
      &:hover {
        text-decoration: underline;
      }
    }
    h5 {
      margin-top: 2rem;
      color: ${theme.colors.white};
      font-size: 20px;
      font-weight: 900;
    }
    span {
      color: #686868;
      font-size: 16px;
      font-weight: 300;
      text-transform: uppercase;
      letter-spacing: 2px;
    }

    @media screen and (min-width: 768px) {
      display: flex;
      align-items: center;
      justify-content: center;

      p {
        max-width: 600px;
        margin-right: 1rem;
        text-align: left;
      }

      img {
        width: 250px;
        margin: 0 2rem;
      }
    }
  `}
`;

export const CourseContentWrapper = styled.div`
  padding: 3rem 0.25rem;

  h2 {
    font-size: 32px;
    text-align: center;
    margin-bottom: 2rem;
  }
`;

export const ListContent = styled.ol`
  padding: 0 1rem;
  li {
    line-height: 1.8;
    color: #686868;
  }
`;

export const ContentGrid = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-evenly;
  }
`;

export const ContentGridItem = styled.div`
  @media screen and (min-width: 768px) {
    width: 40%;
  }
`;

export const PreRequisitosWrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.black};
    padding: 3rem 0.25rem;
    color: ${theme.colors.white};
    text-align: center;
    img {
      width: 335px;
      border-radius: 5px;
      margin: 0 auto 2rem auto;
    }

    h2 {
      font-size: 32px;
      text-align: center;
      margin-bottom: 2rem;
      color: #fff;
    }

    @media screen and (min-width: 768px) {
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 300px;
        margin-right: 2rem;
      }

      h2 {
        text-align: left;
      }
    }
    @media screen and (min-width: 1200px) {
      img {
        width: 450px;
      }
    }
  `}
`;
export const CardRequisito = styled.div`
  text-align: center;
  margin-bottom: 3rem;

  h4 {
    font-size: 25px;
    font-weight: 600;
    color: #fff;
  }
  p {
    color: #7a7a7a;
    max-width: 500px;
    margin: 0 auto;
  }
  @media screen and (min-width: 768px) {
    margin-left: auto;
    margin-right: auto;

    display: flex;
    text-align: left;
    h4,
    p {
      margin-left: 1rem;
    }
  }
`;

export const ProjetosCurso = styled.div`
  padding: 3rem 0.25rem;
  text-align: center;

  h2 {
    text-align: center;
    font-size: 2rem;
    line-height: 1.2em;
    font-weight: 700;
  }
  span {
    color: #7a7a7a;
  }
`;

export const Soundcloud = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SoundcloudItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: 960px;
`;

export const DepoimentosAlunos = styled.div`
  padding: 3rem 0;
  h2 {
    text-align: center;
    font-size: 2rem;
    line-height: 1.2em;
    font-weight: 700;
    margin-bottom: 2rem;
  }
`;

export const AlunoCard = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  img {
    border-radius: 50%;
    margin-bottom: 1rem;
    width: 150px;
    height: 150px;
  }

  p {
    line-height: 1.5;
  }

  h6 {
    font-style: italic;
    font-weight: normal;
    line-height: 1.5;
    font-size: 105%;
    margin: 0;
  }

  strong {
    font-size: 90%;
    font-style: italic;
    font-weight: 300;
    line-height: 1.75;
  }
  @media screen and (min-width: 768px) {
    max-width: 500px;
    margin-right: 1rem;
    margin-left: 1rem;
    display: flex;
    text-align: left;
    img {
      margin-right: 1rem;
    }
  }
`;

export const Alunos = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;

export const Pagamento = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.black};
    color: ${theme.colors.white};
    text-align: center;
    padding: 3rem 0;

    h2 {
      text-align: center;
      font-size: 2rem;
      line-height: 1.2em;
      font-weight: 700;
      color: ${theme.colors.white};
      margin-bottom: 2rem;
    }
    img {
      width: 285px;
      margin: 0 auto;
      background: #fff;
      border-radius: 5px;
    }

    @media screen and (min-width: 768px) {
      h2 {
        max-width: 700px;
        margin: 0 auto;
        margin-bottom: 2rem;
      }
    }
  `}
`;

export const Venda = styled.div`
  ${({ theme }) => css`
    h4 {
      font-weight: normal;
      font-size: 1rem;
      margin-bottom: 1rem;
      color: ${theme.colors.white};
      span {
        color: ${theme.colors.primary};
        text-decoration: line-through;
      }
    }
    h3 {
      color: #fff;
      background: #43a047;
      font-size: 3rem;
      font-weight: 900;
      display: inline-block;
      margin: 0;
    }
    h3 + span {
      display: block;
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.125rem;
      span {
        font-size: 0.8rem;
        display: block;
      }
    }

    ul {
      width: 90%;
      margin: 2rem auto;
      list-style: none;
      border-radius: 5px;
      li {
        color: ${theme.colors.white};
        font-size: 1rem;
        line-height: 1.5;
        padding: 0.75rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
      }
    }
    p {
      font-size: 1rem;
    }
    @media screen and (min-width: 768px) {
      ul {
        max-width: 500px;
      }
    }
  `}
`;

export const SobreInstrutor = styled.div`
  text-align: center;
  padding: 3rem 0;
  h2 {
    text-align: center;
    font-size: 2rem;
    line-height: 1.2em;
    font-weight: 700;
  }

  p {
    font-size: 1rem;
    max-width: 500px;
    margin: 0 auto;
  }

  img {
    margin-top: 2rem;
    margin-bottom: 2rem;
    border-radius: 5px;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;

    p,
    h2 {
      text-align: left;
    }

    img {
      margin-right: 4rem;
    }
  }
`;

export const Faq = styled.div`
  ${({ theme }) => css`
    text-align: center;
    padding: 3rem 0;
    background: ${theme.colors.black};
    color: ${theme.colors.white};

    h2 {
      color: ${theme.colors.white};
      text-align: center;
      font-size: 2rem;
      line-height: 1.2em;
      font-weight: 700;
      margin-bottom: 2rem;
    }

    strong {
      display: block;
      font-weight: normal;
      font-size: 1rem;
      max-width: 600px;
      margin: 2rem auto 0 auto;
    }
    p {
      font-size: 1rem;
    }
  `}
`;

export const Perguntas = styled.div`
  p {
    text-align: left;
  }
  @media screen and (min-width: 768px) {
    width: 70%;
    margin: 0 auto;
  }
`;

export const Footer = styled.div`
  background: rgba(0, 0, 0, 0.9);
  color: #fff;
  font-size: 1rem;
  padding: 1rem 0;
  text-align: center;
`;

export const Video = styled.div`
  position: relative;
  padding-bottom: 45%;
  padding-top: 30px;
  height: 0;
  overflow: hidden;
  width: 100%;
  iframe,
  object,
  embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  @media screen and (min-width: 768px) {
    max-width: 560px;
    position: initial;
    padding: 0;
    height: 315px;
    iframe,
    object,
    embed {
      width: 100%;
      height: 100%;
      position: initial;
    }
  }
`;

export const VideosDepoimentos = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-evenly;
  }
`;

export const PricingTable = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;

export const PriceItem = styled.div`
  padding: 2rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  @media screen and (min-width: 768px) {
    margin: 0 2rem;
  }
`;
