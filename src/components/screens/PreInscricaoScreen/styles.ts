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

    ${media.lessThan('small')`
      height: auto;
      padding-bottom: 4rem;
    `}
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    text-transform: uppercase;
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};
    margin: 0;
    line-height: 1.3;
    max-width: 900px;
    margin-bottom: 2rem;

    ${media.lessThan('small')`
      margin-top: 4rem;
      font-size: ${theme.font.sizes.medium};
      margin-bottom: 1rem;
    `}
  `}
`;

export const List = styled.ul`
  ${({ theme }) => css`
    font-size: 1rem;
    font-weight: ${theme.font.normal};
    color: ${theme.colors.white};
    line-height: 1.5;
    text-align: left;
    margin-bottom: 2rem;

    ${media.lessThan('small')`
      margin-top: 1rem;
      padding-left: 2rem;
      text-align: center;
      line-height: 1.8;
    `}
  `}
`;
