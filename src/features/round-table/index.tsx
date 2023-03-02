import { selectContestData } from 'entities/contest/model/selectors';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Serie from 'shared/serie-row';

import './index.scss';

interface SerieForRound {
	key: number;
	seriesNumber: number;
	firstShot: number | null;
	secondShot: number | null;
	thirdShot: number | null;
}

const RoundTable = () => {
	const { items } = useSelector(selectContestData);

	// const [series, setSeries] = useState<SerieForRound[]>([
	// 	{
	// 		key: 0,
	// 		seriesNumber: 0,
	// 		firstShot: null,
	// 		secondShot: null,
	// 		thirdShot: null,
	// 	},
	// 	{
	// 		key: 1,
	// 		seriesNumber: 1,
	// 		firstShot: null,
	// 		secondShot: null,
	// 		thirdShot: null,
	// 	},
	// 	{
	// 		key: 2,
	// 		seriesNumber: 2,
	// 		firstShot: null,
	// 		secondShot: null,
	// 		thirdShot: null,
	// 	},
	// 	{
	// 		key: 3,
	// 		seriesNumber: 3,
	// 		firstShot: null,
	// 		secondShot: null,
	// 		thirdShot: null,
	// 	},
	// 	{
	// 		key: 4,
	// 		seriesNumber: 4,
	// 		firstShot: null,
	// 		secondShot: null,
	// 		thirdShot: null,
	// 	},
	// 	{
	// 		key: 5,
	// 		seriesNumber: 5,
	// 		firstShot: null,
	// 		secondShot: null,
	// 		thirdShot: null,
	// 	},
	// 	{
	// 		key: 6,
	// 		seriesNumber: 6,
	// 		firstShot: null,
	// 		secondShot: null,
	// 		thirdShot: null,
	// 	},
	// 	{
	// 		key: 7,
	// 		seriesNumber: 7,
	// 		firstShot: null,
	// 		secondShot: null,
	// 		thirdShot: null,
	// 	},
	// 	{
	// 		key: 8,
	// 		seriesNumber: 8,
	// 		firstShot: null,
	// 		secondShot: null,
	// 		thirdShot: null,
	// 	},
	// 	{
	// 		key: 9,
	// 		seriesNumber: 9,
	// 		firstShot: null,
	// 		secondShot: null,
	// 		thirdShot: null,
	// 	},
	// ]);

	const [currentSeries, setCurrentSeries] = useState<SerieForRound>({
		key: -1,
		seriesNumber: -1,
		firstShot: null,
		secondShot: null,
		thirdShot: null,
	});

	useEffect(() => {
		// console.log('State - series', series);
		// console.log('Store - shots', items);

		items.map(({ score, shotNumber }) => {
			if (shotNumber % 3 === 0) {
				//third shot
				setCurrentSeries({
					...currentSeries,
					thirdShot: score,
				});
				// series[currentSeries.seriesNumber] = currentSeries;
				// setSeries(series);
			} else if (shotNumber % 3 === 2) {
				// second shot
				setCurrentSeries({
					...currentSeries,
					secondShot: score,
				});
				// series[currentSeries.seriesNumber] = currentSeries;
				// setSeries(series);
			} else if (shotNumber % 3 === 1) {
				// } else {

				// first shot
				setCurrentSeries({
					key: currentSeries.seriesNumber + 1,
					seriesNumber: currentSeries.seriesNumber + 1,
					firstShot: score,
					secondShot: null,
					thirdShot: null,
				});
				// series[currentSeries.seriesNumber] = currentSeries;
				// setSeries(series);
			}
			// console.log('index', index);
			// console.log('shotNumber', shotNumber);
			// console.log('score', score);
			// console.log(`shotNumber: ${shotNumber} % 3`, shotNumber % 3);
			// console.log(shotNumber % 3 === 1);
			// console.log('State - series', series);
		});
	}, [items]);

	return (
		<div className='round-table'>
			<div className='round-table__titles'>
				<div className='title'>Series number</div>
				<div className='title'>Shots</div>
				<div className='title'>Series score</div>
			</div>
			<div className='round-table__series'>
				<Serie
					key={currentSeries.key}
					seriesNumber={currentSeries.seriesNumber + 1}
					firstShot={currentSeries.firstShot}
					secondShot={currentSeries.secondShot}
					thirdShot={currentSeries.thirdShot}
					isDuel={false}
				/>
				<br />
				{/* {series.map(({ key, firstShot, secondShot, thirdShot }, index) => (
					<Serie
						key={key}
						seriesNumber={index + 1}
						firstShot={firstShot}
						secondShot={secondShot}
						thirdShot={thirdShot}
						isDuel={false}
					/>
				))} */}
			</div>
		</div>
	);
};

export default RoundTable;
