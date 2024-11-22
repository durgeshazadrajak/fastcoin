"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button
} from 'reactstrap';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="" fixed='top' light expand="md" className='front-header'>
      <NavbarBrand href="/">
        <img src="/img/logo.png" alt="" height="70" />
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ms-auto" navbar>
          <NavItem>
            <Link href="/" passHref><NavLink >Home</NavLink></Link>
          </NavItem>
          <NavItem>
            <Link href="/" passHref><NavLink >About</NavLink></Link>
          </NavItem>
          <NavItem>
            <Link href="/usecase" passHref><NavLink >Usecase</NavLink></Link>
          </NavItem>
          <NavItem>
            <Link href="/" passHref><NavLink >Overview</NavLink></Link>
          </NavItem>
          <NavItem>
            <Link href="/loginpage" passHref><NavLink>Dashboard</NavLink></Link>
          </NavItem>
        </Nav>
        <Button color="light" size="" className="rounded-5 px-4 py-1 ms-auto">
          Buy Token
        </Button>        
        <Link href="/dashboard" className="rounded-5 btn btn-warning px-4 py-1 ms-2">
          Connect Wallet
        </Link>        
      </Collapse>
    </Navbar>
  );
}

export default Header;
