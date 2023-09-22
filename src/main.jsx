import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import theme from './styles/theme';
import GlobalStyles from './styles/global';
import { AppRoutes } from './routes';
import { AuthProvider } from './providers/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>,
);
