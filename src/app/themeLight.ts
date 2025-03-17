import { createTheme } from '@mui/material/styles';

export const themeLight = createTheme({
  palette: {
    background: {
      default: '#eee'
    }
  },
  typography: {
    fontFamily: 'var(--font-roboto)',
  },
});
