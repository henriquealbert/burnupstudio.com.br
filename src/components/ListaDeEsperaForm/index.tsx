import * as S from './styles';

const ListaDeEsperaForm = () => {
  return (
    <S.Wrapper>
      <form action="https://paginas.rocks/pages/index/461910" method="post">
        <input id="id" name="id" type="hidden" value="461910" />
        <input id="mid" name="mid" type="hidden" value="461910" />
        <input id="pid" name="pid" type="hidden" value="16462002" />
        <input id="list_id" name="list_id" type="hidden" value="461910" />
        <input id="provider" name="provider" type="hidden" value="leadlovers" />
        <label htmlFor="name">Nome:</label>
        <input
          className="form-control form-ll"
          id="name"
          name="name"
          placeholder="Informe o seu primeiro nome"
          type="text"
        />
        <label htmlFor="email">E-mail:</label>
        <input
          className="form-control form-ll"
          id="email"
          name="email"
          placeholder="Informe o seu melhor e-mail"
          type="text"
        />
        <label htmlFor="phone">Telefone:</label>
        <input
          className="form-control form-ll"
          id="phone"
          name="phone"
          placeholder="Informe o seu telefone"
          type="text"
        />
        <button
          className="btn btn-danger"
          style={{
            padding: '10px 40px',
            margin: '15px 0 5px',
            backgroundColor: 'rgba(240, 125, 31, 0.11)',
            borderColor: 'rgba(240, 125, 31, 0.11) !important'
          }}
          type="submit"
        >
          ENTRAR PARA LISTA VIP DE ESPERA
        </button>
        <input type="hidden" id="source" name="source" value="" />
        <img
          src="https://llimages.com/redirect/redirect.aspx?A=V&p=16462002&m=461910"
          style={{ display: 'none' }}
        />
      </form>
    </S.Wrapper>
  );
};

export default ListaDeEsperaForm;
