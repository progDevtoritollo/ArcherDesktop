import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from 'antd';

import Bullet from 'app/assets/img/bullet.png';
import { addShot, delLastShot, clearContestList } from 'entities/contest/model/slice';
import { selectContestData } from 'entities/contest/model/selectors';

import './index.scss';
import Button from 'shared/button/ui';

const WithShots = Target => {
	const WithShots = ({ setShots, postRoundContest, setTotalScore, setDistance }) => {
		const { contestType, items } = useSelector(selectContestData);
		const dispatch = useDispatch();
		const [bullet, setBullet] = useState([]);

		const [isContestEnded, setContestEnded] = useState(false);
		// modal window &&  ContestScore
		const [isModalOpen, setIsModalOpen] = useState(false);
		const [ContestScore, setContestScore] = useState(0);

		const handleOk = () => {
			setBullet([]);
			dispatch(clearContestList());
			setIsModalOpen(false);
			setContestEnded(false);
			postRoundContest();
		};

		const handleCancel = () => {
			setIsModalOpen(false);
		};
		// modal window &&  ContestScore
		const handleButtonClickUndoLast = () => {
			let bulletWithoutLast = bullet.slice(0, -1);

			setBullet(bulletWithoutLast);
			dispatch(delLastShot());
			setContestEnded(false);
		};

		const handleButtonClickChangeTarget = () => {
			setBullet([]);
		};

		const handleButtonClickFinishContest = () => {
			// culc ContestScore
			let ShotsSum = 0;
			for (let i = 0; i < items.length; i++) {
				ShotsSum += items[i].score;
			}
			// setContestScore(Math.round(ShotsSum));
			setContestScore(ShotsSum);
			setTotalScore(ShotsSum);

			setIsModalOpen(true);

			// contest request
			setShots(items);
		};
		const handleButtonClickSurrender = () => {
			setBullet([]);
			dispatch(clearContestList());
		};

		const shotHandleClick = (e: any) => {
			let contestLengthOfShots = contestType == 'round' ? 30 : 5;

			if (items.length >= contestLengthOfShots) {
				setContestEnded(true);
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

		const handleSelectionDistance = event => {
			setDistance(event.target.value);
		};

		return (
			<div className='target'>
				<Modal
					title='Finished contest task'
					open={isModalOpen}
					onOk={handleOk}
					onCancel={handleCancel}>
					<p>Contest score: {ContestScore}</p>
					<p>distance add to request by custom selection</p>
					<label for='cars'>Choose a distance:</label>
					<select
						onChange={handleSelectionDistance}
						name='distance'
						id='distance'>
						<option value='18'>18</option>
						<option value='60'>60</option>
						<option value='70'>70</option>
						<option value='90'>90</option>
					</select>
					<p>Some contents info...</p>
				</Modal>
				<div
					className='target-with-WithShots-hoc'
					style={{ position: 'relative' }}>
					<Target shotEvent={shotHandleClick} />
					{bullet.map(value => {
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
					{isContestEnded ? (
						<Button
							paddingSide={'20px'}
							onClick={handleButtonClickFinishContest}
							text='Finish'
							type={'usual'}
						/>
					) : (
						<Button
							onClick={handleButtonClickSurrender}
							text='Surrender'
							type={'surrender'}
						/>
					)}

					<Button
						onClick={handleButtonClickChangeTarget}
						text='Clear target'
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
