import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.main`
  ${({ theme }) => css`
    background: ${theme.colors.mainBg};
    background: url(/img/bg.jpg) no-repeat center center fixed;
    box-shadow: inset 0 0 0 2000px ${theme.colors.mainBg};
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

    ${media.lessThan('small')`
      font-size: ${theme.font.sizes.xxlarge}
    `}
  `}
`;

export const Description = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.normal};
    margin-bottom: ${theme.spacings.medium};
  `}
`;

export const Paragraph = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.regular};
    font-weight: ${theme.font.light};
    margin-bottom: ${theme.spacings.small};
  `}
`;
