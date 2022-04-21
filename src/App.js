import React, { useEffect, useState } from "react";
import { auth } from "./utils/firebase";
import Login from "./pages/Login";
import Mainpage from "./Mainpage";

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    const cleanUp = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setPending(false);
    });
    return () => cleanUp();
  }, []);

  if (pending) {
    return <>Loading...</>;
  }

  return currentUser ? <Mainpage /> : <Login />;
};

export default App;
