import { Route, Routes  } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { myTheme } from '../theme/default';
import GlobalStyles from '../styles/globals';

import {
  Home,
  RecipeDetail,
} from '.';


function App() {
  return (
    <>
      <ThemeProvider theme={myTheme}>
        <GlobalStyles />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipe/:id" element={<RecipeDetail />} />
          </Routes>
        </main>
      </ThemeProvider>
    </>
  );
}

export default App;
