//NPM Packages
import { FC } from "react";

const Footer: FC = () => {
  //Const
  const links = [
    "FAQ",
    "Help Centre",
    "Terms of Use",
    "Privacy",
    "Cookie Preferences",
    "Corporate Information",
  ];
  //Components
  const Links = links.map((item, index) => (
    <li key={index}>
      <p>{item}</p>
    </li>
  ));

  return (
    <footer id="footer">
      <div className="container">
        <h3>Questions? Call 040-79 06 35</h3>
        <ul>{Links}</ul>
        <span>© 2021 • Clément Cardona</span>
      </div>
    </footer>
  );
};

export default Footer;
