import classNames from 'classnames';

import './index.scss';

interface CardShadowProps {
	className?: string;
	children: React.ReactNode;
}

const CardShadow = ({ children, className }: CardShadowProps) => <div className={classNames('card-shadow', className)}>{children}</div>;

export default CardShadow;
