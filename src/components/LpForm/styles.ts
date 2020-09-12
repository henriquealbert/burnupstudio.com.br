import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.lightGray};
    padding: 2rem;
    border-radius: ${theme.border.radius};

    strong {
      color: ${theme.colors.lightPrimary};
      text-align: center;
      display: block;
    }

    label {
      font-size: ${theme.font.sizes.regular};

      span {
        color: ${theme.colors.gray};
        display: inline;
      }
    }
  `}
`;
