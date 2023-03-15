import { useQuery } from 'react-query';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Divider } from 'antd';

import './index.scss';

const RequestFriendsList = () => {
	const [friendRequests, setFriendRequests] = useState([]);

	return (
		<div className='requests-list__container'>
			<Divider orientation='left'>Requests</Divider>
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
	);
};

export default RequestFriendsList;
