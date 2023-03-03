import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Bullet from 'app/assets/img/bullet.png';
import { addShot, delLastShot } from 'entities/contest/model/slice';
import { selectContestData } from 'entities/contest/model/selectors';

import './index.scss';
import Button from 'shared/button/ui';

const WithShots = Target => {
	const WithShots = props => {
		const { contestType, items } = useSelector(selectContestData);
		const dispatch = useDispatch();
		const [bullet, setBullet] = useState([]);
		// const [bullet, setBullet] = useState([{ shotNumber: 0, x: -10, y: -10, score: 0 }]);
		const handleButtonClickUndoLast = () => {
			// console.log('before del', bullet);

			let bulletWithoutLast = bullet.slice(0, -1);

			setBullet(bulletWithoutLast);
			dispatch(delLastShot());
			// console.log('after del', bullet);
		};

		const handleButtonClickChangeTarget = () => {
			setBullet([]);
		};

		const shotHandleClick = (e: any) => {
			let contestLengthOfShots = contestType == 'round' ? 30 : 5;
			if (bullet.length == contestLengthOfShots) {
				console.log(items);
				alert('you already set all shots st this contest type');
				return 0;
			}
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
			<div className='target'>
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
				<div className='target__bottom-interaction'>
					<Button
						onClick={handleButtonClickChangeTarget}
						text='Change target'
						type={'blue'}
					/>
					<Button
						onClick={handleButtonClickUndoLast}
						text='Undo last'
						type={'undo'}
					/>
				</div>
			</div>
		);
	};
	return WithShots;
};

export default WithShots;
