import * as S from './styles';

export type ButtonProps = {
  children: React.ReactNode;
  color?: 'primary' | 'secondary';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'submit';
  icon?: boolean;
};

const Button = ({
  children,
  color = 'primary',
  onClick,
  type,
  icon = false
}: ButtonProps) => (
  <S.Wrapper color={color} onClick={onClick} type={type} icon={icon}>
    {children} <S.RightArrowIcon />
  </S.Wrapper>
);

export default Button;
