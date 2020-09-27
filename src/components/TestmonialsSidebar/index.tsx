import * as S from './styles';

const TestmonialsSidebar = () => {
  return (
    <S.Wrapper>
      <h3>O que estão falando sobre meu o Curso Completo:</h3>
      <ul>
        <li>
          <S.VideoWrapper>
            <iframe
              src="https://www.youtube.com/embed/c4Zej7-Po1M"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </S.VideoWrapper>
          <p>Felipe Santolim - SP</p>
          <span>Projeto: Noyzer</span>
        </li>
        <li>
          <S.VideoWrapper>
            <iframe
              src="https://www.youtube.com/embed/B8xx7sRsfEg"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </S.VideoWrapper>
          <p>Guilherme Roth - Curitiba/PR</p>
          <span>Projeto: R.O.T.H</span>
        </li>
        <li>
          <S.VideoWrapper>
            <iframe
              src="https://www.youtube.com/embed/N83cWiAiyGo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </S.VideoWrapper>
          <p>Antony Pinheiro - Curitiba/PR</p>
          <span>Projeto: ALLP</span>
        </li>
        <li>
          <S.VideoWrapper>
            <iframe
              src="https://www.youtube.com/embed/TpvCp9auQ98"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </S.VideoWrapper>
          <p>Alan de Luca - Araraquara/SP</p>
          <span>Projeto: AlanD</span>
        </li>
        <li>
          <S.VideoWrapper>
            <iframe
              src="https://www.youtube.com/embed/3BXky78O9wQ"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </S.VideoWrapper>
          <p>Alan Mezzadri - Quarteira - Portugal</p>
          <span>Projeto: Mezzadri</span>
        </li>
        <li>
          <S.VideoWrapper>
            <iframe
              src="https://www.youtube.com/embed/ETwxYQyKq6w"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </S.VideoWrapper>
          <p>Ricardo Couto - Curitiba/PR</p>
          <span>Projeto: Ricardo Couto</span>
        </li>
        <li>
          <S.VideoWrapper>
            <iframe
              src="https://www.youtube.com/embed/UaJxAG6KLAQ"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </S.VideoWrapper>
          <p>Ellyel Subirá - Paraguaçu Paulista/SP</p>
          <span>Projeto: WillRise</span>
        </li>
      </ul>
    </S.Wrapper>
  );
};

export default TestmonialsSidebar;
