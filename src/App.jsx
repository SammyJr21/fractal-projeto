import './App.css';
import Navbar from './components/Navbar/Navbar';
import Routes from './routes';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <div className='Container'>
        <Routes />
      </div>
    </div>
  );
}

export default App;
