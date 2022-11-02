import React from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import AppRoutes from './routes/Routes';

function App() {
  return (
    <React.Fragment>
      <Header />
      <AppRoutes />
      <Footer />
    </React.Fragment>
  );
}

export default App;
