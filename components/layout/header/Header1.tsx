import Link from "next/link";
import Image from "next/image";
import MobileMenu from "../MobileMenu";
import Menu from "../Menu";
import HeaderTop from "./HeaderTop";

// ✅ Define props type
type Header1Props = {
  scroll: boolean;
  handleMobileMenu: () => void;
  handlePopup: () => void;
};

export default function Header1({ scroll, handleMobileMenu, handlePopup }: Header1Props) {
  return (
    <>
      {/* main header */}
      <header className={`main-header ${scroll ? "fixed-header" : ""}`}>
        <HeaderTop/>
        <div className="header-lower">
            <div className="outer-box clearfix">
                <div className="menu-area pull-left">
                    <figure className="logo-box"><Link href="/"><Image src="/assets/images/logo.png" alt="Image" width={149} height={45} priority /></Link></figure>
                    <div className="mobile-nav-toggler" onClick={handleMobileMenu}>
                        <i className="icon-bar"></i>
                        <i className="icon-bar"></i>
                        <i className="icon-bar"></i>
                    </div>
                    <nav className="main-menu navbar-expand-md navbar-light">
                        <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                            <Menu/>
                        </div>
                    </nav>
                </div>
                <ul className="menu-right-content pull-right clearfix">
                    <li>
                        <div className="search-btn">
                            <button type="button" className="search-toggler" onClick={handlePopup}><i className="flaticon-loupe-1"></i></button>
                        </div>
                    </li>
                    <li>
                        <div className="language">
                            <div className="lang-btn">
                                <i className="icon flaticon-planet-earth"></i>
                                <span className="txt">EN</span>
                                <span className="arrow fa fa-angle-down"></span>
                            </div>
                            <div className="lang-dropdown">
                                <ul>
                                    <li><Link href="/">German</Link></li>
                                    <li><Link href="/">Italian</Link></li>
                                    <li><Link href="/">Chinese</Link></li>
                                    <li><Link href="/">Russian</Link></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li>
                        <Link href="/" className="theme-btn-one">Appointment</Link>
                    </li>
                </ul>
            </div>
        </div>

        {/* sticky header */}
        <div className={`sticky-header ${scroll ? "animated slideInDown" : ""}`}>
          <div className="outer-box clearfix">
                <div className="menu-area pull-left">
                    <figure className="logo-box"><a href="index.html"><Image src="/assets/images/small-logo.png" alt="Image" width={110} height={175} priority /></a></figure>
                    <nav className="main-menu clearfix">
                      <Menu/>
                    </nav>
                </div>
                <ul className="menu-right-content pull-right clearfix">
                    <li>
                        <div className="search-btn">
                            <button type="button" className="search-toggler" onClick={handlePopup}><i className="flaticon-loupe-1"></i></button>
                        </div>
                    </li>
                    <li>
                        <div className="language">
                            <div className="lang-btn">
                                <i className="icon flaticon-planet-earth"></i>
                                <span className="txt">EN</span>
                                <span className="arrow fa fa-angle-down"></span>
                            </div>
                            <div className="lang-dropdown">
                                <ul>
                                    <li><Link href="/">German</Link></li>
                                    <li><Link href="/">Italian</Link></li>
                                    <li><Link href="/">Chinese</Link></li>
                                    <li><Link href="/">Russian</Link></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li>
                        <Link href="/" className="theme-btn-one">Appointment</Link>
                    </li>
                </ul>
            </div>
        </div>

        {/* ✅ Fixed MobileMenu props */}
        <MobileMenu
          isSidebar={false}
          handleMobileMenu={handleMobileMenu}
        />
      </header>
    </>
  );
}
