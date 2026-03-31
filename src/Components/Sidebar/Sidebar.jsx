/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, {useContext, useState} from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'
import { Context } from '../../Context/Context'

const Sidebar = () => {

       const[extended,SetExtended] = useState(false)
       const {onSent,prevPrompts,setRecentPrompt,newChat} = useContext(Context)

       const loadPrompt = async (prompt) => {
        setRecentPrompt(prompt)
        await onSent(prompt)
       }

    return (
        <div className='sidebar'>
            <div className="top">
                <img onClick={()=>SetExtended(prev=>!prev)} className='menu icons' src={assets.menu_icon} alt='' />
            <div onClick={()=>newChat()} className='new-chat'>
                <img onClick={()=>SetExtended(prev=>!prev)} className='plus-icon' src={assets.plus_icon} alt=''/>
                {extended?<p className='bottom-settings'>New Chat</p>:null}
            </div>
            {extended
            ?
            <div className="recent">
                <p className="recent-title">Recent</p>
                 {prevPrompts.map((item,index)=>{
                    return (
                     // eslint-disable-next-line react/jsx-key
                     <div onClick={()=>loadPrompt(item)} className="recent-entry">
                        <img  className='icons' src={assets.message_icon} alt=''/>
                        <p>{item.slice(0,18)}...</p>
                    </div>

                    )
                 })}
            </div>
            :null
        }
            </div>
            <div className="bottom">
               <div className="bottom-item recent-entry">
                <img onClick={()=>SetExtended(prev=>!prev)} className='icons' src={assets.question_icon} alt="" />
                {extended?<p className='bottom-settings1'>Help</p>:null}
               </div>
               <div className="bottom-item recent-entry">
                <img onClick={()=>SetExtended(prev=>!prev)} className='icons' src={assets.history_icon} alt="" />
                {extended?<p className='bottom-settings2'>Activity</p>:null}
               </div>
               <div className="bottom-item recent-entry">
                <img onClick={()=>SetExtended(prev=>!prev)} className='icons' src={assets.setting_icon} alt="" />
                {extended?<p className='bottom-settings3'>Settings</p>:null}
               </div>
            </div>
        </div>
    )
}

export default Sidebar