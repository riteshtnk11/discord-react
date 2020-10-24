//React components
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//Project Components
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import Login from "./Login";
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";
//CSS files
import "./App.css";
//Icons

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("user is", authUser);
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
        console.log(dispatch)
      } else {
        dispatch(logout());
      }
    });
  },[dispatch]);


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
