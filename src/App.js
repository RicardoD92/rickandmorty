import './App.css';
import { Routes, Route } from 'react-router-dom';
import Characters from './components/characters/Characters';
import CharacterDetail from './components/characterDetail/CharacterDetail';

function App() {
  return (
    <Routes>
      <Route path='/characters' element={<Characters/>} />
      <Route path='/detail/:id' element={<CharacterDetail/>} />
    </Routes>
  );
}

export default App;
