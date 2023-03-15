import { useQuery } from 'react-query';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Divider } from 'antd';

import './index.scss';

const UserFriendsPage = () => {
	const [friendRequests, setFriendRequests] = useState([]);
	const [myFriends, setMyFrinds] = useState([]);
	const [recommended, setRecommended] = useState([]);

	return (
		<div className='user-friend-page'>
			<Toaster />
			<h1>UsersFriendsPage</h1>
			{/* Header component
				SearchInput 
				//? Button do i need it 
				
				One page 

				three sections with map of 
				- requests 
				- my friend 
				- recommended 


			*/}
			<div className='user-friend-page__content'>
				<div className='user-friend-page__requests-list'>
					<Divider orientation='left'>My friends</Divider>
					{friendRequests.length <= 0 ? (
						<div>Empty list </div>
					) : (
						<>
							{friendRequests.map(friend => (
								<div key={friend}>{friend}</div>
							))}
						</>
					)}
				</div>
				<div className='user-friend-page__my-friends-list'>
					<Divider orientation='left'>My friends</Divider>
					{myFriends.length <= 0 ? (
						<div>Empty list </div>
					) : (
						<>
							{myFriends.map(friend => (
								<div key={friend}>{friend}</div>
							))}
						</>
					)}
				</div>

				<div className='user-friend-page__recommended-list'>
					<Divider orientation='left'>Recommended</Divider>
					{recommended.length <= 0 ? (
						<div>Empty list </div>
					) : (
						<>
							{recommended.map(friend => (
								<div key={friend}>{friend}</div>
							))}
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default UserFriendsPage;
