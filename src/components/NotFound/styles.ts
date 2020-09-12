import styled, { css } from 'styled-components';

export const Wrapper = styled.main`
  ${({ theme }) => css`
    padding-top: 1rem;
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

    h1 {
      color: ${theme.colors.white};
      line-height: 1;
      margin-bottom: 2rem;
    }

    h2 {
      color: ${theme.colors.white};
      font-size: 1.25rem;
      margin-top: 1rem;
      margin-bottom: 0;
    }

    @media (min-width: 767px) {
      h2 {
        margin-top: 2rem;
      }
    }
  `}
`;

export const ImgWrapper = styled.div`
  max-width: 200px;
  img {
    width: 100%;
  }
  @media (min-width: 767px) {
    max-width: 300px;
  }
`;
