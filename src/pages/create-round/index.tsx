import { useMutation } from 'react-query';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import FullTarget from 'shared/Targets/FullTarget/FullTarget';
import TripleTarget from 'shared/Targets/TripleTarget/TripleTarget';

import WithShots from 'entities/shot-rendering-hoc/ui';
import RoundTable from 'features/round-table';

import contesBuilder from 'shared/api/contests/contest';
import { ContestRound } from 'shared/api/contests/models';

import './index.scss';

const TripleTargetShotWrapper = WithShots(TripleTarget);
const FullTargetShotWrapper = WithShots(FullTarget);

const RoundPage = () => {
	const [round, setRound] = useState({});

	const {
		isLoading: isLoadingRound,
		mutate: postRoundData,
		isError,
	} = useMutation<any, Error>(
		'create-round',
		async () => {
			return await contesBuilder.createContestRound(round);
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
			<Toaster />
			<h1>RoundPage</h1>
			<div className='round-page__target-container'>
				<TripleTargetShotWrapper
					setRound={setRound}
					postRoundContest={postRoundContest}
				/>
			</div>
			<div className='round-page__round__table'>
				<RoundTable />
			</div>
		</div>
	);
};

export default RoundPage;
