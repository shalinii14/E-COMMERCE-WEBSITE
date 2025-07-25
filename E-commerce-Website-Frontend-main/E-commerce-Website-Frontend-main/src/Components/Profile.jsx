import React, {useContext, useRef } from "react";
import { ThemeStore } from "./ThemeContext";
import { useSelector } from "react-redux";
import { updateUrl, baseUrl } from "../Utility/Constant";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../Store/UserSlice";


const Profile = () => {

  let dispatch = useDispatch()

  let {Theme} = useContext(ThemeStore);
  let userData = useSelector((Store)=> Store.user);

  let {userName, _id, email} = userData.user

  let updateUserName = useRef("");

  let handleUpdates = async ()=>{
    let updatedValue = updateUserName.current.value
    try{
      let res = await axios.patch(baseUrl+updateUrl, {userName:updatedValue}, {withCredentials: true})
      let data = res.data;

      if(data.result == true){
        dispatch(addUser(data.user))
      }
    }catch(err){
      console.log(err)
    }
  }


  return (
    <div className={Theme == 'light' ?  " min-h-screen bg-slate-100 text-slate-800 avatar placeholder flex items-center justify-center pt-8 flex-col" : 'min-h-screen bg-slate-800 text-slate-800 avatar placeholder flex items-center justify-center pt-8 flex-col'}>
      <label className="input input-bordered bg-slate-300 flex items-center justify-center pt-10 flex-col input-lg w-full max-w-sm">
        <p> UserID : {_id}</p> <br />
      </label>
      <br />
      <label className="input input-bordered bg-slate-300 flex items-center justify-center pt-10 flex-col input-lg w-full max-w-sm">
        <p> Email : {email} </p> <br />
      </label>
      <br />
      <label className="input input-bordered bg-slate-300 flex items-center justify-center pt-1 flex-col input-lg w-full max-w-sm">
        <p> userName : {userName} </p>
      </label>
      <br />
      {/* <button className="btn" onClick={()=>document.getElementById('my_modal_2').showModal()}>Update Username</button>
      <dialog id="my_modal_2" className="modal text-slate-200">
        <div className="modal-box">
          <div className="join">
            <input
              className="input input-bordered join-item"
              placeholder="userName"
            />
            <button
             onClick={handleUpdates}
              className="btn join-item rounded-r-full">
              update
            </button>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog> */}
    </div>
  );
};

export default Profile;
