//React components
import React from 'react';
//Project Components
import Sidebar from "./Sidebar";
import Chat from "./Chat";
//CSS files
import './App.css';
//Icons

function App() {
  return (
    <div className="app">
      {/**Sidebar Component */}
      <Sidebar />
      {/**Chat Component */}
      <Chat />
    </div>
  );
}

export default App;
