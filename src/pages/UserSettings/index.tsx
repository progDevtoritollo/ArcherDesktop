import React from 'react';
import { Link } from 'react-router-dom';

import './index.scss';
import BowSettingsForm from 'features/BowSettingsForm';
import UserSettingsForm from 'features/UserSettingsForm';

const UserSettings: React.FC = () => {
	return (
		<div className='user-settings'>
			<h1>UserSettings</h1>
			<div className='user-settings__add-photo'>
				<div className='user-settings__add-photo--avatar'></div>
				<button className='user-settings__add-photo--upload-button'>Change profile image</button>
			</div>
			<div className='user-settings__user-form'>
				<UserSettingsForm />
			</div>
			<div className='user-settings__bow-form'>
				<BowSettingsForm />
			</div>

			<div>
				<Link to='/dashboard'>Dashboard</Link>
			</div>
		</div>
	);
};

export default UserSettings;
