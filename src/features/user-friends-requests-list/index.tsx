import { useQuery } from 'react-query';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Divider } from 'antd';

import './index.scss';

interface RequestsProps {
	friendRequests: Request[];
}

interface Request {
	id: number;
	name: string;
	surname: string;
	clubName: string;
}

const RequestFriendsList = ({ friendRequests }: RequestsProps) => {
	return (
		<div className='requests-list__container'>
			<Divider orientation='left'>Requests</Divider>
			{friendRequests.length <= 0 ? (
				<div>Empty list </div>
			) : (
				<>
					{friendRequests.map(({ id, name, clubName }: Request) => (
						<div key={id}>{name}</div>
					))}
				</>
			)}
		</div>
	);
};

export default RequestFriendsList;
