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

    button {
      color: #fff;
      background: rgba(255, 134, 54, 1);
      border: 1px solid rgba(255, 134, 54, 1);

      &:hover {
        color: #fff;
        background: rgba(255, 134, 54, 0.75);
        border: 1px solid rgba(255, 134, 54, 0.75);
      }
    }
  `}
`;
