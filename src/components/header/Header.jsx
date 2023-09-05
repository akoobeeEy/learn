import React, { Component } from "react";
import "./Header.scss";
import { logo } from "../../assets";
import { navLinksData } from "../../data/nav";
import { Link } from "react-scroll";
export class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="container mx-auto">
          <nav className="grid items-center grid-cols-12">
            <div className="col-span-2">
            <a href="#logo" className="logo">
                <img src={logo} alt="" />
            </a>
            </div>
            <div className="col-span-8 ">
                <ul className="hidden nav-list lg:flex lg:justify-between">
                {navLinksData.map((item) => (
          <li
            className="duration-300 cursor-pointer nav-item"
            key={item.id}
          >
            <Link className="nav-link"
            activeClass="active"
            to={item.link}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            >
            {item.title}
            </Link>
          </li>
        ))}
                </ul>
            </div>
            <div className="col-span-2 ms-auto">
              <ul className="flex gap-1">
                <li className="nav-item">
                  <Link className="cursor-pointer nav-link">
                    Ru
                  </Link>
                </li>
                <div className="border-[1px] border-gray-300"></div>
                <li className="nav-item">
                  <Link className="cursor-pointer nav-link">
                      En
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
