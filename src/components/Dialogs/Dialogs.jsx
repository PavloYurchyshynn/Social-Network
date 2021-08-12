import React from 'react'
import { Redirect } from 'react-router-dom'
import DialogItem from './DialogItem/DialogItem'
import s from './Dialogs.module.css'
import Message from './Message/Message'

const Dialogs = (props) => {

    let state = props.messagesPage;
    let dialogsElements = state.dialogsData.map(d => <DialogItem key={d.id} name={d.name} id={d.id} />)
    let messagesElements = state.messagesData.map(m => <Message key={m.id} message={m.message} />);
    let newMessageBody = state.newMessageBody;

    let addMessage = () => {
        props.sendMessage();
    }

    let newMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body)
    }
    
    return (
        <div className={s.dialogs}>
            <div className={s.dialog_items}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea value={newMessageBody} onChange={newMessageChange}></textarea>
                    </div>
                    <div>
                        <button onClick={addMessage}>Add message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs