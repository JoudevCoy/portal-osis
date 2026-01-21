import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Fas from '@fortawesome/free-solid-svg-icons';
import osisBadgeImg from "./../assets/osis_badge.png";

import { gRoutes } from './../../lib/router.jsx';

import { Link, useNavigate } from "react-router-dom"

const Navbar = () => {

  return (
    <>
      <div className="navbar bg-white shadow-md top-0 left-0 z-[99]">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <i className="text-[1.5rem]">
                <FontAwesomeIcon icon={Fas.faBars} />
              </i>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 space-y-3 shadow">
              <li><Link to={gRoutes.ROOT} className="text-[1rem]">Beranda</Link></li>
              <li><Link className="text-[1rem]">Info OSIS</Link></li>
              <li><Link to={gRoutes.CALENDAR} className="text-[1rem]">Kalender Proker</Link></li>
              <li><Link className="text-[1rem]">Struktur Kepengurusan</Link></li>
              <li><Link className="text-[1rem]">Arsip</Link></li>
            </ul>
          </div>
          <img src={osisBadgeImg} className="block max-w-[6rem]" />
        </div>
        <div className="navbar-end pr-[1rem]">
          <Link to={gRoutes.PANEL} className="text-2xl">
            <FontAwesomeIcon icon={Fas.faGear} />
          </Link>
        </div>
      </div>
    </>
  )
}

export default Navbar;