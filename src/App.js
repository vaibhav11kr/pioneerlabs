import './App.css';
import Main from './components/dashboard/Main';
import NavBar from './components/navigation/NavBar';

function App() {
  return (
    <div className="bg-[#0B0B0B] w-screen h-screen overflow-scroll flex text-white">
      <NavBar />
      <Main />
    </div>
  );
}

export default App;
