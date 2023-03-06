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

	const shotSeries = [];
	for (let i = 0; i < items.length; i += 3) {
		shotSeries.push(items.slice(i, i + 3));
	}

	return (
		<div className='round-table'>
			{items.length <= 0 ? (
				<div className='round-table__massage__empty-page'>Start notate shots</div>
			) : (
				<div className='round-table__titles'>
					<div className='title'>Series number</div>
					<div className='title'>Shots</div>
					<div className='title'>Series score</div>
				</div>
			)}
			<div className='round-table__series'>
				{shotSeries.map((series, i) => (
					<Serie
						key={i + 20}
						seriesNumber={i + 1}
						firstShot={series[0].score}
						secondShot={series[1]?.score}
						thirdShot={series[2]?.score}
						isDuel={false}
					/>
				))}
			</div>
		</div>
	);
};

export default RoundTable;
