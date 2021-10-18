import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';

import './App.css';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme/theme';
import Home from './pages/Home';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';

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
                  <Route exact path='/service/:serviceId'>
                     <ServiceDetails />
                  </Route>
               </Switch>
            </BrowserRouter>
         </ThemeProvider>
      </div>
   );
}

export default App;
