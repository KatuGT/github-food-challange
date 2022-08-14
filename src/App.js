import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './componentes/Header/Header';
import Home from './paginas/Home';
import InfoTrabajo from './paginas/InfoTrabajo';
import { QueryProvider } from './providers/queryProviders';

function App() {
  return (
    <QueryProvider>
      <div className='App'>
        <Router>
          <Header />
          <Routes>
            <Route path='/' index element={<Home />} />
            <Route path='/info' index element={<InfoTrabajo />} />
          </Routes>
        </Router>
      </div>
    </QueryProvider>
  );
}

export default App;
