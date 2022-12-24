import classNames from "classnames";

import "./index.scss";

const Block = ({ children, className }) => (
  <div className={classNames("block", className)}>{children}</div>
);

export default Block;
