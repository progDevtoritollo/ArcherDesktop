import Serie from 'shared/serie-row';
import { Link } from 'react-router-dom';
import Button from 'shared/button/ui';

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

			<div>
				<Link to='/dashboard'>Dashboard</Link>
			</div>
		</div>
	);
};

export default TestPage;
