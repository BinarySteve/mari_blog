import { useState } from 'react';
import { APP_NAME } from '../config';
import {signout, isAuth} from '../actions/auth'
import Link from 'next/link'
import Router  from 'next/router';
import Nprogress from 'nprogress'
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
	NavbarText
} from 'reactstrap';
import '.././node_modules/nprogress/nprogress.css'
import {DOMAIN} from '../config'


Router.onRouteChangeStart = url => Nprogress.start()

Router.onRouteChangeComplete = url => Nprogress.done()

Router.onRouteChangeError = url => Nprogress.donet()

const Header = (props) => {
	const [ isOpen, setIsOpen ] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<div className="pb-5">
		<Navbar color="dark" fixed="top" dark expand="md">
		  <Link href="/">
			<NavLink className="font-weight-bold text-white" ><img src={DOMAIN + '/static/images/mari-logo.png'} alt="Testing" className="img img-fluid logo"/> <span className=" ml-3 logo-text lgr-text">Mari's Essential Living</span>	</NavLink>
		  </Link>
		  <NavbarToggler onClick={toggle} />
		  <Collapse isOpen={isOpen} navbar>
			<Nav className="ml-auto" navbar>
			 
				<React.Fragment>
				  <NavItem>
					<Link href="/blogs">
					  <NavLink><span className="logo-text text-white lgr-text">Blogs</span></NavLink>
					</Link>
				  </NavItem>
				 
				</React.Fragment>
			
  
			  {!isAuth() && (
				<React.Fragment>
				  <NavItem>
					<Link href="/">
					  <NavLink><span className="logo-text text-white lgr-text">Products</span></NavLink>
					</Link>
				  </NavItem>
				</React.Fragment>
			  )}
  
			  {isAuth() && isAuth().role === 0 && (
				<NavItem>
				  <Link href="/user">
					<NavLink>{`${isAuth().name}'s Dashboard`}</NavLink>
				  </Link>
				</NavItem>
			  )}
  
			  {isAuth() && isAuth().role === 1 && (
				<NavItem>
				  <Link href="/admin">
					<NavLink>{`${isAuth().name}'s Dashboard`}</NavLink>
				  </Link>
				</NavItem>
			  )}
  
			  {isAuth() && (
				<NavItem>
				  <NavLink style={{ cursor: 'pointer' }} onClick={() => signout(() => Router.replace(`/signin`))}>
					Signout
				  </NavLink>
				</NavItem>
			  )}
			</Nav>
		  </Collapse>
		</Navbar>
	  </div>
	);
};

export default Header;
