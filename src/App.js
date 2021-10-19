import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';

import './App.css';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme/theme';
import Home from './pages/Home';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import AuthContextProvider from './context/AuthContextProvider';
import Footer from './components/Footer/Footer';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import About from './pages/About';
import NotFount from './pages/NotFount';
import Appointment from './pages/Appointment';

function App() {
   console.log(theme);

   return (
      <div className='App'>
         <AuthContextProvider>
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
                     <ProtectedRoute exact path='/service/:serviceId'>
                        <ServiceDetails />
                     </ProtectedRoute>
                     <Route exact path='/login'>
                        <Login />
                     </Route>
                     <Route exact path='/signup'>
                        <Signup />
                     </Route>
                     <Route exact path='/about'>
                        <About />
                     </Route>
                     <ProtectedRoute exact path='/appointment'>
                        <Appointment />
                     </ProtectedRoute>
                     <Route  path='*'>
                        <NotFount />
                     </Route>
                  </Switch>
                  <Footer />
               </BrowserRouter>
            </ThemeProvider>
         </AuthContextProvider>
      </div>
   );
}

export default App;
