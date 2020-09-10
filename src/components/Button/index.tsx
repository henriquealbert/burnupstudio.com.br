import * as S from './styles';

export type ButtonProps = {
  children: React.ReactNode;
  color?: 'primary' | 'secondary';
};

const Button = ({ children, color = 'primary' }: ButtonProps) => (
  <S.Wrapper color={color}>
    {children} <S.RightArrowIcon />
  </S.Wrapper>
);

export default Button;
