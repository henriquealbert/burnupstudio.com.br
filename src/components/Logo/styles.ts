import media from 'styled-media-query';
import { LogoProps } from './index';
import styled, { css } from 'styled-components';

const wrapperModifiers = {
  normal: () => css`
    width: 15rem;
  `,

  large: () => css`
    width: 25rem;
  `
};

export const Wrapper = styled.div<LogoProps>`
  ${media.lessThan('small')`
    width: 10rem;
  `}

  ${({ size }) => css`
    ${!!size && wrapperModifiers[size]}
  `}
  img {
    width: 100%;
  }
`;
