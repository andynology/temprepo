import logo from './logo.svg';
import './App.css';
import UserProvider from './context/UserProvider/UserProvider';

function App() {
  return (
      <div className="App">
          <UserProvider />
      </div>
  );
}

export default App;
