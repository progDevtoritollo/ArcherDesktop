import classNames from "classnames";

import "./index.scss";


interface BlockComponentProps {
  className?: string
  children: React.ReactNode
}

const Block = ({ children, className }: BlockComponentProps) => (
  <div className={classNames("block", className)}>{children}</div>
);

export default Block;
