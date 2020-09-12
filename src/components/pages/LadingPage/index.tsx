import Logo from 'components/Logo';
import LpForm from 'components/LpForm';
import { Col, Row, Anchor } from 'antd';

import * as S from './styles';

export default function MainLP() {
  const { Link } = Anchor;
  return (
    <>
      <S.Wrapper>
        <S.Header>
          <Logo size="normal" />
          <Anchor affix={false}>
            <Link href="#resumo" title="Resumo" />
            <Link href="#conteudo" title="Conteúdo" />
            <Link href="#sobre" title="Sobre" />
          </Anchor>
        </S.Header>
        <Row id="inscricao">
          <Col span={9} offset={2}>
            <S.TextWrapper>
              Faça parte do <span>Futuro</span> da Produção de Música Eletrônica
            </S.TextWrapper>

            <LpForm />
          </Col>
          <Col span={9} offset={2}>
            <S.ImgWrapper>
              <img
                src="/img/parkart.jpg"
                alt="Henrique Albert Tocando no Park Art"
                loading="lazy"
              />
            </S.ImgWrapper>
          </Col>
        </Row>
      </S.Wrapper>

      <S.About id="resumo">
        <S.AboutWrapper>
          <h2>Sobre a Semana da Produção de Música Eletrônica</h2>
          <S.AboutItems>
            <S.AboutItemOne>
              <span>100% online</span>
              <p>e gratuito</p>
            </S.AboutItemOne>
            <S.AboutItemMiddle>
              <span>Dos dias</span>
              <p>28.09 até 05.10</p>
            </S.AboutItemMiddle>
            <S.AboutItemLast>
              <span>3 Aulas práticas</span>
              <p>+ Material de Apoio</p>
            </S.AboutItemLast>
          </S.AboutItems>
        </S.AboutWrapper>
      </S.About>

      <S.Conteudo id="conteudo">
        <S.ConteudoHeader>
          <h2>
            O que você <span>vai aprender</span>:
          </h2>
          <img src="" alt="img" />
        </S.ConteudoHeader>
        <S.Listas>
          <S.ConteudoLista>
            <li>
              <span>
                <S.ArrowIcon />
              </span>
              Produzir uma track de Tech House e PsyTrance do zero;
            </li>
            <li>
              <span>
                <S.ArrowIcon />
              </span>
              As 4 maneiras problemáticas de se aprender a produzir e como
              evitá-las;
            </li>
            <li>
              <span>
                <S.ArrowIcon />
              </span>
              Como montar seu ambiente de produção de forma produtiva;
            </li>
            <li>
              <span>
                <S.ArrowIcon />
              </span>
              Como se tornar um produtor profissional em aproximadamente 6
              meses;
            </li>
            <li>
              <span>
                <S.ArrowIcon />
              </span>
              Porque aprender a produzir música eletrônica é uma oportunidade;
            </li>
          </S.ConteudoLista>
          <S.ConteudoLista>
            <li>
              <span>
                <S.ArrowIcon />
              </span>
              5 saídas profissionais na produção;
            </li>
            <li>
              <span>
                <S.ArrowIcon />
              </span>
              O que é necessário para começar e a evoluir na produção;
            </li>
            <li>
              <span>
                <S.ArrowIcon />
              </span>
              Os dois tipos de produtores que existem no mercado de música
              eletrônica;
            </li>
            <li>
              <span>
                <S.ArrowIcon />
              </span>
              Como ser um produtor musical extremamente produtivo;
            </li>
            <li>
              <span>
                <S.ArrowIcon />
              </span>
              Os 5 estágios que todo produtor irá passar e como avançar nesses
              estágios rapidamente;
            </li>
          </S.ConteudoLista>
        </S.Listas>
        <div>
          <h1 style={{ color: '#fff' }}>FAÇA PARTE DO FUTURO DA PRODUÇÃO</h1>
          <Anchor affix={false}>
            <Link href="#inscricao" title="INSCREVA-SE" />
          </Anchor>
        </div>
      </S.Conteudo>

      <div id="sobre">
        <div>
          <img src="" alt="Henrique Albert" />
        </div>
        <div>
          <h2>Henrique Albert</h2>
          <p>
            Professor de Produção de Música Eletrônica, Produtor desde 2009,
            atuou como DJ tocando por todo Brasil e também no exterior,
            empreendedor digital, fundador da “Burn Up Studio”, criador do curso
            de Produção de Música Eletrônica “Alpha Experience” que hoje conta
            com mais de 320 alunos e é um dos poucos cursos brasileiros com
            avaliação 5 estrelas e 100% de satisfação .
          </p>
          <p>
            Henrique é um entusiasta pelo ensino de produção de música
            eletrônica, que propõe o uso de métodos e técnicas completamente
            diferentes dos tradicionais, buscando sempre as formas de
            aprendizado mais efetivas possíveis, fazendo com que os seus alunos
            tenham resultados exponenciais em um curto espaço de tempo.
          </p>
          <Anchor affix={false}>
            <Link href="#inscricao" title="INSCREVA-SE" />
          </Anchor>
        </div>
      </div>

      <div>FOOTER</div>
    </>
  );
}
