import './App.css';
import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
import "firebase/compat/auth"
import {useAuthState} from "react-firebase-hooks/auth"


firebase.initializeApp({
  apiKey: "AIzaSyDyu43tHCk6GRW1cL3OHhHk_bat0OMaA8Y",
  authDomain: "chat-app-e5954.firebaseapp.com",
  projectId: "chat-app-e5954",
  storageBucket: "chat-app-e5954.appspot.com",
  messagingSenderId: "769554908925",
  appId: "1:769554908925:web:26f8080b64d8812f632094"
})


const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {

  const messageRef = firestore.collection('massages')
  const [user] =useAuthState(auth)

  return (
    <div className="App">
      <header className="App-header">

      </header>
    </div>
  );
}

export default App;
