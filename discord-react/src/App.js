//React components
import React from "react";
import { useSelector } from "react-redux";
//Project Components
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import Login from "./Login";
import { selectUser } from "./features/userSlice";
//CSS files
import "./App.css";
//Icons

function App() {
  const user = useSelector(selectUser);

  return (
    <div className="app">
      {user ? (
        <>
          {/**Sidebar Component */}
          <Sidebar />
          {/**Chat Component */}
          <Chat />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
