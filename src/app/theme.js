import { createTheme, ThemeProvider } from '@mui/material/styles';
import { themeOptions } from './themeOptions';

const theme = createTheme(themeOptions);

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
