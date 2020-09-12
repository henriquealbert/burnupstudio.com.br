import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.main`
  ${({ theme }) => css`
    background: ${theme.colors.mainBg};
    background: linear-gradient(
      45deg,
      rgba(24, 21, 30, 1) 0%,
      rgba(48, 42, 60, 1) 100%
    );
    color: #fff;
    width: 100%;
    height: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 10;
    padding-top: 3rem;
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    text-transform: uppercase;
    color: ${theme.colors.primary};
    line-height: 1;
    font-weight: ${theme.font.bold};
    z-index: 10;

    ${media.lessThan('small')`
      font-size: ${theme.font.sizes.large}
    `}
  `}
`;

export const Description = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.regular};
    font-weight: ${theme.font.normal};
    line-height: 1.5;
    margin: 0;
    color: ${theme.colors.white};
    z-index: 10;
  `}
`;

export const CheckSvg = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;

  @media screen and (max-width: 835px) {
    width: 500px;
    bottom: 0;
  }

  @media screen and (max-width: 549px) {
    width: 100%;
    bottom: 0;
  }
`;

export const CTA = styled.div`
  z-index: 10;

  a {
    background: #25d366;
    border: 1px solid #25d366;
    line-height: 1.2;
    padding: 1rem 2rem;

    span {
      display: inline;
    }

    &:hover {
      background: #128c7e;
      border: 1px solid #128c7e;
    }
  }
`;

export const Video = styled.div`
  width: 768px;
  height: 432px;
  z-index: 10;
  margin: 2rem auto;

  @media screen and (max-width: 1200px) {
    width: 640px;
    height: 360px;
  }

  @media screen and (max-width: 768px) {
    width: 576px;
    height: 324px;
  }

  @media screen and (max-width: 600px) {
    width: 448px;
    height: 252px;
  }

  @media screen and (max-width: 470px) {
    width: 300px;
    height: 174px;
  }
`;
