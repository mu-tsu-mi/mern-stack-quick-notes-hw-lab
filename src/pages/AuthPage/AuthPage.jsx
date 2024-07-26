import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from '../../components/LoginForm/LoginForm';
import { useState } from 'react';

export default function AuthPage({setUser}) {
  const [flip, setFlip] = useState(true)
  
  function handleFlipping() {
    setFlip(!flip)
  }

  return (
    <main>
      <h1>Welcome</h1>
      { flip ? 
        <div>
          <SignUpForm setUser={setUser} />
          <button onClick={handleFlipping}>Show Log-in</button>
        </div>
        :
        <div>
          <LoginForm setUser={setUser} />
          <button onClick={handleFlipping}>Show Sign-up</button>
        </div>
      }
    </main>
  );
}