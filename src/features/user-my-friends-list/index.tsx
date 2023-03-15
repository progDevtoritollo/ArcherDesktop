import { useQuery } from 'react-query';
import { useState } from 'react';
import { Divider } from 'antd';

import './index.scss';

const UserMyFriend = () => {
	const [myFriends, setMyFrinds] = useState([]);

	return (
		<div className='my-friends-list__container'>
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
	);
};

export default UserMyFriend;
