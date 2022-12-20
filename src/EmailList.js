import React, { useEffect, useState } from 'react';
import './EmailList.css';
import { Checkbox, IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import RefreshIcon from '@mui/icons-material/Refresh';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardHideIcon from '@mui/icons-material/KeyboardHide';
import SettingsIcon from '@mui/icons-material/Settings';
import Section from './Section'
import InboxIcon from '@mui/icons-material/Inbox';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import PeopleIcon from '@mui/icons-material/People';
import EmailRow from './EmailRow';
import { db } from './firebase';
import RedoIcon from '@mui/icons-material/Redo';

function EmailList() {
	const [ emails, setEmails ] = useState([]);
	useEffect(() => {
		db.collection('emails').orderBy('timestamp', 'desc').onSnapshot((snapShot) =>
			setEmails(
				snapShot.docs.map((doc) => ({
					id: doc.id,
					data: doc.data()
				}))
			)
		);
	}, []);

	return (
		<div className="emailList">
			<div className="emailList_settings">
				<div className="emailList_settingsLeft">
					<Checkbox />
					<IconButton>
						<ArrowDropDownIcon />
					</IconButton>
					<IconButton>
						<RedoIcon />
					</IconButton>
					<IconButton>
						<MoreVertIcon />
					</IconButton>
				</div>
				<div className="emailList_settingsRight">
					<div className='icon1'>
						<IconButton>
							<ChevronLeftIcon />
						</IconButton>
						<IconButton>
							<ChevronRightIcon />
						</IconButton>
					</div>
					<div className='icons'>
						<div>
							<IconButton>
								<KeyboardHideIcon />
							</IconButton>
					
							<IconButton>
								<SettingsIcon />
							</IconButton>
						</div>
					</div>
				</div>
			</div>

			<div className="emailList_sections">
				<Section Icon={InboxIcon} title="Primary" color="red" selected />
				<Section Icon={PeopleIcon} title="Social" color="#1A73E8" />
				<Section Icon={LocalOfferIcon} title="Promotions" color="green" />
			</div>

			<div className="emailList_list">
				{emails.map(({ id, data:{to,subject,message,timestamp} }) => (
					<EmailRow
					id={id}
		  			key={id}
					title={to}
					subject={subject}
					description={message}
					time={new Date(timestamp?.seconds*1000).toDateString()}
					/>
				))} 

				
			</div>
		</div>
	);
}

export default EmailList;