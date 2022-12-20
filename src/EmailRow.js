import React from 'react';
import './EmailRow.css';
import { Checkbox, IconButton } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import { useHistory } from 'react-router-dom' 
import { selectMail } from './features/mailSlice';
import { useDispatch } from 'react-redux';

function EmailRow ({ id, title, subject, description, time }) {
    const history = useHistory()
    const dispatch = useDispatch()
    
    const openMail = () => {
        dispatch(selectMail({
            id, 
            title, 
            subject, 
            description, 
            time,
        }))
        history.push('/mail')
    }
    return (
        <div onClick={openMail} className='emailRow'>
            <div className='checkbox'>
                <Checkbox />
            </div>
            <div className='emailRow__options'>
                
                <IconButton>
                    <StarBorderIcon />
                </IconButton>
                <IconButton>
                    <LabelImportantIcon />
                </IconButton>

            </div>

            <h3 className='emailRow__title'>{title}</h3>

            <div className='emailRow__message'>
                <h4>
                    {subject}{"     "}
                    <span className='emailRow__description'>
                     -{description}
                    </span>

                </h4>

            </div>

            <p className='emailRow__time'>{time}</p>

                           
        </div>
    )
}

export default EmailRow; 