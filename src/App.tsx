import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './hooks/useAuth';
import Routes from './routes';



function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes/>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
