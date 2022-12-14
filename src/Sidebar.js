import React from 'react';
import './Sidebar.css'
import { IconButton, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import InboxIcon from '@mui/icons-material/Inbox';
import SidebarOption from './SidebarOption';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SendIcon from '@mui/icons-material/Send';
import DraftsIcon from '@mui/icons-material/Drafts';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PersonIcon from '@mui/icons-material/Person';
import DuoIcon from '@mui/icons-material/Duo';
import PhoneIcon from '@mui/icons-material/Phone';
import { useDispatch } from 'react-redux';
import { openSendMessage } from './features/mailSlice'
import { useHistory } from 'react-router-dom' 


function Sidebar() {
    const dispatch = useDispatch(); 
    const history = useHistory();

    return (
        <div className='sidebar'>
            <div>
                <div className='compose_button'>
                    <Button 
                        startIcon={<EditIcon />}
                        className='sidebar__compose'
                        onClick={() => dispatch(openSendMessage())}
                    >
                            
                        Compose
                    </Button>
                </div>
            </div>
            <div className='pen'>
                <div>
                    <EditIcon fontSize='medium' onClick={() => dispatch(openSendMessage())}/>
                </div>
            </div>
            <div>
                <div className='sidebar_large' onClick={() => history.push('/')}>
                    <SidebarOption Icon={ InboxIcon } title='Inbox' number={63} selected={true} />
                    <SidebarOption Icon={ StarIcon } title='Starred' number={17}/>
                    <SidebarOption Icon={ AccessTimeIcon } title='Snoozed' number={9}/>
                    <SidebarOption Icon={ SendIcon } title='Sent' number={37}/>
                    <SidebarOption Icon={ DraftsIcon } title='Drafts' number={5}/>
                    <SidebarOption Icon={ ArrowDropDownIcon } title='More' />
                </div>
            </div>

            <div>
                <div className='sidebar_small' onClick={() => history.push('/')}>
                    <SidebarOption Icon={ InboxIcon } selected={true} onClick={() => history.push('/')}/>
                    <SidebarOption Icon={ StarIcon }/>
                    <SidebarOption Icon={ AccessTimeIcon }/>
                    <SidebarOption Icon={ SendIcon } />
                    <SidebarOption Icon={ DraftsIcon }/>
                    <SidebarOption Icon={ ArrowDropDownIcon }/>
                </div>
            </div>
            <div className='sidebar__footer'>
                <div className='sidebar__footerIcons'>
                    <IconButton>
                        <PersonIcon />
                    </IconButton>
                    <IconButton>
                        <DuoIcon />
                    </IconButton>
                    <IconButton>
                        <PhoneIcon />
                    </IconButton>
                </div>
            </div>
                
        </div>
    )
}

export default Sidebar; 