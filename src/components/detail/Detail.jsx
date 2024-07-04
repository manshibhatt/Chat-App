import "./detail.css";
import { auth } from "../../lib/firebase";
import { useChatStore } from "../../lib/chatStore";
import { useUserStore } from "../../lib/userStore";
import {doc,onSnapshot,updateDoc,arrayUnion,getDoc,arrayRemove} from "firebase/firestore";
import { db } from "../../lib/firebase";

const Detail = () => { 
  const {chatId,user,isCurrentUserBlocked,isReceiverBlocked,changeBlock}= useChatStore();
  const {currentUser}=useUserStore();

  const handleBlock=async()=>{
    if(!user) return;

    const userDocRef=doc(db,"users",currentUser.id)

    try{
      await updateDoc(userDocRef,{
        blocked:isReceiverBlocked?arrayRemove(user.id) :arrayUnion(user.id),
      });
      changeBlock()

    }catch(err) {
      console.log(err);
    }
  };
  return (
    <div className="detail">
      <div className="user">
        <img src={user?.avatar||"./avatar.png"} alt=""/>
      
        <h2>{user?.username}</h2>
        <p>hey!i m using whatsapp</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>

        <div className="option">
          <div className="title">
            <span>Privacy</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>

        <div className="option">
          <div className="title">
            <span>Shared Photos</span>
            <img src="./arrowDown.png" alt="" />
          </div>

          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
                <img src="./flower2.jpg" alt="" />
                <span>photo.png</span>
              </div>
              <img src="./download.png" alt="" className="icon" />
            </div>
          </div>
        </div>

        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrowDown.png" alt="" />
          </div>
        </div> 
        <button onClick={handleBlock}>
          {isCurrentUserBlocked?"You are blocked!": isReceiverBlocked?"User blocked":"Block user"}
          </button>
        <button className="logout" onClick={()=>auth.signOut()}>Logout</button>
      </div>
    </div>
  );
};
export default Detail;
