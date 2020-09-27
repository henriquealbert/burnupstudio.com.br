import styled from 'styled-components';

export const Wrapper = styled.main`
  height: 100%;
`;

export const BottomSection = styled.div`
  margin: 4rem auto;
  display: flex;
  justify-content: center;
  width: 70%;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0 1rem;
    flex-direction: column;
  }
`;
