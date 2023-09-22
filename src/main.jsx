import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { CookiesProvider } from 'react-cookie';

import theme from './styles/theme';
import GlobalStyles from './styles/global';
import { AppRoutes } from './routes';
import { AuthProvider } from './providers/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <CookiesProvider defaultSetOptions={{ path: '/' }}>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </CookiesProvider>
    </ThemeProvider>
  </StrictMode>,
);
