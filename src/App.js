import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/Main/MainComponent';

function App() {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
}

export default App;
