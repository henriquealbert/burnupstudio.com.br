import { ButtonProps } from './index';
import styled, { css } from 'styled-components';
import { RightArrowCircle } from '@styled-icons/boxicons-regular/RightArrowCircle';

export const Wrapper = styled.button<ButtonProps>`
  ${({ theme, color, icon }) => css`
    padding: ${theme.spacings.xsmall} ${theme.spacings.small};
    border-radius: ${theme.border.radius};
    border: none;
    background: ${theme.colors[color!]};
    font-size: ${theme.font.sizes.regular};
    font-weight: ${theme.font.normal};
    cursor: pointer;
    color: ${theme.colors.white};
    transition: all 200ms ease-in-out;
    outline: none;

    &:hover {
      ${color === 'primary'
        ? `background: ${theme.colors.darkPrimary}`
        : `background: ${theme.colors.darkSecondary}`}
    }

    svg {
      display: ${icon ? 'inline' : 'none'};
    }
  `}
`;

export const RightArrowIcon = styled(RightArrowCircle)`
  height: 2.2rem;
  width: 2.2rem;
`;
