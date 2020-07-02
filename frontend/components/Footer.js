import { CURRENT_YEAR, API, APP_NAME } from "../config";

let year = new Date();

const Footer = () => {
  return (
    <div className="footer-basic bg-dark">
      <footer>
        <div className="social text-white">
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
        <ul className="list-inline text-white">
          <li className="list-inline-item">
            <a href="/">Home</a>
          </li>

          <li className="list-inline-item">
            <a href="/about">About Mari</a>
          </li>
          <li className="list-inline-item">
            <a href="/blogs">Blogs</a>
          </li>
          <li className="list-inline-item">
            <a href="/privacy">Privacy Policy</a>
          </li>
        </ul>
        <p></p>
        <p className="copyright p-3">
          Disclaimer : For educational purposes only. This information has not
          been evaluated by the Food and Drug Administration. This information
          is not intended to diagnose, treat, cure, or prevent any disease.
          These publication are not intended as medical advice. Medical advice
          should always be obtained from a qualified medical professional for
          any health conditions or symptoms associated with them. Every possible
          effort has been made in preparing and researching this material. We
          make no gaurantees with respect to the accuracy, applicability of its
          contents or any omissions.
        </p>
        <p className="copyright">
          {APP_NAME}&copy; {year.getFullYear()} Created by{" "}
          <a href="https://stevenchavez.me">SCWebDev</a>
        </p>
      </footer>
    </div>
  );
};

export default Footer;
