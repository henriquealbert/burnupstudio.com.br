import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    h3 {
      width: 90%;
      text-transform: uppercase;
      font-weight: bold;
      line-height: 1.2;
      color: ${theme.colors.black};
      margin-bottom: 2rem;

      span {
        color: ${theme.colors.lightPrimary};
      }
    }
    @media screen and (max-width: 768px) {
      margin-bottom: 2rem;
      h3 {
        width: 100%;
        font-size: ${theme.font.sizes.medium};
        text-align: center;
      }
    }
  `}
`;
