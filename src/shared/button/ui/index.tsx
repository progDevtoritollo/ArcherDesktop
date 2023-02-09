import classNames from 'classnames';

import './index.scss';

interface ButtonComponentProps {
	// className?: string;
	text: string;
	type: string;
	paddingSide?: string;
	onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ text, type, onClick, paddingSide }: ButtonComponentProps) => {
	switch (type) {
		case 'blue':
			return (
				<div>
					<button
						className={classNames('button', type)}
						onClick={onClick}>
						{text}
					</button>
				</div>
			);
		case 'reject':
			return (
				<div>
					<button
						className={classNames('button', type)}
						onClick={onClick}>
						{text}
					</button>
				</div>
			);
		case 'usual':
			return (
				<div>
					<button
						// style={padding-left=50px}
						className={classNames('button', type)}
						onClick={onClick}
						style={{ paddingLeft: paddingSide, paddingRight: paddingSide }}>
						{text}
					</button>
				</div>
			);
		case 'undo':
			return (
				<div>
					<button
						className={classNames('button', type)}
						onClick={onClick}>
						{/* {text} <div className='line' /> */}
						{text}
						<div className='line'>
							<svg
								width='1'
								height='16'
								viewBox='0 0 1 16'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<line
									x1='0.25'
									y1='0.5'
									x2='0.25'
									y2='15.5'
									stroke='white'
									stroke-width='0.5'
								/>
							</svg>
						</div>
						<svg
							width='11'
							height='10'
							viewBox='0 0 11 10'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								fill-rule='evenodd'
								clip-rule='evenodd'
								d='M2.75 7.14307C1.99375 7.14307 1.375 7.78592 1.375 8.57164C1.375 9.35735 1.99375 10.0002 2.75 10.0002C3.50625 10.0002 4.125 9.35735 4.125 8.57164C4.125 7.78592 3.50625 7.14307 2.75 7.14307ZM7.5625 2.14286H2.34438L3.23125 1.22143C3.36187 1.09286 3.4375 0.914286 3.4375 0.714286C3.4375 0.321429 3.12812 0 2.75 0C2.5575 0 2.38562 0.0785714 2.26187 0.207143L0.199375 2.35C0.075625 2.47857 0 2.65714 0 2.85714C0 3.05714 0.075625 3.23571 0.199375 3.36429L2.26187 5.50714C2.38562 5.63571 2.5575 5.71429 2.75 5.71429C3.12812 5.71429 3.4375 5.39286 3.4375 5C3.4375 4.8 3.36188 4.62143 3.23813 4.49286L2.34438 3.57143H7.5625C8.70375 3.57143 9.625 4.52857 9.625 5.71429C9.625 6.9 8.70375 7.85714 7.5625 7.85714H4.8125V9.28571H7.5625C9.46 9.28571 11 7.68571 11 5.71429C11 3.74286 9.46 2.14286 7.5625 2.14286Z'
								fill='white'
							/>
						</svg>
					</button>
				</div>
			);
		case 'surrender':
			return (
				<div>
					<button
						className={classNames('button', type)}
						onClick={onClick}>
						{text}
					</button>
				</div>
			);
		default:
			return (
				<div>
					<button
						className={classNames('button', type)}
						onClick={onClick}>
						error
					</button>
				</div>
			);
	}
};

export default Button;
