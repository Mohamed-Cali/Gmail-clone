import { Button } from '@material-ui/core';
import React from 'react';
import './SendMail.css';
import { useForm } from 'react-hook-form';
import { closeSendMessage } from './features/mailSlice';
import { useDispatch } from 'react-redux';
import { db } from './firebase';
import firebase from 'firebase';
import CloseIcon from '@mui/icons-material/Close';

function SendMail() {
    const dispatch=useDispatch();
    const {register, handleSubmit, watch, formState: { errors }  } = useForm();

    const onSubmit=(data)=>{
        console.log(data);
        db.collection("emails").add({
            to: data.to,
            subject: data.subject,
            message: data.message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
            
        })
        dispatch(closeSendMessage())
    };
   
    
 
    return (
        <div className="sendMail">
            <div className="sendMail__header">
                <h3>New Message</h3>
                <CloseIcon onClick={()=>dispatch(closeSendMessage())} className="sendMail__close" />
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name='to' placeholder="To" type="email" {...register('to', {required:true})} />
                {errors.to && <p className="sendMail__error">To is Required</p>}

                <input name='subject' type="text" placeholder="Subject" {...register('subject',{required:true})}/>
                {errors.subject && <p className="sendMail__error">Subject is Required</p>}

                <input name="message" type="text" placeholder="Message..." {...register('message',{required:true})} className="sendMail__message"/>
                {errors.message && <p className="sendMail__error">Message is Required</p>}

                <div className="sendMail__options"> 
                    <Button 
                        className="sendMail__send" 
                        type="submit"
                        variant='contained'
                        color='primary'
                    >
                        Send
                    </Button>
                </div>
            </form>
        </div>
    )
} 
export default SendMail;