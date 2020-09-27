import styled, { css } from 'styled-components';
import { RightArrow } from '@styled-icons/boxicons-regular/RightArrow';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.mainBg};
    background: url(/img/bg.jpg) no-repeat center center fixed;
    box-shadow: inset 0 0 0 2000px ${theme.colors.mainBg};
    color: #fff;
    width: 100%;
    height: auto;
  `}
`;

export const Header = styled.header`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxsmall} 0;
    width: 100%;
    margin: 0 auto 1rem auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;

    img {
      width: 60%;
    }

    .ant-anchor-wrapper {
      display: flex;
      background: none;
      margin: auto;
      padding: 0;
      width: 100%;
      justify-content: flex-end;
      .ant-anchor {
        color: ${theme.colors.white};
        display: flex;

        .ant-anchor-ink {
          display: none;
        }

        .ant-anchor-link {
          padding: 7px 0 7px 12px;
        }
        .ant-anchor-link-title {
          color: ${theme.colors.white};
          font-size: ${theme.font.sizes.regular};

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }

    @media (min-width: 767px) {
      padding-top: 1rem;
      img {
        width: 100%;
      }
      .ant-anchor-wrapper .ant-anchor .ant-anchor-link-title {
        font-size: ${theme.font.sizes.medium};
      }
      .ant-anchor-wrapper .ant-anchor .ant-anchor-link {
        padding: 7px 0 7px 20px;
      }
    }

    @media (min-width: 992px) {
      width: 95%;
      margin: 0 auto;
    }
    @media (min-width: 1200px) {
      width: 90%;
      margin: 0 auto;
    }
  `}
`;

export const InscricaoWrapper = styled.div`
  @media (min-width: 767px) {
    display: flex;
    align-items: center;
    width: 95%;
    margin: 0 auto;
  }
`;

export const InscricaoItem = styled.div`
  @media (min-width: 1200px) {
    width: 40%;
    margin: 0 auto;
  }
`;

export const TextWrapper = styled.h1`
  ${({ theme }) => css`
    font-size: 2.2rem;
    font-weight: ${theme.font.bold};
    text-transform: uppercase;
    color: ${theme.colors.white};
    text-align: center;
    line-height: 1.2;
    margin: 0 auto;
    margin-bottom: ${theme.spacings.small};

    span {
      background: ${theme.colors.darkPrimary};
    }

    @media (min-width: 767px) {
      margin-top: 2rem;
      font-size: ${theme.font.sizes.xlarge};
    }

    @media (min-width: 1200px) {
      width: 50%;
      margin: 2rem auto;
    }
  `}
`;

export const ImgWrapper = styled.div`
  width: 95%;
  margin: 0 auto;
  padding: 1rem 0;
  img {
    border-radius: 0.8rem;
    width: 100%;
  }
  @media (min-width: 1200px) {
    width: 80%;
  }
`;

export const About = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    background: ${theme.colors.black};
  `}
`;

export const AboutWrapper = styled.div`
  ${({ theme }) => css`
    text-align: center;
    padding: ${theme.spacings.xxlarge} 0;

    h2 {
      font-weight: ${theme.font.bold};
      text-transform: uppercase;
      color: ${theme.colors.white};
      font-size: ${theme.font.sizes.large};
      span {
        background: ${theme.colors.darkPrimary};
      }
    }
  `}
`;

export const AboutItemLast = styled.div`
  ${({ theme }) => css`
    text-transform: uppercase;
    background: ${theme.colors.darkBg};
    padding: ${theme.spacings.medium};
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};
    text-align: center;
    color: ${theme.colors.white};
    line-height: 1;
    border-radius: ${theme.border.radius};
    p {
      margin: 0;
    }
    span {
      display: block;
      color: ${theme.colors.lightPrimary};
    }
  `}
`;

export const AboutItemMiddle = styled.div`
  ${({ theme }) => css`
    text-transform: uppercase;
    background: ${theme.colors.darkBg};
    padding: ${theme.spacings.medium};
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};
    text-align: center;
    color: ${theme.colors.white};
    line-height: 1;
    border-radius: ${theme.border.radius};
    margin: 1.5rem 0;

    p {
      margin: 0;
    }
    span {
      display: block;
      color: ${theme.colors.lightPrimary};
    }
    @media (min-width: 992px) {
      margin: 0 1.5rem;
    }
  `}
`;

export const AboutItems = styled.div`
  @media (min-width: 992px) {
    display: flex;
    width: 90%;
    margin: 0 auto;
    justify-content: center;
  }
`;

export const Conteudo = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    background: ${theme.colors.mainBg};
    background: url(/img/bg.jpg) no-repeat center center fixed;
    box-shadow: inset 0 0 0 2000px ${theme.colors.mainBg};
    padding: 4rem 0;
  `}
`;

export const ConteudoHeader = styled.div`
  ${({ theme }) => css`
    h2 {
      color: ${theme.colors.white};
      text-transform: uppercase;
      font-weight: ${theme.font.bold};
      font-size: 2rem;
      margin-bottom: ${theme.spacings.xlarge};
      text-align: center;
    }

    span {
      background: ${theme.colors.darkPrimary};
    }
  `}
`;

export const ConteudoLista = styled.ul`
  ${({ theme }) => css`
    list-style: none;
    margin: 0;
    text-align: center;
    li {
      color: ${theme.colors.white};
      font-size: 1.25rem;
      margin-bottom: 1rem;

      span {
        margin-right: 1rem;
      }
    }
    @media (min-width: 767px) {
      text-align: left;
      width: 45%;
      margin: 0 auto;
    }
  `}
`;

export const ArrowIcon = styled(RightArrow)`
  ${({ theme }) => css`
    width: 1rem;
    height: 1rem;
    color: ${theme.colors.primary};
  `}
`;

export const Listas = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  margin: 0 auto;
  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const CTA = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.xxlarge} auto;

    h2 {
      color: ${theme.colors.white};
      text-transform: uppercase;
      font-weight: ${theme.font.bold};
      font-size: ${theme.font.sizes.large};
      text-align: center;
      margin: 0;
    }
  `}
`;

export const CtaLink = styled.div`
  .ant-anchor-wrapper {
    display: flex;
    background: none;
    margin: 0 auto;
    padding: 0;
    .ant-anchor {
      color: #fff;
      display: flex;
      margin: 0 auto;
      .ant-anchor-ink {
        display: none;
      }
      .ant-anchor-link-title {
        color: #fff;
        background: #e9625d;
        border-color: #e9625d;
        text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
        box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
        outline: 0;
        cursor: pointer;
        transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
        user-select: none;
        touch-action: manipulation;
        padding: 1rem 2rem;
        font-size: 20px;
        border-radius: 8px;
        line-height: 1.5715;
        position: relative;
        display: inline-block;
        font-weight: 400;
        white-space: nowrap;
        text-align: center;
        width: 300px;

        &:hover {
          color: #fff;
          background: #f59089;
          border-color: #f59089;
        }
      }
    }
  }
`;

export const SobreContainer = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.black};
    padding: 2rem 0;
  `}
`;

export const Sobre = styled.div`
  @media (min-width: 992px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
  }
`;

export const ImgContainer = styled.div`
  margin: 0 auto;
  text-align: center;
  padding: 1rem;

  img {
    border-radius: 50%;
    width: 100%;
    max-width: 380px;
  }
`;

export const TextContainer = styled.div`
  ${({ theme }) => css`
    margin: 2rem auto;
    h2 {
      color: ${theme.colors.white};
      text-transform: uppercase;
      font-weight: ${theme.font.bold};
      font-size: ${theme.font.sizes.large};
      text-align: center;
      margin: 0;
      line-height: 1.2;
    }
    p {
      padding: 1rem;
      color: ${theme.colors.white};
      text-align: center;
    }
    @media (min-width: 992px) {
      width: 50%;
      margin: 2rem auto;
      p {
        text-align: left;
      }
    }
  `}
`;

export const Footer = styled.footer`
  ${({ theme }) => css`
    background: ${theme.colors.mainBg};
    padding: 1rem 0;

    p {
      text-align: center;
      color: #fff;
      margin: 0;
    }
  `}
`;
