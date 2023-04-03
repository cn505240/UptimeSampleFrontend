import React, { useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Login from './components/Login';

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      {user ? <Dashboard user={user} /> : <Login setUser={setUser} />}
    </div>
  );
}

export default App;
