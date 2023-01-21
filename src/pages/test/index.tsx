import CardEvent from 'entities/eventCard/ui';
import { Link } from 'react-router-dom';
import CardBlock from 'shared/ui/CardBlock';

const arr = [
	{
		id: 3535,
		username: 'Игорь Марусич',
		score: 234,
		event: 'check',
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
	return (
		<div>
			<h1>Test Page</h1>

			{arr.map(({ id, username, score, opponentScore, event, time, opponentName, userPhoto, competitionPlace }) => (
				<CardBlock key={id.toString()}>
					<CardEvent
						key={id.toString()}
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
