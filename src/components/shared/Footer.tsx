//NPM Packages
import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer id="footer">
      <div className="container">
        <h3>Questions? Call 040-79 06 35</h3>
        <ul>
          <li>
            <p>FAQ</p>
          </li>
          <li>
            <p>Help Centre</p>
          </li>
          <li>
            <p>Terms of Use</p>
          </li>
          <li>
            <p>Privacy</p>
          </li>
          <li>
            <p>Cookie Preferences</p>
          </li>
          <li>
            <p>Corporate Information</p>
          </li>
        </ul>
        <span>© 2021 • Clément Cardona</span>
      </div>
    </footer>
  );
};

export default Footer;
