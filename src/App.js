import React, { useState, useEffect } from 'react';
import Pages from './pages';


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const getData = await fetch('https://gitconnected.com/v1/portfolio/at0082a')
    const data = await getData.json();
    setUser(data);
  };

  if (!user) {
    return (
      <div>
        <p>User not Founddd</p>
      </div>
    )
  }

  return (
    <div>
      <Pages user={user} />
    </div>
  )
}

export default App;
