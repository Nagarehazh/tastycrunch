import { Route, Routes  } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { myTheme } from '../theme/default';
import GlobalStyles from '../styles/globals';

import {
  Home,
  RecipeDetail,
  Landing
} from '.';


function App() {
  return (
    <>
      <ThemeProvider theme={myTheme}>
        <GlobalStyles />
        <main>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/recipes" element={<Home />} />
            <Route path="/recipes/:id" element={<RecipeDetail />} />
          </Routes>
        </main>
      </ThemeProvider>
    </>
  );
}

export default App;
