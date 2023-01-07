import classNames from "classnames";

import "./index.scss";


interface BlockComponentProps {
  className?: string
  children: React.ReactNode
}

const CardBlock = ({ children, className }: BlockComponentProps) => (
  <div className={classNames("block", className)}>{children}</div>
);

export default CardBlock;
