import { ThemeProvider } from '@mui/material/styles';
import { SnackbarProvider } from 'notistack';
import { ReactNode } from 'react';

import { theme } from '@src/theme/mui';

interface MainTemplateProps {
  children: ReactNode;
}
const MainTemplate = ({ children }: MainTemplateProps) => (
  <ThemeProvider theme={theme}>
    <SnackbarProvider
      variant="success"
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
    >
      {children}
    </SnackbarProvider>
  </ThemeProvider>
);

export default MainTemplate;
