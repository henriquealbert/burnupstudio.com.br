import * as S from './styles';

export type LogoProps = {
  color?: 'white' | 'black';
  size?: 'normal' | 'large';
};

const Logo = ({ color = 'white', size = 'normal' }: LogoProps) => {
  return (
    <S.Wrapper size={size}>
      <img src={`/img/logo-${color}.png`} alt="Burn Up Studio Logo" />
    </S.Wrapper>
  );
};

export default Logo;
