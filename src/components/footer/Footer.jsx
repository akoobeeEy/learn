import { Component } from "react";
import "./Footer.scss";
import FooterTop from "./FooterTop";
import FooterMid from "./FooterMid";
import { Link } from "react-scroll";
import { backTop } from "../../assets";

export class Footer extends Component {
  render() {
    return (
      <footer
        className="py-8 bg-[rgba(0, 16, 61, 0.06)] mt-32 footer-container relative"
        id="контакты"
      >
        <div className="footer-pos" >
        <Link
        
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        to="home" className="cursor-pointer">
         <img src= {backTop} alt="" />
        </Link>
        </div>
        <div className="container mx-auto">
          <FooterTop />
          <FooterMid />
          <div className="mt-20">
            <p className="flex flex-col text-xs font-medium text-gray-400 md:text-sm">
              © 2022 Leangroup. All Rights Reserved.
              <span>Разработка и продвижение сайтов SkyWeb.by</span>
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
