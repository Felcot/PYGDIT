import './App.css';
import { Register } from './components/register/Register';
import Login  from './components/login/Login';
import Client from './client';
import Camera from './components/camera/Camera';

const client = new Client();
//      <Register client={client}/>
function App() {
  return (
    <div className="App">
      <Login client={client} />
      <Camera/>
    </div>
  );
}

export default App;
