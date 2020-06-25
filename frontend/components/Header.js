import { useState } from "react";
import { APP_NAME } from "../config";
import { signout, isAuth } from "../actions/auth";
import Link from "next/link";
import Router from "next/router";
import Nprogress from "nprogress";
import Search from "../components/blog/Search";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import ".././node_modules/nprogress/nprogress.css";
import { DOMAIN } from "../config";

Router.onRouteChangeStart = (url) => Nprogress.start();

Router.onRouteChangeComplete = (url) => Nprogress.done();

Router.onRouteChangeError = (url) => Nprogress.donet();

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <React.Fragment>
      <nav className="navbar navbar-light navbar-expand-md navigation-clean-search">
        <div className="container">
          <a className="navbar-brand" href="/">
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
            <ul className="nav navbar-nav">
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
                <a className="nav-link" href="/">
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
            </ul>
            <Search />
          </div>
        </div>
      </nav>
      {/* <Navbar
        className="navbar navbar-expand-lg navigation-clean-search"
        light
        fixed='top'
        expand="md"
      >
        <Link href="/">
          <NavLink className="navbar-brand">
            <span style={{ cursor: "pointer" }}></span>
          </NavLink>
        </Link>

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <React.Fragment>
              <NavItem>
                <Search />
              </NavItem>
              <NavItem>
                <Link href="/">
                  <NavLink>
                    <span className="nav-item" style={{ cursor: "pointer" }}>
                      Home
                    </span>
                  </NavLink>
                </Link>
              </NavItem>
            </React.Fragment>
            <React.Fragment>
              <NavItem>
                <Link href="/blogs">
                  <NavLink>
                    <span className="nav-item" style={{ cursor: "pointer" }}>
                      Blog
                    </span>
                  </NavLink>
                </Link>
              </NavItem>
            </React.Fragment>
            <React.Fragment>
              <NavItem>
                <Link href="/">
                  <NavLink>
                    <span className="nav-item" style={{ cursor: "pointer" }}>
                      Products
                    </span>
                  </NavLink>
                </Link>
              </NavItem>
            </React.Fragment>
            <React.Fragment>
              <NavItem>
                <Link href="/">
                  <NavLink>
                    <span className="nav-item" style={{ cursor: "pointer" }}>
                      About Mari
                    </span>
                  </NavLink>
                </Link>
              </NavItem> */}
      {/* </React.Fragment> */}

      {/* {isAuth() && (
              <NavItem>
                <NavLink
                  className="nav-item"
                  style={{ cursor: "pointer" }}
                  onClick={() => signout(() => Router.replace(`/signin`))}
                >
                  Signout
                </NavLink>
              </NavItem>
            )}
          </Nav>
        </Collapse>
      </Navbar> */}
    </React.Fragment>
  );
};

export default Header;
