import { useQuery } from 'react-query';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Divider } from 'antd';

import './index.scss';

const RecommendedFriendsList = () => {
	const [recommended, setRecommended] = useState([]);

	return (
		<div className='recommended-list__container'>
			<Divider orientation='left'>Recommended</Divider>
			{recommended.length <= 0 ? (
				<div>Empty list</div>
			) : (
				<>
					{recommended.map(friend => (
						<div key={friend}>{friend}</div>
					))}
				</>
			)}
		</div>
	);
};

export default RecommendedFriendsList;
