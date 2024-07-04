import { create } from 'zustand'
import { doc, getDoc } from "firebase/firestore";

import { db } from './firebase';
import { useUserStore } from './userStore';

export const useChatStore = create((set) => ({
 chatId:null,
 user:null,
 isCurrentUserBlocked:null,
 isReceiverBlocked:null,

 changeChat: (chatId,user)=>{
    const currentUser =useUserStore.getState().currentUser;

    //check if current user is blocked

    if(user.blocked.includes(currentUser.id)){
        return set({
            chatId,
            user:null,
            isCurrentUserBlocked:true,
            isReceiverBlocked:false,
        })
    }

     //check if receiver is blocked

    else if(currentUser.blocked.includes(user.id)){
        return set({
            chatId,
            user:user,
            isCurrentUserBlocked:false,
            isReceiverBlocked:true,
        })
    }

    else{

    return set({
        chatId,
        user:user,
        isCurrentUserBlocked:false,
        isReceiverBlocked:false,
    })
 }
   
},
   changeBlock : ()=>{
set((state)=>({...state,isReceiverBlocked: !state.isReceiverBlocked}))
   }


}))