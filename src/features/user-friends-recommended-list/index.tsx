import { Divider } from 'antd';

import './index.scss';
interface RecommendedFriendProps {
	recommended: RecommendedFriend[];
}

interface RecommendedFriend {
	id: number;
	name: string;
	surname: string;
	clubName: string;
}

const RecommendedFriendsList = ({ recommended }: RecommendedFriendProps) => {
	return (
		<div className='recommended-list__container'>
			<Divider orientation='left'>Recommended</Divider>
			{recommended.length <= 0 ? (
				<div>Empty list</div>
			) : (
				<>
					{recommended.map(({ id, name, clubName }: RecommendedFriend) => (
						<div key={id}>{name}</div>
					))}
				</>
			)}
		</div>
	);
};

export default RecommendedFriendsList;
