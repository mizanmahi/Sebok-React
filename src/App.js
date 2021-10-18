import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';

import './App.css';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme/theme';
import Home from './pages/Home';

function App() {
   console.log(theme);

   return (
      <div className='App'>
         <ThemeProvider theme={theme}>
            <BrowserRouter>
               <Header />
               <Switch>
                  <Route exact path='/'>
                     <Home />
                  </Route>
                  <Route exact path='/home'>
                     <Home />
                  </Route>
               </Switch>
            </BrowserRouter>
         </ThemeProvider>
      </div>
   );
}

export default App;
