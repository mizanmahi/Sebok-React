import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';

import './App.css';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme/theme';
import Home from './pages/Home';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';

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
                  <Route exact path='/login'>
                     <Login />
                  </Route>
                  <Route exact path='/signup'>
                     <Signup />
                  </Route>
               </Switch>
            </BrowserRouter>
         </ThemeProvider>
      </div>
   );
}

export default App;
