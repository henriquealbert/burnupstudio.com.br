import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.mainBg};
    background: url(/img/bg.jpg) no-repeat center center fixed;
    box-shadow: inset 0 0 0 2000px ${theme.colors.mainBg};
    color: #fff;
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    padding-bottom: 4rem;

    @media screen and (min-width: 768px) {
      height: 100%;
    }
  `}
`;

export const Container = styled.div``;

export const HeaderWrapper = styled.header`
  display: flex;
  padding: 1rem;
  img {
    width: 70%;
  }
  @media screen and (max-width: 768px) {
    justify-content: center;
    img {
      width: 50%;
    }
  }
`;

export const Headline = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    margin: 0 auto;
    padding-top: 2rem;

    span {
      display: block;
      background: ${theme.colors.primary};
      font-weight: ${theme.font.bold};
      width: 160px;
      margin: 0 auto;
    }

    @media screen and (min-width: 768px) {
      span {
        display: inline;
        margin-right: 1rem;
        width: initial;
      }
    }
  `}
`;

export const WrapperVideoLinks = styled.div`
  margin: 0 auto;
  @media screen and (min-width: 900px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    margin: 2rem auto 0 auto;
    max-width: 900px;
  }
`;

export const NavLinkVideos = styled.nav`
  margin-top: 2rem;
  ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    list-style: none;

    li {
      img {
        width: 100%;
        display: block;
        height: auto;
      }
    }
    li:last-child {
      img {
        filter: grayscale(100%);
      }
    }
  }
  color: #fff;

  @media screen and (min-width: 900px) {
    margin-top: 0;
    margin-left: 1rem;
    ul {
      display: flex;
      flex-direction: column;

      li {
        margin-bottom: 0.5rem;
      }
      li:last-child {
        margin: 0;
      }
    }
  }
`;

export const CTA = styled.div`
  margin-top: 2rem;
  display: none;
  button {
    background: rgba(255, 134, 54, 1);
    border: 1px solid rgba(255, 134, 54, 1);
    line-height: 1.2;
    padding: 1rem;

    span {
      display: inline;
    }

    &:hover {
      background: rgba(255, 134, 54, 0.75);
      border: 1px solid rgba(255, 134, 54, 0.75);
    }
  }
  &.show {
    display: block;
  }
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

  @media screen and (min-width: 900px) {
    position: initial;
    padding: 0;
    height: auto;

    iframe,
    object,
    embed {
      width: 100%;
      height: 100%;
      position: initial;
    }
  }
`;
