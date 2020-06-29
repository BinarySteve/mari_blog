import { CURRENT_YEAR, API, APP_NAME } from "../config";

let year = new Date();

const Footer = () => {
  return (
    <div className="footer-basic">
      <footer>
        <div className="social">
          <a href="#">
            <i className="fab fa-instagram-square"></i>
          </a>
          <a href="#">
            <i className="fab fa-snapchat-square"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter-square"></i>
          </a>
          <a href="#">
            <i className="fab fa-facebook"></i>
          </a>
        </div>
        <ul className="list-inline">
          <li className="list-inline-item">
            <a href="/">Home</a>
          </li>

          <li className="list-inline-item">
            <a href="/">About Mari</a>
          </li>
          <li className="list-inline-item">
            <a href="/blogs">Blogs</a>
          </li>
          <li className="list-inline-item">
            <a href="/">Privacy Policy</a>
          </li>
        </ul>
        <p className="copyright">
          {APP_NAME}&copy; {year.getFullYear()} Created by <a href="https://stevenchavez.me">SCWebDev</a>
        </p>
      </footer>
    </div>
  );
};

export default Footer;
