
import { useState } from 'react';
import { Dashboard } from './pages/dashboard';
import { Mainpage } from './pages/mainpage';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

function App() {
  const [nav,setnav] = useState(window.location.href)
  console.log(nav)
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Mainpage/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
        
      </BrowserRouter>
    </>
  );
}
export default App;