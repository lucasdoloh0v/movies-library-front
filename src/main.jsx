import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import theme from './styles/theme';
import GlobalStyles from './styles/global';
import { AppRoutes } from './routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppRoutes />
    </ThemeProvider>
  </StrictMode>,
);
