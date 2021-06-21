import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './hooks/useAuth';
import Login from './pages/Login';
import Timeline from './pages/Timeline';
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
