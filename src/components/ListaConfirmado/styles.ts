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
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.huge};
    text-transform: uppercase;
    margin-bottom: ${theme.spacings.medium};
    color: ${theme.colors.primary};
    line-height: 1;
    margin: 0;
    font-weight: ${theme.font.bold};

    ${media.lessThan('small')`
      font-size: ${theme.font.sizes.xxlarge}
    `}
  `}
`;

export const Description = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.normal};
    line-height: 1.5;
    margin: 0;
    color: ${theme.colors.white};
  `}
`;

export const CheckSvg = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
`;
