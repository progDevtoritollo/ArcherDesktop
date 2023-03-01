import React, { useState, useEffect } from 'react';

import SerieInfoSection from 'shared/serie-info-section';
import ShotScore from 'shared/shot-score-box';

import './index.scss';

interface SerieProp {
	isDuel?: boolean;
	seriesNumber?: number;
	firstShot?: number | null;
	secondShot?: number | null;
	thirdShot?: number | null;
	Set_pts?: number;
	isOpponents?: boolean;
}

const Serie = ({ isDuel = true, seriesNumber = 1, firstShot = 0, secondShot = 0, thirdShot = 0, Set_pts = 0, isOpponents = false }: SerieProp) => {
	const [seriesScore, setSeriesScore] = useState(0);

	useEffect(() => {
		if (firstShot != null && secondShot != null && thirdShot != null) {
			let sum = firstShot + secondShot + thirdShot;
			setSeriesScore(sum);
		}
	}, [firstShot, secondShot, thirdShot]);

	return (
		<div className='serie'>
			{isOpponents ? <div className='whose'>Opponent</div> : isDuel ? <div className='whose you'>You</div> : null}

			<div className='serie__series-number'>
				{/* {seriesNumber <= 1 ? <div className='title'>Series number</div> : null} */}

				<SerieInfoSection InfoNumber={seriesNumber} />
			</div>
			<div className='serie__shots-section'>
				{/* {seriesNumber <= 1 && !isOpponents ? <div className='title'>Shots</div> : null} */}

				<div className='shots-section__shots-container'>
					<ShotScore shotScore={firstShot} />
					<ShotScore shotScore={secondShot} />
					<ShotScore shotScore={thirdShot} />
				</div>
			</div>
			<div className='serie__series-score'>
				{/* {seriesNumber <= 1 ? <div className='title'>Series score</div> : null} */}

				<SerieInfoSection InfoNumber={seriesScore} />
			</div>
			{isDuel ? (
				<div className='serie__set-pts'>
					{/* <div className='title'>Set pts</div> */}
					<SerieInfoSection InfoNumber={Set_pts} />
				</div>
			) : null}
		</div>
	);
};

export default Serie;
