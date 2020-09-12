import styled, { css } from 'styled-components';
import { Facebook, Instagram, Youtube } from '@styled-icons/boxicons-logos/';

export const Wrapper = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  background: transparent;
  ${({ theme }) => css`
    z-index: ${theme.layers.menu};
  `}
`;

export const NavBar = styled.nav`
  ${({ theme }) => css`
    display: flex;
    width: 90%;
    margin: 1rem auto;
    justify-content: space-between;
    align-items: center;

    ul {
      display: flex;
      align-items: center;
      color: ${theme.colors.white};
      list-style: none;

      li {
        margin-right: ${theme.spacings.small};
      }
      li:last-child {
        margin: 0;
      }
    }

    @media screen and (max-width: 450px) {
      margin: 0.5rem auto;

      img {
        width: 90px;
      }
    }
  `}
`;

export const FacebookIcon = styled(Facebook)`
  ${({ theme }) => css`
    width: ${theme.spacings.small};
    height: ${theme.spacings.small};
    color: ${theme.colors.white};
    transition: all 200ms ease-in-out;

    &:hover {
      color: ${theme.colors.primary};
    }
  `}
`;

export const InstagramIcon = styled(Instagram)`
  ${({ theme }) => css`
    width: ${theme.spacings.small};
    height: ${theme.spacings.small};
    color: ${theme.colors.white};
    transition: all 200ms ease-in-out;

    &:hover {
      color: ${theme.colors.primary};
    }
  `}
`;

export const YoutubeIcon = styled(Youtube)`
  ${({ theme }) => css`
    width: ${theme.spacings.small};
    height: ${theme.spacings.small};
    color: ${theme.colors.white};
    transition: all 200ms ease-in-out;

    &:hover {
      color: ${theme.colors.primary};
    }
  `}
`;
