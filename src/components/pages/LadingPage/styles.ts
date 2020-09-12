import styled, { css } from 'styled-components';
import { RightArrow } from '@styled-icons/boxicons-regular/RightArrow';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.mainBg};
    background: url(/img/bg.jpg) no-repeat center center fixed;
    box-shadow: inset 0 0 0 2000px ${theme.colors.mainBg};
    color: #fff;
    width: 100%;
    height: 100%;
  `}
`;

export const Header = styled.header`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxsmall} 0;
    width: 80%;
    margin: 0 auto 2rem auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      width: 70%;
    }

    .ant-anchor-wrapper {
      display: flex;
      background: none;
      margin: 0;
      padding: 0;
      .ant-anchor {
        color: ${theme.colors.white};
        display: flex;

        .ant-anchor-ink {
          display: none;
        }

        .ant-anchor-link {
          padding: 7px 0 7px 3rem;
        }
        .ant-anchor-link-title {
          color: ${theme.colors.white};
          font-size: ${theme.font.sizes.medium};

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  `}
`;

export const TextWrapper = styled.h1`
  ${({ theme }) => css`
    font-size: 2.25rem;
    font-weight: ${theme.font.bold};
    text-transform: uppercase;
    margin-bottom: ${theme.spacings.small};
    color: ${theme.colors.white};
    line-height: 1.2;

    span {
      background: ${theme.colors.darkPrimary};
    }
  `}
`;

export const ImgWrapper = styled.div`
  text-align: center;
  img {
    border-radius: 0.8rem;
    width: 100%;
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
    margin: ${theme.spacings.xxlarge} auto;

    h2 {
      font-weight: ${theme.font.bold};
      text-transform: uppercase;
      color: ${theme.colors.white};
      font-size: ${theme.font.sizes.large};
    }
  `}
`;

export const AboutItemOne = styled.div`
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
    margin: 0 ${theme.spacings.small};
    p {
      margin: 0;
    }
    span {
      display: block;
      color: ${theme.colors.lightPrimary};
    }
  `}
`;

export const AboutItems = styled.div`
  display: flex;
`;

export const Conteudo = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding: ${theme.spacings.xxlarge} 6rem;
    background: ${theme.colors.mainBg};
    background: url(/img/bg.jpg) no-repeat center center fixed;
    box-shadow: inset 0 0 0 2000px ${theme.colors.mainBg};
  `}
`;

export const ConteudoHeader = styled.div`
  ${({ theme }) => css`
    h2 {
      color: ${theme.colors.white};
      text-transform: uppercase;
      font-weight: ${theme.font.bold};
      font-size: ${theme.font.sizes.large};
    }

    span {
      background: ${theme.colors.darkPrimary};
    }
  `}
`;

export const ConteudoLista = styled.ul`
  ${({ theme }) => css`
    list-style: none;
    width: 45%;
    li {
      color: ${theme.colors.white};
      font-size: 1.25rem;
      margin-bottom: 1rem;

      span {
        margin-right: 1rem;
      }
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
  justify-content: space-between;
`;
