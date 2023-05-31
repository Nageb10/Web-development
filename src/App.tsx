import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPageHeader from './components/shared/MainPageHeader';
import {HomePage, DeleteGamePage, GameByIdPage, GameByTitlePage, GameQuiz} from './pages'
import CreateGamePage from './pages/CreateGamePage';
import UpdateGamePage from './pages/UpdateGamePage';
import "./css/global.css"


function App() {
  return (
    <BrowserRouter>
      <div className="panels">
      <MainPageHeader/>
      <main className='container'>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path="/delete-games" element={<DeleteGamePage/>}></Route>
          <Route path='/game-by-id' element={<GameByIdPage/>}></Route>
          <Route path='/game-by-title' element={<GameByTitlePage/>}></Route>
          <Route path='/update-game' element={<UpdateGamePage/>}></Route>
          <Route path='/create-game' element={<CreateGamePage/>}></Route>
          <Route path='/game-quiz' element={<GameQuiz/>}></Route>
        </Routes>
      </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
