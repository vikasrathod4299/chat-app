import './App.css';
import React from 'react';
import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
import "firebase/compat/auth"
import {useAuthState} from "react-firebase-hooks/auth"
import { Header } from './component/Header/Header';
import { useState } from 'react';
import { ChatRoom } from './component/Chatroom/ChatRoom';
import { SignIn } from './component/SignIn/SignIn';


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
  const [roomId, setRoomId] = useState('')
  const pull_data = (data) =>{
    setRoomId(data)
  }


  return (
    <div className="App">

      <Header func={pull_data} auth={auth} firestore={firestore}/>

      {user ? <ChatRoom roomId={roomId} auth = {auth} firebase={firebase} messageRef={messageRef}/> : <SignIn auth = {auth} firebase = {firebase} />}
    </div>
  );
}

export default App;
