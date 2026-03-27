import { useState } from 'react'
import Login from "./components/Login";
import Home from './pages/Home';



function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      {isLoggedIn ? (
        <Home onLogout={() =>
          setIsLoggedIn(false)} />
      ) : (
        <Login onLogin={() =>
          setIsLoggedIn(true)} />

      )}
    </div>
  );
}

export default App;
