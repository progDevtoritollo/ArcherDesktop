import { useQuery } from 'react-query';
import { useState } from 'react';
import { Divider } from 'antd';

import './index.scss';

interface MyFriendProps {
	myFriends: MyFriend[];
}

interface MyFriend {
	id: number;
	name: string;
	surname: string;
	clubName: string;
}

const UserMyFriend = ({ myFriends }: MyFriendProps) => {
	return (
		<div className='my-friends-list__container'>
			<Divider orientation='left'>My friends</Divider>
			{myFriends.length <= 0 ? (
				<div>Empty list </div>
			) : (
				<>
					{myFriends.map(({ id, name, clubName }: MyFriend) => (
						<div key={id}>{name}</div>
					))}
				</>
			)}
		</div>
	);
};

export default UserMyFriend;
