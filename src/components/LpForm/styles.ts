import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.lightGray};
    padding: 0.5rem;
    border-radius: ${theme.border.radius};
    width: 95%;
    margin: 0 auto;

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

    @media (max-width: 768px) {
      h5 {
        text-align: center;
      }
    }

    @media (min-width: 767px) {
      padding: 1rem;
    }
    @media (min-width: 992px) {
      padding: 2rem;
    }
  `}
`;
