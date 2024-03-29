import './App.css';
import Main from './components/dashboard/Main';
import NavBar from './components/navigation/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="bg-[#0B0B0B] w-screen h-screen overflow-scroll flex text-white">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<Main />} />
          <Route path="/contact" element={<Main />} />
          <Route path="/trade" element={<Main />} />
          <Route path="/history" element={<Main />} />
          <Route path="/wallet" element={<Main />} />
          <Route path="*" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


