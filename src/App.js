/**
 * This Source Code Edited By Aoun Alazzam
 */

import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import LoginForm from './components/LoginForm';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <LoginForm />
      </Grid>
    </ThemeProvider>
  );
}

export default App;
