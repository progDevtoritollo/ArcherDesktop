import { useSelector } from 'react-redux';
import { selectEventData } from 'entities/event/model/selectors';
import CardBlock from 'shared/ui/CardBlock';
import Event from 'entities/event/ui';

const UserActivity = () => {
	const { items } = useSelector(selectEventData);

	return (
		<div>
			<h1>UserActivity</h1>
			{items.map(({ id, userName, score, opponentScore, event, time, opponentName, userPhoto, competitionPlace }) => (
				<CardBlock key={id}>
					<Event
						key={id}
						userName={userName}
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
		</div>
	);
};

export default UserActivity;
