import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    h3 {
      text-transform: uppercase;
      font-weight: bold;
      line-height: 1.2;
      color: ${theme.colors.black};
      text-align: center;
    }

    ul {
      list-style: none;

      li {
        text-align: center;
        border-bottom: 1px solid ${theme.colors.lightGray};
        padding: 1rem 0;
        p {
          margin: 0;
        }
        span {
          font-size: ${theme.font.sizes.small};
          color: ${theme.colors.gray};
        }
      }
    }
  `}
`;

export const VideoWrapper = styled.div`
  position: relative;
  padding-bottom: 45%;
  padding-top: 30px;
  height: 0;
  overflow: hidden;
  iframe,
  object,
  embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
