import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '@Contenedores/Layout';
import Login from '@Pages/Login';
import RecoveryPassword from '@Contenedores/RecoveryPassword';
import Home from '@Pages/Home';
import MyOrders from '@Pages/MyOrders';
import Order from '@Pages/checkout';
import NotFound from '@Pages/NotFound';
import AppContext from '@Context/AppContext';
import useInitialState from '@Hooks/useInitialState';
import '@Styles/global.css';
// import styles from '@Styles/global.css';


const App = () => {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/myorders" component={MyOrders} />
              <Route exact path="/orderId" component={Order} />
              <Route exact path="/recovery-password" component={RecoveryPassword} />
              <Route path="*" component={NotFound} />
            </Switch>
          </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;

