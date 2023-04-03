import React, { useState } from 'react';

import './index.scss';

interface InputComponentProps {}

const ClickableCard: React.FC<InputComponentProps> = () => {
	return (
		<>
			<div className='card'>Click me</div>
		</>
	);
};

export default ClickableCard;
