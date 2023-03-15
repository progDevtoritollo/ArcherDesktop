import toast, { Toaster } from 'react-hot-toast';

import './index.scss';
import RequestFriendsList from 'features/user-friends-requests-list';
import UserMyFriend from 'features/user-my-friends-list';
import RecommendedFriendsList from 'features/user-friends-recommended-list';

const UserFriendsPage = () => {
	return (
		<div className='user-friend-page'>
			<Toaster />
			<h1>UsersFriendsPage</h1>

			<div className='user-friend-page__requests-list'>
				<RequestFriendsList />
			</div>
			<div className='user-friend-page__my-friends-list'>
				<UserMyFriend />
			</div>
			<div className='user-friend-page__recommended-list'>
				<RecommendedFriendsList />
			</div>
		</div>
	);
};

export default UserFriendsPage;
