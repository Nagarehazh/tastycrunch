import { Route, Routes  } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { myTheme } from '../theme/default';
import GlobalStyles from '../styles/globals';
import { Container } from '../theme/MainContainerStyles';
import {
  Home
} from '.';


function App() {
  return (
    <Container>
      <ThemeProvider theme={myTheme}>
        <GlobalStyles />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </ThemeProvider>
    </Container>
  );
}

export default App;
