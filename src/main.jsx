import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { CookiesProvider } from 'react-cookie';

import theme from './styles/theme';
import GlobalStyles from './styles/global';
import { AppRoutes } from './routes';
import { AuthProvider } from './providers/AuthProvider';
import { LoadingProvider } from './providers/LoadingProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <CookiesProvider defaultSetOptions={{ path: '/' }}>
        <LoadingProvider>
          <AuthProvider>
            <AppRoutes />
          </AuthProvider>
        </LoadingProvider>
      </CookiesProvider>
    </ThemeProvider>
  </StrictMode>,
);
