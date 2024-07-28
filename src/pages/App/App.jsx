import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthPage from '../AuthPage/AuthPage';
import Notes from '../Notes/Notes';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar';
import { getUser } from '../../utilities/users-service';

// React router

export default function App() {
  const [user, setUser] = useState(getUser());
  
  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/notes" element={<Notes />} />
            <Route path="/orders" element={<OrderHistoryPage />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}