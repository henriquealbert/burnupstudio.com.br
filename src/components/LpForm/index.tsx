import * as S from './styles';

const LpForm = () => {
  return (
    <S.Wrapper>
      <form
        id="llCaptureForm"
        className="llformCustom"
        action="https://paginas.rocks/pages/index/472323"
        method="post"
      >
        <input type="hidden" id="mid" name="mid" value="472323" />
        <input type="hidden" id="fid" name="fid" value="28559" />
        <div>
          <label htmlFor="llfield53557">Primeiro nome</label>
          <input
            type="text"
            id="llfield53557"
            name="llfield53557"
            placeholder="Digite seu primeiro nome"
            data-required="true"
          />
          <div className="field-error" id="llerror53557"></div>
        </div>
        <div>
          <label htmlFor="llfield52877">E-mail</label>
          <input
            type="email"
            id="llfield52877"
            name="llfield52877"
            placeholder="Digite seu melhor e-mail"
            data-required="true"
          />
          <div className="field-error" id="llerror52877"></div>
        </div>
        <div>
          <label>Qual estilo você gostaria aprender a produzir?</label>
          <div className="field-error" id="llerror53558"></div>
          <div className="radio-list">
            <div className="radio">
              <label>
                <input
                  type="radio"
                  id="llfield120276"
                  name="llfield53558"
                  value="High BPM (Ex: PsyTrance)"
                  checked
                />
                High BPM (Ex: PsyTrance)
              </label>
            </div>
            <div className="radio">
              <label>
                <input
                  type="radio"
                  id="llfield120277"
                  name="llfield53558"
                  value="Low BPM (Ex: Tech House)"
                />
                Low BPM (Ex: Tech House)
              </label>
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="llfield53559">WhatsApp</label>
          <input
            type="tel"
            id="llfield53559"
            name="llfield53559"
            placeholder="Digite seu WhatsApp com DDD (Opcional)"
          />
          <div className="field-error" id="llerror53559"></div>
        </div>
        <div className="button-bar">
          <button type="submit">INSCREVA-SE</button>
        </div>
        <div className="loading-box">
          <img src="//paginas.rocks/content/images/spinner.gif" />
          <div>loading...</div>
        </div>
        <div className="error-box">
          <img src="//paginas.rocks/content/images/error-icon.png" />
          <div></div>
          <button type="button" className="btn" id="btn-error">
            Ok
          </button>
        </div>
        <img
          src="https://llimages.com/redirect/redirect.aspx?A=V&f=28559&m=472323"
          style={{ display: 'none' }}
        />
      </form>
    </S.Wrapper>
  );
};

export default LpForm;
