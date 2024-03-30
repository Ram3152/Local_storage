
import './index.css';
import { Route,Routes } from 'react-router-dom';
import Header from './Header';
import Input from './Input';
import Display from './Display';
function App() {
  return (
  <>
     <Header/>
     <Routes>
      <Route path='/' Component={Input}/>
      <Route path='/display' Component={Display}/>
     </Routes>
  </>
  );
}

export default App;
