import Chat from "./components/chat/Chat"
import List from "./components/list/List"
import Detail from "./components/detail/Detail"
import Notification from "./components/notification/Notification"
import Login from "./components/login/Login" 
import {auth} from './lib/firebase'
import {onAuthStateChanged} from "firebase/auth"
import { useEffect } from "react"
import { useUserStore } from "./lib/userStore"
import {useChatStore} from "./lib/chatStore"


const App = () => {

  // const user =false;

   const {currentUser,isLoading,fetchUserInfo} =useUserStore()
   const {chatId} =useChatStore()


  useEffect(()=>{
    const unSub=onAuthStateChanged(auth,(user)=>{
      fetchUserInfo(user?.uid);
    });

    return()=>{
      unSub();
    };
  },[fetchUserInfo]);

  console.log(currentUser)


  if(isLoading) return <div className="loading">Loading...</div>

  return (
    <div className='container'>
      {
        currentUser? (
          <>
          <List/>
          {chatId && <Chat />}
          {chatId && <Detail />}
         </>
        ):(
         <Login/>
      )
      }
      <Notification/>
    </div>
  );
};

export default App