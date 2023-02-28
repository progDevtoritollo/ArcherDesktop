import { useState } from 'react';

import Event from 'entities/event/ui';
import Serie from 'shared/serie-row';
import { Link } from 'react-router-dom';
import Button from 'shared/button/ui';
import CardBlock from 'shared/ui/CardBlock';

const arrEvents = [
	{
		id: 3535,
		username: 'Игорь Марусич',
		score: 234,
		event: 'round',
		time: '3 min',
		userPhoto: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
	},
	{
		id: 45645,
		username: 'Игорь Марусич',
		score: 2,
		opponentScore: 5,
		event: 'duel',
		time: '12 min',
		opponentName: 'Loarense Aravisky',
		userPhoto: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
	},
	{
		id: 7675,
		username: 'Игорь Марусич',
		score: 234,
		event: 'competition',
		time: '1 hour',
		userPhoto: 'URLdfbsfbof',
		competitionPlace: 2,
	},
	{
		id: 3454,
		username: 'Игорь Марусич',
		score: 5,
		opponentScore: 4,
		event: 'duel',
		time: '2 hours',
		opponentName: 'Loarense Aravisky',
		userPhoto: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
	},
	{
		id: 4949,
		username: 'Игорь Марусич',
		score: 2,
		opponentScore: 4,
		event: 'duel',
		time: '1 week',
		opponentName: 'Loarense Aravisky',
		userPhoto: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
	},
	{
		id: 56457,
		username: 'Игорь Марусич',
		score: 289,
		event: 'competition',
		time: '1 week',
		userPhoto: 'URLdfbsfbof',
		competitionPlace: 1,
	},
];

const TestPage = () => {
	const handleClick = () => {
		alert('dummmmmm');
	};

	return (
		<div>
			<h1>Test Page</h1>
			<Serie
				isDuel={true}
				isOpponents={false}
				firstShot={9}
				secondShot={3}
				thirdShot={5}
			/>
			<br />
			<Serie
				isDuel={true}
				isOpponents={true}
				firstShot={10}
				secondShot={8}
				thirdShot={6}
			/>
			<br />

			<br />
			<Button
				onClick={handleClick}
				text='Change target'
				type={'blue'}
			/>
			<Button
				onClick={handleClick}
				text='Undo last'
				type={'undo'}
			/>
			<Button
				onClick={handleClick}
				text='Reject'
				type={'reject'}
			/>
			<Button
				paddingSide={'50px'}
				onClick={handleClick}
				text='Label'
				type={'usual'}
			/>
			<Button
				onClick={handleClick}
				text='Surrender'
				type={'surrender'}
			/>
			{arrEvents.map(({ id, username, score, opponentScore, event, time, opponentName, userPhoto, competitionPlace }) => (
				<CardBlock key={id}>
					<Event
						key={id}
						name={username}
						event={event}
						userScore={score}
						time={time}
						opponentScore={opponentScore}
						opponentName={opponentName}
						competitionPlace={competitionPlace}
						userPhoto={userPhoto}
					/>
				</CardBlock>
			))}
			<div>
				<Link to='/dashboard'>Dashboard</Link>
			</div>
		</div>
	);
};

export default TestPage;
