import styled, { css } from 'styled-components';
import { Close } from '@styled-icons/evaicons-solid/Close';

export const Wrapper = styled.div``;

export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    flex-direction: column;
    width: 500px;
    pointer-events: auto;
    background-color: ${theme.colors.white};
    font-size: ${theme.font.sizes.regular};
  `}
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.6rem;
  border-bottom: 1px solid #dee2e6;
`;

export const CloseWrapper = styled.div`
  cursor: pointer;
`;

export const CloseIcon = styled(Close)`
  ${({ theme }) => css`
    width: 2.5rem;
    height: 2.5rem;
    color: ${theme.colors.gray};
  `}
`;

export const HeaderTitle = styled.h5`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.light};
    color: ${theme.colors.gray};
  `}
`;

export const Content = styled.div`
  padding: 1.6rem;
`;
