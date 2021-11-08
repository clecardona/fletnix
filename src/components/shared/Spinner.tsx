//NPM Packages
import { FC } from "react";

const Spinner: FC = () => {
  return (
    <div className="spinner-container">
      <div className="spinner">
        <div className="bar1" />
        <div className="bar2" />
        <div className="bar3" />
      </div>
    </div>
  );
};
export default Spinner;
