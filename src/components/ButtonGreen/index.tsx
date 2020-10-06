import { Button, withStyles } from '@material-ui/core';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

type ButtonProps = {
  children: React.ReactNode;
  arrow?: boolean;
  href?: string;
  target?: string;
  rel?: string;
};

const Btn = withStyles({
  root: {
    backgroundColor: 'rgba(255, 134, 54, 1)',
    color: '#fff',
    fontWeight: 700,
    fontSize: '18px',
    textTransform: 'uppercase',
    padding: '15px 30px',
    '&:hover': { backgroundColor: 'rgba(255, 134, 54, 0.75)', color: '#fff' }
  }
})(Button);

const ButtonGreen = ({ children, arrow, href }: ButtonProps) => {
  return (
    <Btn href={href}>
      {children}
      {arrow ? <ArrowRightAltIcon fontSize="large" /> : ''}
    </Btn>
  );
};

export default ButtonGreen;
