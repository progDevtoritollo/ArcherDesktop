import { useMutation } from 'react-query';
import { useState } from 'react';
import toast from 'react-hot-toast';

import FullTarget from 'shared/Targets/FullTarget/FullTarget';
import TripleTarget from 'shared/Targets/TripleTarget/TripleTarget';

import WithShots from 'entities/shot-rendering-hoc/ui';
import RoundTable from 'features/round-table';

import contesBuilder from 'shared/api/contests/contest';
import { ContestRound } from 'shared/api/contests/models';

import './index.scss';

const TripleTargetShotWrapper = WithShots(TripleTarget);
const FullTargetShotWrapper = WithShots(FullTarget);

const RoundPage: React.FC = () => {
	const [shots, setShots] = useState({});
	const [totalScore, setTotalScore] = useState(0);
	const [distance, setDistance] = useState('18');

	const { isLoading: isLoadingRound, mutate: postRoundData } = useMutation<any, Error>(
		'create-round',
		async () => {
			return await contesBuilder.createContestRound({ shots, totalScore, distance });
		},
		{
			onSuccess: res => {
				toast.success('Your round has saved');
			},
			onError: (err: any) => {
				toast.error('Error... something went wrong ');
			},
		},
	);

	const postRoundContest = () => {
		postRoundData();
		// сюда для отправки на сервер
	};

	return (
		<div className='round-page'>
			<h1 className='page-title'>RoundPage</h1>
			<div className='round-page__target-container'>
				<TripleTargetShotWrapper
					setShots={setShots}
					postRoundContest={postRoundContest}
					setTotalScore={setTotalScore}
					setDistance={setDistance}
				/>
			</div>
			<div className='round-page__round__table'>
				<RoundTable />
			</div>
		</div>
	);
};

export default RoundPage;
