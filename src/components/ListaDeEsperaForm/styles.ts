import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    label {
      span {
        color: ${theme.colors.gray};
      }
      strong {
        color: ${theme.colors.lightPrimary};
      }
    }
  `}
`;
