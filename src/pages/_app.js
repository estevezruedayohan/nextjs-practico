import AppContext from '@Context/AppContext';
import useInitialState from '@Hooks/useInitialState';
import Header from "@Componentes/Header";
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value= {initialState}>
      <Header />
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp
