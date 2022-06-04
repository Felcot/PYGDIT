import './App.css';
import { Register } from './components/register/Register';
import Login  from './components/login/Login';
import client from './client';
import Camera from './components/camera/Camera';


//      <Register client={client}/>
function App() {
  return (
    <div className="App">
      <Login client={client} />
    </div>
  );
}

export default App;
