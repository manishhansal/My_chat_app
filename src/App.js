import './App.css';
import Navigation from './Components/Navigation';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Chat from './Pages/Chat';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { AppContext, socket } from './context/appContext';

function App() {
  const user = useSelector((state) => state.user);
  const [rooms, setRooms] = useState([]);
  const [currentRoom, setCurrentRoom] = useState([]);
  const [members, setMembers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [privateMemberMsg, setPrivateMemberMsg] = useState({});
  const [newMessages, setNewMessages] = useState({});
  return (
    <AppContext.Provider value={{socket, currentRoom, setCurrentRoom, members, setMembers, messages, setMessages, privateMemberMsg, setPrivateMemberMsg, newMessages, setNewMessages, rooms, setRooms}}>
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home/>} />
            {!user && (
              <>
                <Route path="/login" element={<Login/>} />
                <Route path="/signup" element={<Signup/>} />
              </>
            )}
            <Route path="/chat" element={<Chat/>} />
          </Routes>
        </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
