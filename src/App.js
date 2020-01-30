import React, { useState, useEffect } from 'react';
import Pages from './components/Pages';
import './App.css';

function App() {
  const [user, setData] = useState(null);

  useEffect(() => {
    fetch('https://gitconnected.com/v1/portfolio/treyhuffine')
      .then(res => res.json())
      .then(res => setData(res));
  }, []);

  if(!user) {
    return (
      <div> 
        User not Found 
      </div>
    )
  }

  return (
    <div className="App">
      <Pages user={user} />
    </div>
  );
}

export default App;
