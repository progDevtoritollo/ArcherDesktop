
import CardEvent from "entities/ui/eventCard";
import { Link } from "react-router-dom"
import CardBlock from "shared/ui/CardBlock";

const arr = [{
	id: 3535,
	username: "Игорь Марусич",
	score: 234,
	event: "check",
	time: "3 min",
	userPhoto: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
}, {
	id: 45645,
	username: "Игорь Марусич",
	score: 2,
	opponentScore: 5,
	event: "duel",
	time: "12 min",
	opponentName: "Loarense Aravisky",
	userPhoto: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
}, {

	id: 7675,
	username: "Игорь Марусич",
	score: 234,
	event: "competition",
	time: "1 hour",
	userPhoto: "URLdfbsfbof",
	competitionPlace: 2
}]


const TestPage = () => {
	return <div>
		<h1>Test Page</h1>

		{arr.map(({ id, username, score, opponentScore, event, time, opponentName, userPhoto, competitionPlace }) =>
			<CardBlock key={id.toString()}>
				<CardEvent key={id.toString()} name={username} event={event}
					userScore={score} time={time} opponentScore={opponentScore} opponentName={opponentName} competitionPlace={competitionPlace} userPhoto={userPhoto} />
			</CardBlock>
		)}
		<div>
			<Link to="/dashboard">Dashboard</Link>
		</div>
	</div >;
};

export default TestPage;