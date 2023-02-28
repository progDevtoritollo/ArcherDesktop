import FullTarget from 'shared/Targets/FullTarget/FullTarget';
import TripleTarget from 'shared/Targets/TripleTarget/TripleTarget';

import WithShots from 'entities/shot-rendering-hoc';

const TripleTargetShotWrapper = WithShots(TripleTarget);
const FullTargetShotWrapper = WithShots(FullTarget);

const RoundPage = () => {
	return (
		<div>
			<h1>RoundPage</h1>
			<div className='target__container'>
				<TripleTargetShotWrapper />
			</div>
		</div>
	);
};

export default RoundPage;
