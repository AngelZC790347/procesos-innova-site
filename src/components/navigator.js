import React from 'react'
import { NavItem, Navbar, NavLink, Collapse, Nav } from 'reactstrap'
const NaviSite =()=>{
    return(
        <Navbar
        color="light"
        expand="md"
        full
        light
      >
        <Collapse navbar>
          <Nav
            className="me-auto"
            navbar
          >
            <NavItem>
              <NavLink href="/">
                Problema
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/effects">
                Efectos
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/solucion">
                Solucion
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
}
export default NaviSite;