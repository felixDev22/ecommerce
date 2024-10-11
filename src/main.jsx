import { createRoot } from 'react-dom/client';
import App from './App';
import StoreProvider from './context/Store';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StoreProvider>
      <App />
    </StoreProvider>
  </BrowserRouter>,
);
