import './App.css';
import Localizacao from './componentes/Localizacao';
import Menu from './componentes/Menu';
import QuemSomos from './componentes/QuemSomos';
import Servicos from './componentes/Servicos'

function App() {
  return (
    <>
      <Menu />
      <Servicos />
      <QuemSomos />
      <Localizacao />
    </>
  );
}

export default App;
