import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';

import gold_trophy from 'app/assets/img/gold_trophy.png';
import bronze_trophy from 'app/assets/img/bronze_trophy.png';
import silver_trophy from 'app/assets/img/silver_trophy.png';
import './index.scss';

interface CardEventProps {
	name: string;
	event: string;
	time: string;
	userScore: number;
	opponentScore?: number;
	opponentName?: string;
	competitionPlace?: number;
	userPhoto?: string;
}

const CardEvent = ({ name, event, opponentScore = 0, time, userScore, opponentName, userPhoto, competitionPlace }: CardEventProps) => {
	switch (event) {
		case 'check':
			return (
				<div className='card'>
					<div className='left'>
						<div className='card__avatar'>
							<Avatar
								src={userPhoto}
								size='large'
								icon={<UserOutlined />}
							/>
						</div>

						<div className='text'>
							<div className='card__name'>{name}</div>
							<div className='card__description'>check</div>
						</div>
					</div>
					<div className='right'>
						<div className='card__check-score'>{userScore}/300</div>
						<div className='card__time'>{time}</div>
					</div>
				</div>
			);
		case 'duel':
			return (
				<div className='card'>
					<div className='left'>
						<div className='card__avatar'>
							<Avatar
								src={userPhoto}
								size='large'
								icon={<UserOutlined />}
							/>
						</div>
						<div className='text'>
							<div className='card__name'>{name}</div>
							<div className='card__description'>
								duel with
								{' ' + opponentName}
							</div>
						</div>
					</div>
					<div className='right'>
						{userScore <= opponentScore ? (
							<div className='card__duel-score card__duel-score_lose'>
								{userScore}:{opponentScore}
							</div>
						) : (
							<div className='card__duel-score card__duel-score_win'>
								{userScore}:{opponentScore}
							</div>
						)}
						<div className='card__time'>{time}</div>
					</div>
				</div>
			);
		case 'competition':
			return (
				<div className='card'>
					<div className='left'>
						<div className='card__avatar'>
							<Avatar
								src={userPhoto}
								size='large'
								icon={<UserOutlined />}
							/>
						</div>
						<div className='text'>
							<div className='card__name'>{name}</div>
							<div className='card__description'>{event}</div>
						</div>
					</div>

					<div className='right'>
						<div className='card__competition-place'>
							{competitionPlace === 1 ? (
								<img
									src={gold_trophy}
									alt='trophy'></img>
							) : competitionPlace === 2 ? (
								<img
									src={silver_trophy}
									alt='trophy'></img>
							) : competitionPlace === 3 ? (
								<img
									src={bronze_trophy}
									alt='trophy'></img>
							) : (
								<div className='number'>
									Place#
									{competitionPlace}
								</div>
							)}
						</div>
						<div className='card__time'>{time}</div>
					</div>
				</div>
			);
		default:
			return <div>error</div>;
	}

	//* competition

	// duel
	// return (
	// 	<div className="card">
	// 		<div className="card__name" >Игорь Марусич </div>
	// 		<div className="card__description" >competition</div>
	// 		<div className="card__info-box">gold cup</div>
	// 		<div className="card__time">3 min</div>
	// 	</div>
	// )

	//check
	// return (
	// 	<div className="card">
	// 		<div className="card__name" >Игорь Марусич </div>
	// 		<div className="card__description" >competition</div>
	// 		<div className="card__info-box">gold cup</div>
	// 		<div className="card__time">3 min</div>
	// 	</div>
	// )
};

export default CardEvent;
