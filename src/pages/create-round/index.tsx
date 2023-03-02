import FullTarget from 'shared/Targets/FullTarget/FullTarget';
import TripleTarget from 'shared/Targets/TripleTarget/TripleTarget';

import WithShots from 'entities/shot-rendering-hoc';
import RoundTable from 'features/round-table';

import './index.scss';

const TripleTargetShotWrapper = WithShots(TripleTarget);
const FullTargetShotWrapper = WithShots(FullTarget);

const RoundPage = () => {
	return (
		<div className='round-page'>
			<h1>RoundPage</h1>
			<div className='round-page__target-container'>
				<TripleTargetShotWrapper />
			</div>
			<div className='round-page__round__table'>
				<RoundTable />
			</div>
		</div>
	);
};

export default RoundPage;
