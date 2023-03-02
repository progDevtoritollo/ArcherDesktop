import { useState } from 'react';
import { useDispatch } from 'react-redux';

import Bullet from 'app/assets/img/bullet.png';

import './index.scss';
import { addShot } from 'entities/contest/model/slice';

const WithShots = Target => {
	const WithShots = props => {
		const dispatch = useDispatch();
		const [bullet, setBullet] = useState([]);
		// const [bullet, setBullet] = useState([{ shotNumber: 0, x: -10, y: -10, score: 0 }]);

		const shotHandleClick = (e: any) => {
			let item = {
				shotNumber: bullet.length + 1,
				x: e.nativeEvent.offsetX - 5,
				y: e.nativeEvent.offsetY - 5,
				score: +e.target.getAttribute('id'),
			};
			setBullet([...bullet, item]);
			dispatch(addShot(item));
		};

		return (
			<div>
				<div
					className='target-with-WithShots-hoc'
					style={{ position: 'relative' }}>
					<Target shotEvent={shotHandleClick} />
					{bullet.map(value => {
						{
							/* console.log(bullet.length, value); */
						}

						return (
							<img
								key={value.shotNumber}
								style={{ position: 'absolute', left: value.x, top: value.y }}
								src={Bullet}
								width={7}
								alt='bullet'
							/>
						);
					})}
				</div>
			</div>
		);
	};
	return WithShots;
};

export default WithShots;
