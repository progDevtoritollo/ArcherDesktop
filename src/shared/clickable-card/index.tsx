import React from 'react';
import classNames from 'classnames';

import './index.scss';

interface InputComponentProps {
	className?: string;
	children: React.ReactNode;
}

const ClickableCard: React.FC<InputComponentProps> = ({ children, className }: InputComponentProps) => {
	return (
		<>
			<div className={classNames('clickable-card', className)}>{children}</div>
		</>
	);
};

export default ClickableCard;
