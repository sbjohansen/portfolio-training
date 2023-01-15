import MainLayout from './components/layout/mainLayout/MainLayout';
import { Routes, Route } from 'react-router-dom';
import Home from './components/views/Home';
import Contact from './components/views/Contact';
import Skills from './components/views/Skills';
import Experience from './components/views/Experience';

function App() {
  return (
    <div className='App'>
      <MainLayout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/experience' element={<Experience />} />
        </Routes>
      </MainLayout>
    </div>
  );
}

export default App;
