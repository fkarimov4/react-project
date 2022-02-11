import { useState } from 'react';
import HiddenContent from './HiddenContent';
import './App.css';

function App() {
  const [loginStatus, setLoginStatus] = useState(false)
  return (
    <div className="App">
      <header className="App-header">
        <h1>{ loginStatus ? 'Welcome back!' : 'Please login.'}</h1>
        
        {
          loginStatus 
            ? <button onClick={()=>setLoginStatus(false)}>Logout</button>
            : <button onClick={()=>setLoginStatus(true)}>Login</button>
        }
        
        {loginStatus && <HiddenContent />}
  
      </header>
    </div>
  );
}

export default App;