import { createMuiTheme } from '@material-ui/core/styles';

// Create a theme instance.
export const materialTheme = createMuiTheme({
  shape: {
    borderRadius: 5
  },
  props: {
    MuiButton: {
      disableElevation: true,
      disableRipple: true,
      variant: 'contained',
      color: 'primary'
    }
  }
});
