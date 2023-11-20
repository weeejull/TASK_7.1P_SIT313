// app.js
import React from 'react';
import Login from './Login';
import { auth } from './firebase'; // Import the 'auth' object

function App() {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // User is logged in
        setUser(authUser);
      } else {
        // User is logged out
        setUser(null);
      }
    });

    return () => {
      // Clean up the subscription when the component unmounts
      unsubscribe();
    };
  }, []);

  return (
    <div>
      <h1>{user ? `Hello, ${user.email}` : 'Welcome! Please log in.'}</h1>
      <Login />
    </div>
  );
}

export default App;
