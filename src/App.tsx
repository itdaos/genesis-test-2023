import './App.scss'
import HalfPageDrawer from './components/half-page-drawer'
import { themeOptions } from './custom-theme-options';
import CreateCard from './layout/create-card/create-card'
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme(themeOptions);

function App() {

  return (
    <ThemeProvider theme={theme}>
      <HalfPageDrawer anchor='right'>
        <CreateCard closeModal={(_) => { }}></CreateCard>
      </HalfPageDrawer>
    </ThemeProvider>
  )
}

export default App
