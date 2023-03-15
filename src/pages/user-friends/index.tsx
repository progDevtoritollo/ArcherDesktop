import toast, { Toaster } from 'react-hot-toast';
import { useState } from 'react';
import './index.scss';
import RequestFriendsList from 'features/user-friends-requests-list';
import UserMyFriend from 'features/user-my-friends-list';
import RecommendedFriendsList from 'features/user-friends-recommended-list';

const UserFriendsPage = () => {
	const [list, setlist] = useState([
		{ id: 34535, name: 'Devid', surname: 'Navorscy', clubName: 'Dushca' },
		{ id: 67567, name: 'Devid', surname: 'Navorscy', clubName: 'Dushca' },
	]);

	return (
		<div className='user-friend-page'>
			<Toaster />
			<h1>UsersFriendsPage</h1>

			<div className='user-friend-page__requests-list'>
				<RequestFriendsList friendRequests={[]} />
			</div>
			<div className='user-friend-page__my-friends-list'>
				<UserMyFriend myFriends={list} />
			</div>
			<div className='user-friend-page__recommended-list'>
				<RecommendedFriendsList recommended={list} />
			</div>
		</div>
	);
};

export default UserFriendsPage;
