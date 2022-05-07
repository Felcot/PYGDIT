import './App.css';
import { Register } from './components/register/Register';
import Login  from './components/login/Login';
import Client from './client';
const client = new Client();

function App() {
  return (
    <div className="App">
      <Register client={client}/>
      <Login client={client} />
    </div>
  );
}

export default App;
