import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

import './index.scss';

interface ShotScoreProps {
	shotScore: number | null;
}

const ShotScore = ({ shotScore }: ShotScoreProps) => {
	const [color, setColor] = useState<string>('');
	useEffect(() => {
		switch (shotScore != null ? Math.round(shotScore) : null) {
			case 10:
			case 9:
				setColor('yellow-box');
				break;
			case 8:
			case 7:
				setColor('red-box');
				break;
			case 6:
			case 5:
				setColor('blue-box');
				break;
			case 4:
			case 3:
				setColor('black-box');
				break;
			case 2:
			case 1:
				setColor('white-box');
				break;
			case 0:
			case null:
				setColor('gray-box');
				break;
			default:
				setColor('what-box');
				break;
		}
	}, [shotScore]);

	return <div className={classNames('shot-box', color)}>{shotScore != null ? Math.round(shotScore) : <div>-</div>}</div>;

	// return <div className={'shot-box'}>{shotScore}</div>;
};

export default ShotScore;
