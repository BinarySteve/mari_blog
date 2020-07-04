
import { APP_NAME } from "../config";
import { signout, isAuth } from "../actions/auth";
import Router from "next/router";
import Nprogress from "nprogress";
import Search from "../components/blog/Search";
import ".././node_modules/nprogress/nprogress.css";

Router.onRouteChangeStart = (url) => Nprogress.start();

Router.onRouteChangeComplete = (url) => Nprogress.done();

Router.onRouteChangeError = (url) => Nprogress.donet();

const Header = () => {
 

  return (
    <React.Fragment>
      <nav className="navbar navbar-dark bg-dark border-bottom shadow navbar-expand-md navigation-clean-search">
        <div className="container-fluid ">
          <a className="navbar-brand cfont" href="/">
            {APP_NAME}
          </a>
          <button
            data-toggle="collapse"
            data-target="#navcol-1"
            className="navbar-toggler"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navcol-1">
            <ul className="nav navbar-nav ">
              <li role="presentation" className="nav-item">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li role="presentation" className="nav-item">
                <a className="nav-link" href="/blogs">
                  Blogs
                </a>
              </li>
              <li role="presentation" className="nav-item">
                <a className="nav-link" href="/about">
                  About Mari
                </a>
              </li>
              {isAuth() && isAuth().role === 1 && (
                <li role="presentation" className="nav-item">
                  <a className="nav-link" href="/admin">{`${
                    isAuth().name
                  }'s Dashboard`}</a>
                </li>
              )}
              {isAuth() && isAuth().role === 1 && (
                <li>
                  <a
                    className="nav-link"
                    style={{ cursor: "pointer" }}
                    onClick={() => signout(() => Router.replace(`/signin`))}
                  >
                    Signout
                  </a>
                </li>
              )}
            </ul>
            <Search />
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Header;
