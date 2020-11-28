import {
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import ButtonGreen from 'components/ButtonGreen';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ReactPlayer from 'react-player';
import { Link as ScrollLink } from 'react-scroll';

import * as S from './styles';

export default function PaginaDeVenda() {
  return (
    <div>
      <S.Wrapper>
        <h1>
          Aprenda a <span>Produzir</span> suas Próprias Músicas
        </h1>
        <h3>
          Aprenda do zero a Produzir Música Eletrônica e comece a sua carreira
          como <span>Produtor/DJ</span>. Mais de 140 aulas divididas em 14
          Módulos.
        </h3>

        <ScrollLink to="matricula" smooth={true} duration={1000}>
          <ButtonGreen arrow href="#matricula">
            INSCREVA-SE AGORA
          </ButtonGreen>
        </ScrollLink>
      </S.Wrapper>
      <S.BenefitsWrapper>
        <h2>Você só encontra em nosso Curso</h2>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <S.CardBenefit>
              <S.HeadsetIcon />
              <div>
                <h4>Do zero ao Avançado</h4>
                <p>
                  Mesmo que você nunca tenha visto nada sobre música, irei te
                  ensinar do princípio te explicando todas as ferramentas e
                  passos para você chegar ao nível profissional.
                </p>
              </div>
            </S.CardBenefit>
            <S.CardBenefit>
              <S.GemIcon />
              <div>
                <h4>Mixagem e Masterização</h4>
                <p>
                  Lapidar sua track é fundamental para atingir o nível
                  profissional e internacional. Irei te explicar todo o meu
                  processo que já usei para mixar e masterizar tracks durante
                  mais de 10 anos.
                </p>
              </div>
            </S.CardBenefit>
            <S.CardBenefit>
              <S.PlayIcon />
              <div>
                <h4>App para assistir off-line</h4>
                <p>
                  Aplicativo disponível para você baixar todas as aulas no seu
                  celular e assistir off-line (igual Netflix).
                </p>
              </div>
            </S.CardBenefit>
          </Grid>
          <Grid item xs={12} sm={6}>
            <S.CardBenefit>
              <S.MusicIcon />
              <div>
                <h4>5 gêneros diferentes</h4>
                <p>
                  Irei te ensinar os 5 gêneros principais da música eletrônica,
                  que te dará base para criar qualquer som eletrônico que você
                  quiser. House, Tech House, Techno Br, Psytrance e Brazilian
                  Bass.
                </p>
              </div>
            </S.CardBenefit>
            <S.CardBenefit>
              <S.GroupIcon />
              <div>
                <h4>Grupo do WhatsApp</h4>
                <p>
                  Aqui você não estará sozinho. Todos os alunos no mesmo grupo
                  para fazer networking e trocar experiências. Diversas collabs
                  já surgiram do grupo.
                </p>
              </div>
            </S.CardBenefit>
            <S.CardBenefit>
              <S.RocketIcon />
              <div>
                <h4>Lançamento da sua track</h4>
                <p>
                  Ao final do Curso você terá a oportunidade de lançar sua track
                  em todas as plataformas digitais, incluindo Spotify, iTunes,
                  Beatport... pelo nosso selo Burn Up Records.
                </p>
              </div>
            </S.CardBenefit>
          </Grid>
        </Grid>
      </S.BenefitsWrapper>
      <S.TestimonialWrapper>
        <div>
          <img
            src="/img/giuliano.jpg"
            alt="Giuliano Rodrigues"
            loading="lazy"
          />
        </div>
        <div>
          <S.QuoteIcon />
          <p>
            Sou bem suspeito pra falar pois desde o final do curso tenho quase
            que diretamente indicando, ou se não, comentando sobre o mesmo.
          </p>
          <p>
            Posso ousar em opinar pois já fiz alguns cursos de nome e de peso,
            com referência internacional, mas sempre no final eu sentia que
            faltava alguma coisa. Com esse curso, que confesso que já pensava
            “esse é o último curso que tento”, já fiquei surpreso nas primeiras
            aulas com tamanha objetividade e sem enrolo. Nos outros eu dava
            voltas, ao invés de dizer EXCLUIR e DELETAR ARQUIVO, falavam vários
            caminhos para o mesmo resultado.
          </p>
          <p>
            Tratando-se masterização então, foi o que mais me ganho no curso, o
            que era praticamente um mistério, virou prazer de masterizar e de
            dar vida a track. Pós o curso produzi 3 músicas em um mês com estilo
            que venho abordando a anos, DEEP HOUSE e DUB TECHNO. Porém a
            terceira track e última até o momento, usei de tudo que aprendi no
            curso e me sento confortável em fazer um outro estilo em que eu não
            estou acostumado: TECHNO.
          </p>
          <a
            href="https://dubgiu.bandcamp.com/album/dubg003-shakti"
            target="_blank"
            rel="noopener noreferrer"
          >
            E o resultado foi esse (clique aqui para ouvir)
          </a>
          <h5>Giuliano Rodrigues</h5>
          <span>DJ E PRODUTOR DO RIO DE JANEIRO</span>
        </div>
      </S.TestimonialWrapper>
      <S.CourseContentWrapper>
        <h2>Conteúdo do Curso</h2>
        <S.ContentGrid>
          <S.ContentGridItem>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <h3>1. Introdução</h3>
              </AccordionSummary>
              <AccordionDetails>
                <S.ListContent>
                  <li>Bem vindo e Apresentação do Curso</li>
                  <li>Como tirar suas dúvidas?</li>
                  <li>App para Assistir Offline (igual Netflix)</li>
                  <li>
                    O que é produção de música eletrônica e o que um produtor
                    faz?
                  </li>
                  <li>Como começar a produzir? O que eu preciso?</li>
                  <li>Principais gêneros na música eletrônica</li>
                </S.ListContent>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <h3>2. Mindset</h3>
              </AccordionSummary>
              <AccordionDetails>
                <S.ListContent>
                  <li>Como estudar de forma eficiente</li>
                  <li>Os três pilares da produção musical</li>
                  <li>Rotina semanal de estudos</li>
                  <li>Saídas profissionais</li>
                  <li>Os 5 estágios de um produtor (guia)</li>
                  <li>
                    Checklist para começar um projeto de música eletrônica
                  </li>
                  <li>Ingredientes + mapa</li>
                </S.ListContent>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <h3>3. Fundamentos Básicos</h3>
              </AccordionSummary>
              <AccordionDetails>
                <S.ListContent>
                  <li>O que você precisa para começar</li>
                  <li>Fundamentos de áudio básico</li>
                  <li>Ferramentas para produzir uma track</li>
                  <li>Low bpm vs High bpm</li>
                  <li>Escolhendo sua daw</li>
                </S.ListContent>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <h3>4. Dominando o Ableton Live 10</h3>
              </AccordionSummary>
              <AccordionDetails>
                <S.ListContent>
                  <li>Conhecendo o Ableton live 10</li>
                  <li>Começando um novo projeto</li>
                  <li>Áudio, midi e return channels</li>
                  <li>Browser, playback e organização</li>
                  <li>Session view</li>
                  <li>Arrangment view</li>
                  <li>Atalhos mais usados na produção</li>
                  <li>Revisão - Dominando o Ableton Live 10</li>
                </S.ListContent>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <h3>5. Produção Básica</h3>
              </AccordionSummary>
              <AccordionDetails>
                <S.ListContent>
                  <li>Visão geral do módulo</li>
                  <li>Bateria</li>
                  <li>Percussão e ritmos</li>
                  <li>Bassline</li>
                  <li>Melodia e harmonia – teorial musical básica</li>
                  <li>Arpeggiator</li>
                  <li>Efeitos de áudio nativo</li>
                  <li>Automações e macros</li>
                  <li>Sidechain</li>
                  <li>Fx e fills</li>
                  <li>Arranjo - Estrutura</li>
                  <li>Arranjo - Break</li>
                  <li>Arranjo - Drop</li>
                  <li>Arranjo - Outro</li>
                  <li>Desafio e Feedback</li>
                </S.ListContent>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <h3>6. Produção Avançada</h3>
              </AccordionSummary>
              <AccordionDetails>
                <S.ListContent>
                  <li>Visão geral do módulo</li>
                  <li>Análise de tracks de referência</li>
                  <li>Adsr</li>
                  <li>Sampling</li>
                  <li>Vsts recomendados</li>
                  <li>Presets</li>
                  <li>Básico sobre sintetizadores</li>
                  <li>Equalização básica</li>
                  <li>Layering</li>
                  <li>Saturação, distorção e transient shaper</li>
                  <li>Warp</li>
                  <li>Vocal e acapellas</li>
                  <li>Convert to melody/Harmony</li>
                  <li>Buildups e breaks</li>
                  <li>Colocar sample no tom correto</li>
                  <li>Midi effects</li>
                  <li>Shaperbox – sound shaping</li>
                  <li>Gravação teclado midi</li>
                  <li>Desafio</li>
                </S.ListContent>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <h3>7. Gêneros: Tech-House</h3>
              </AccordionSummary>
              <AccordionDetails>
                <S.ListContent>
                  <li>Visão geral do módulo</li>
                  <li>História do tech-house</li>
                  <li>Características únicas, estudo de timbres e estrutura</li>
                  <li>Brainstorm</li>
                  <li>Bateria</li>
                  <li>Bassline</li>
                  <li>Vocais e efeitos</li>
                  <li>Melodia e breakdown</li>
                  <li>Arranjo, automações e detalhes finais</li>
                  <li>Desafio e Feedback</li>
                </S.ListContent>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <h3>8. Mixagem</h3>
              </AccordionSummary>
              <AccordionDetails>
                <S.ListContent>
                  <li>Introdução ao módulo</li>
                  <li>O que é mixagem?</li>
                  <li>Rms, Peak e Lufs</li>
                  <li>Por onde começar a Mixagem</li>
                  <li>Equalização Avançada</li>
                  <li>Fase e compressão</li>
                  <li>Imagem Stereo e Panning</li>
                  <li>Bass em camadas (mid e side)</li>
                  <li>Mixagem na prática - parte 01</li>
                  <li>Mixagem na prática - parte 02</li>
                  <li>Mixagem por grupos</li>
                  <li>Exportando sua mix</li>
                  <li>Desafio e Feedback</li>
                </S.ListContent>
              </AccordionDetails>
            </Accordion>
          </S.ContentGridItem>
          <S.ContentGridItem>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <h3>9. Masterização</h3>
              </AccordionSummary>
              <AccordionDetails>
                <S.ListContent>
                  <li>Visão geral do módulo e introdução</li>
                  <li>O que é Masterização</li>
                  <li>Rack de masterização e reparando picos</li>
                  <li>Masterização com plugins nativos do ableton 10</li>
                  <li>Masterização com plugins izotope</li>
                  <li>Masterização com plugins t-racks 5</li>
                  <li>Masterização com plugins fabfilter</li>
                  <li>Masterização com plugins waves</li>
                  <li>Masterização com a combinação dos melhores plugins</li>
                  <li>Comparação das masterizações</li>
                  <li>Desafio e Feedback</li>
                </S.ListContent>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <h3>10. Mixagem com Plugins Nativos [BÔNUS]</h3>
              </AccordionSummary>
              <AccordionDetails>
                <S.ListContent>
                  <li>Bateria</li>
                  <li>Bassline</li>
                  <li>Melodia</li>
                  <li>Vocal</li>
                  <li>Fx e demais canais</li>
                </S.ListContent>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <h3>11. Remix & Bootleg [BÔNUS]</h3>
              </AccordionSummary>
              <AccordionDetails>
                Iremos construir uma track de Techno Br:
                <S.ListContent>
                  <li>O que é Remix e Bootleg?</li>
                  <li>Como criar um remix pack</li>
                  <li>Preparando os arquivos para REMIX</li>
                  <li>Preparando os arquivos para BOOTLEG</li>
                  <li>Técnicas para extração da acapella</li>
                  <li>Usando remix parts de forma criativa [REMIX]</li>
                  <li>Usando partes da track de forma criativa [BOOTLEG]</li>
                  <li>Desafio e Feedback</li>
                </S.ListContent>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <h3>12. Gêneros: Psytrance [BÔNUS]</h3>
              </AccordionSummary>
              <AccordionDetails>
                <S.ListContent>
                  <li>Introdução e Visão Geral</li>
                  <li>Arranjo e estrutura</li>
                  <li>Bateria (bazzism + sampling)</li>
                  <li>
                    Bassline (síntese em camadas + sampling + linhas de bass)
                  </li>
                  <li>Vocal + extração de midi</li>
                  <li>Breaks e buildup</li>
                  <li>Drop 01</li>
                  <li>Drop 02</li>
                  <li>Detalhes e ajustes finais na parte criativa</li>
                  <li>Mixagem</li>
                  <li>Masterização</li>
                  <li>Desafio e Feedback</li>
                </S.ListContent>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <h3>13. Gêneros: Brazilian Bass [BÔNUS]</h3>
              </AccordionSummary>
              <AccordionDetails>
                <S.ListContent>
                  <li>Introdução e Visão Geral</li>
                  <li>Arranjo e estrutura</li>
                  <li>Vocal + extração de midi</li>
                  <li>Bateria e esqueleto</li>
                  <li>Bassline (vários timbres + sampling + linhas de bass)</li>
                  <li>Intro, break e buildup</li>
                  <li>Drop 01</li>
                  <li>Drop 02</li>
                  <li>Detalhes e ajustes finais na parte criativa</li>
                  <li>Mixagem</li>
                  <li>Masterização</li>
                  <li>Desafio e Feedback</li>
                </S.ListContent>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <h3>14. Masterclass [BÔNUS]</h3>
              </AccordionSummary>
              <AccordionDetails>
                <S.ListContent>
                  <li>Mixagem Prática - Tech House</li>
                  <li>Masterização Prática - Tech House</li>
                </S.ListContent>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <h3>15. Trabalho de Conclusão de Curso</h3>
              </AccordionSummary>
              <AccordionDetails>
                <S.ListContent>
                  <li>Por que ter um tcc?</li>
                  <li>Como enviar, requisitos e considerações finais</li>
                </S.ListContent>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <h3>
                  16. Curso Completo de Marketing para DJs e Produtores [BÔNUS]
                </h3>
              </AccordionSummary>
              <AccordionDetails>
                <S.ListContent>
                  <li>Introdução</li>
                  <li>Em breve...</li>
                </S.ListContent>
              </AccordionDetails>
            </Accordion>
          </S.ContentGridItem>
        </S.ContentGrid>
      </S.CourseContentWrapper>
      <S.PreRequisitosWrapper>
        <div>
          <img src="/img/desktop.png" alt="Alpha Experience Desktop" />
        </div>
        <div>
          <h2>Pré-Requisitos</h2>
          <S.CardRequisito>
            <S.DesktopIcon />
            <div>
              <h4>COMPUTADOR OU NOTEBOOK</h4>
              <p>Mínimo i3 com 4gb de ram e 120gb espaço em disco.</p>
            </div>
          </S.CardRequisito>
          <S.CardRequisito>
            <S.HeadsetIcon />
            <div>
              <h4>HEADPHONE OU CAIXAS DE SOM</h4>
              <p>
                Headphone Simples ou Caixas de som Simples. Você pode comprar
                equipamentos melhores depois, mas não precisa do mais top para
                começar.
              </p>
            </div>
          </S.CardRequisito>
          <S.CardRequisito>
            <S.LaptopIcon />
            <div>
              <h4>SOFTWARE DE PRODUÇÃO</h4>
              <p>
                Você pode usar qualquer software de produção, mas recomendo o
                Ableton Live 10 pela facilidade e rapidez para aprender.
              </p>
            </div>
          </S.CardRequisito>
        </div>
      </S.PreRequisitosWrapper>
      <S.ProjetosCurso>
        <h2>Projetos feitos no Curso</h2>
        <span>
          Você irá criar cada um deles do zero no Curso e terá acesso ao projeto
          deles.
        </span>
        <S.Soundcloud>
          <S.SoundcloudItems>
            <ReactPlayer
              width="320px"
              url="https://soundcloud.com/behind-u/get-lost"
            />
            <ReactPlayer
              width="320px"
              url="https://soundcloud.com/behind-u/indian"
            />
            <ReactPlayer
              width="320px"
              url="https://soundcloud.com/freakrec/frkd012-behind-u-its-over-original-mix"
            />
            <ReactPlayer
              width="320px"
              url="https://soundcloud.com/pombeatz/lowkicks-pombeatz-pomomo-behind-u-remix-preview-out-now-on-sleazy-g"
            />
            <ReactPlayer
              width="320px"
              url="https://soundcloud.com/behind-u/brazilian-bass"
            />
            <ReactPlayer
              width="320px"
              url="https://soundcloud.com/behind-u/producao-basica-house"
            />
          </S.SoundcloudItems>
        </S.Soundcloud>
      </S.ProjetosCurso>
      <S.DepoimentosAlunos>
        <h2>O que meus Alunos estão dizendo sobre o Curso</h2>
        <S.Alunos>
          <div>
            <S.AlunoCard>
              <img src="/img/jefferson.jpg" alt="Jefferson Souza" />
              <div>
                <p>
                  Já fiz vários cursos online, mais o que mais gostei e me fez
                  evoluir de verdade foi o ALPHA EXPERIENCE!!! Sem contar o
                  suporte com o Professor via Whatsapp, é excelente.
                </p>
                <Rating name="read-only" value={5} readOnly />
                <h6>Jefferson Souza</h6>
                <strong>Imperatriz - Maranhão</strong>
              </div>
            </S.AlunoCard>
            <S.AlunoCard>
              <img src="/img/matheus.jpg" alt="Matheus Cassa" />
              <div>
                <p>
                  Melhor curso! Finalizei e tive uma noção bem maior sobre a
                  produção musical, além de ja estar conseguindo produzir
                  certinho as track! Curso bem direto e de ótimo conteúdo, com
                  ótimas dicas e explicações em coisas que todos acham um bicho
                  de sete cabeças! Super indico pra quem quer começar a
                  produzir!
                </p>
                <Rating name="read-only" value={5} readOnly />
                <h6>Matheus Cassa</h6>
                <strong>São Paulo - São Paulo</strong>
              </div>
            </S.AlunoCard>
            <S.AlunoCard>
              <img src="/img/asaph.jpg" alt="Asaph Oliveira" />
              <div>
                <p>
                  professor incrível, atencioso com a galera , sempre ajudando e
                  incentivando em tudo , na medida do possível. sobre o curso?
                  ,bem detalhado e direto ao ponto,melhor investimento, pra quem
                  não sabia nada, estou super satisfeito
                </p>
                <Rating name="read-only" value={5} readOnly />
                <h6>Asaph Oliveira</h6>
                <strong>Americana - São Paulo</strong>
              </div>
            </S.AlunoCard>
            <S.AlunoCard>
              <img src="/img/antony.jpg" alt="Antony Lucas Lopes" />
              <div>
                <p>
                  melhor curso! direto ao ponto sem enrolação. terminei minha
                  primeira track muito mais rapido
                </p>
                <Rating name="read-only" value={5} readOnly />
                <h6>Antony Lucas Lopes</h6>
                <strong>Curitiba - Paraná</strong>
              </div>
            </S.AlunoCard>
            <S.AlunoCard>
              <img src="/img/patrick.jpg" alt="Patrick Beulk" />
              <div>
                <p>
                  Otimo curso, pra quem não sabe como começar e para os que já
                  estão no caminho Vale a pena também! Recomendo muito!
                </p>
                <Rating name="read-only" value={5} readOnly />
                <h6>Patrick Beulk</h6>
                <strong>Porto Alegre - Rio Grande do Sul</strong>
              </div>
            </S.AlunoCard>
          </div>
          <div>
            <S.AlunoCard>
              <img src="/img/felipe.png" alt="Felipe Rinaldin" />
              <div>
                <p>
                  O curso é bem objetivo. A maioria das aulas dura entre 10 e 20
                  minutos, o que possibilita se dedicar à produção musical todo
                  o dia e aplicar os conhecimentos gradativamente.
                </p>
                <Rating name="read-only" value={5} readOnly />
                <h6>Felipe Rinaldin</h6>
                <strong>Curitiba - Paraná</strong>
              </div>
            </S.AlunoCard>
            <S.AlunoCard>
              <img src="/img/lawrence.png" alt="Lawrence Borges" />
              <div>
                <p>
                  Curso excelente, professor atento, o tempo todo tirando
                  duvidas pelo whatsapp, super recomendo à todos que desejam
                  fazer musicas com qualidade profissional!
                </p>
                <Rating name="read-only" value={5} readOnly />
                <h6>Lawrence Borges</h6>
                <strong>Goiás</strong>
              </div>
            </S.AlunoCard>
            <S.AlunoCard>
              <img src="/img/marcos.jpg" alt="Marcos Andrade" />
              <div>
                <p>
                  Um dos melhores cursos de produção que ja fiz. O diferencial
                  de um módulo para cada gênero musical mais conhecido é uma das
                  melhores coisas que o curso tem a oferecer, além de todo o
                  material didático completo e objetivo.
                </p>
                <Rating name="read-only" value={5} readOnly />
                <h6>Marcos Andrade</h6>
                <strong>Curitiba - Paraná</strong>
              </div>
            </S.AlunoCard>
            <S.AlunoCard>
              <img src="/img/marcus.jpg" alt="Marcus Paulo" />
              <div>
                <p>
                  muito bem explicado vale muito apena , super RECOMENDO 🍀😎
                </p>
                <Rating name="read-only" value={5} readOnly />
                <h6>Marcus Paulo</h6>
                <strong>Palhoça - Santa Catarina</strong>
              </div>
            </S.AlunoCard>
            <S.AlunoCard>
              <img src="/img/agui.jpg" alt="Agui Roxy" />
              <div>
                <p>
                  Olá pessoal. Você que tem, aquele sonho de criar sua própria
                  música eletrônica , Você Está no lugar Certo, chega de
                  procurar informações incompletas no Yutuber, cai pra dentro do
                  curso Burn up Studio é seja feliz, conteúdo na plataforma Burn
                  up de Alto nível, muito bem Explicado e detalhado, Atenção com
                  os alunos, fedbak pontual e certeiro que faz Você crescer
                  muito. encurta o Caminho do sonho faça parte da Burn up
                  Studio, 🙌🙌👊👊🔊🔊🎶
                </p>
                <Rating name="read-only" value={5} readOnly />
                <h6>Agui Roxy</h6>
                <strong>Estados Unidos</strong>
              </div>
            </S.AlunoCard>
          </div>
        </S.Alunos>
        <S.VideosDepoimentos>
          <S.Video>
            <iframe
              src="https://www.youtube.com/embed/pk0aGqV2d4k"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </S.Video>
          <S.Video>
            <iframe
              src="https://www.youtube.com/embed/i_4lmQTJ3SY"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </S.Video>
        </S.VideosDepoimentos>
      </S.DepoimentosAlunos>
      <S.Pagamento id="matricula">
        <h2>
          Faça agora sua Matrícula para o melhor Curso de Produção de Música
          Eletrônica do Brasil:
        </h2>
        <S.Venda>
          <div>
            <h3>R$ 997,00</h3>
            <span>à vista</span>
            <p>
              ou em até 12x de R$ 97,14
              <span>Menos que o valor de uma pizza!</span>
            </p>
            <ButtonGreen
              arrow
              href="https://pay.hotmart.com/T14321147M?off=ve71u1if&checkoutMode=10&split=12&bid=1601922956886"
            >
              INSCREVA-SE AGORA
            </ButtonGreen>
          </div>
          <ul>
            <li>Curso Completo com Acesso por 12 meses</li>
            <li>Mais de 140 aulas de conteúdo prático</li>
            <li>Módulo bônus de Remix e Bootleg</li>
            <li>Módulo bônus de Psytrance</li>
            <li>Módulo bônus de Brazilian Bass</li>
            <li>Módulo bônus de Tech House</li>
            <li>Curso completo de Marketing para DJs e Produtores</li>
            <li>
              Módulo bônus de Mixagem e Masterização com Plugins nativos do
              Ableton
            </li>
            <li>
              Grupo de WhatsApp para suporte, feedback de tracks e networking
            </li>
            <li>
              Tire todas as suas dúvidas direto com o Professor pelo WhatsApp
            </li>
            <li>Certificado de Conclusão</li>
            <li>Lançamento da sua track</li>
          </ul>
        </S.Venda>
        <p>
          Parcelamentos em até 12 vezes no cartão de crédito. Boleto somente à
          vista.
        </p>
        <div>
          <p>07 dias de Garantia ou seu dinheiro de volta.</p>
          <img src="/img/formasdepagamento.png" alt="Formas de Pagamento" />
        </div>
      </S.Pagamento>
      <S.SobreInstrutor>
        <div>
          <img src="/img/instrutor.jpg" alt="Henrique Albert" />
        </div>
        <div>
          <h2>Sobre o Instrutor</h2>
          <p>
            Professor de Produção de Música Eletrônica, Produtor desde 2009,
            atuou como Dj por 5 anos, empreendedor digital, fundador da “Burn Up
            Studio”, criador do curso de Produção de Música Eletrônica “Alpha
            Experience”.
          </p>
          <p>
            Henrique é um entusiasta pelo ensino de produção de música
            eletrônica, que propõe o uso de métodos e técnicas completamente
            diferentes dos tradicionais, buscando sempre as formas de
            aprendizado mais efetivas possíveis para os alunos.
          </p>
        </div>
      </S.SobreInstrutor>
      <S.Faq>
        <h2>Perguntas Frequentes</h2>
        <S.Perguntas>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <h3>Qual Software é utilizado durante as Aulas?</h3>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                Utilizamos o Ableton Live 10, mas você consegue acompanhar em
                qualquer Software de Produção. Temos alunos que utilizam o Logic
                Pro, Cubase e FL Studio que acompanham tranquilamente os
                ensinamentos das aulas.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <h3>Preciso comprar o Software de Produção?</h3>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                Recomendamos que sim, mas você pode testá-lo por 90 dias
                gratuitos{' '}
                <a
                  href="https://www.ableton.com/en/trial/"
                  target="_blank"
                  rel="noreferrer"
                >
                  clicando aqui.
                </a>
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <h3>Posso compartilhar meu acesso com um amigo?</h3>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                Não. O seu acesso é individual e nosso sistema identifica
                acessos simultâneos. Caso isso aconteça, você será banido da
                plataforma. Porém, para projetos em dupla é possível dividir o
                acesso. (entre em contato)
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <h3>Eu recebo todo o conteúdo de uma vez ou gradativamente?</h3>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                Sim, você terá acesso a todo conteúdo do Curso de uma só vez.
                Recomendamos que você assista o Curso na sequencia para não
                ficar com dúvidas.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <h3>Terei acesso ao professor via WhatsApp?</h3>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                Sim, acesso direto do Whatsapp do professor para tirar dúvidas e
                mais o grupo fechado do Whatsapp também.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <h3>
                Por que eu deveria me tornar um membro hoje em vez de esperar?
              </h3>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                É hora de você agir. Simples assim. Se você realmente deseja ser
                um produtor musical bem-sucedido e reconhecido, precisa de um
                lugar para obter respostas para todas as suas perguntas,
                especialmente aquelas que você ainda não conhece. Você precisa
                de apoio, comunidade e, acima de tudo… responsabilidade! O Alpha
                Experience é esse lugar. Se você realmente quer fazer a
                diferença, a hora é agora.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <h3>Eu recebo alguma coisa pelo correio quando eu participo?</h3>
            </AccordionSummary>
            <AccordionDetails>
              <p>Não. O Alpha Experience é inteiramente online.</p>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <h3>E se eu não gostar do Alpha Experience?</h3>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                Nós sabemos que você vai adorar o Alpha Experience, no entanto,
                se por algum motivo você não estiver 100% satisfeito de alguma
                forma, temos uma garantia de reembolso de 07 dias (sem
                perguntas). Queremos que você tenha sucesso e saiba que se você
                se tornar um membro do Alpha Experience e realmente colocar seu
                coração e sua alma nisso… você verá resultados surpreendentes!
              </p>
            </AccordionDetails>
          </Accordion>
        </S.Perguntas>
        <strong>
          Se há alguma coisa que você não tenha certeza, nada que não tenhamos
          deixado claro; quaisquer preocupações ou perguntas, por favor, entre
          em contato conosco em burnupstudio@gmail.com e nós iremos ajudá-lo.
          <br />
          Atendimento via Whatsapp (41) 9 9146-6936
        </strong>
      </S.Faq>
      <S.Footer>© 2020 Burn Up Studio – Todos os Direitos Reservados.</S.Footer>
    </div>
  );
}
