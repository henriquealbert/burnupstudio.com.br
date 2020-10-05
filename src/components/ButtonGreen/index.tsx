import { Button, withStyles } from '@material-ui/core';
import green from '@material-ui/core/colors/green';
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
    backgroundColor: green[600],
    color: '#fff',
    fontWeight: 700,
    fontSize: '18px',
    textTransform: 'uppercase',
    padding: '15px 30px',
    '&:hover': { backgroundColor: green[400], color: '#fff' }
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
