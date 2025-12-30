
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

type MobileMenuProps = {
  isSidebar: boolean;
  handleMobileMenu: () => void;
};

export default function MobileMenu({ handleMobileMenu }: MobileMenuProps) {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  const toggleDropdown = (key: number) => {
    if (activeDropdown === key) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(key);
    }
  };

  return (
    <>
      {/* Mobile Menu */}
      <div className="mobile-menu">
        <div className="menu-backdrop" onClick={handleMobileMenu} />
        <div className="close-btn" onClick={handleMobileMenu}>
          <span className="fas fa-times" />
        </div>
        <nav className="menu-box">
          <div className="nav-logo">
            <Link href="/"><Image src="/assets/images/logo.png" alt="Logo Image" width={161} height={44} priority /></Link>
          </div>
          <div className="menu-outer">
            <ul className="navigation clearfix">

              {/* Home */}
              <li className={`dropdown ${activeDropdown === 1 ? "current" : ""}`}>
                <Link href="/#">Home</Link>
                <ul style={{ display: activeDropdown === 1 ? "block" : "none" }}>
                  <li><Link href="/" onClick={handleMobileMenu}>Home Page 01</Link></li>
                  <li><Link href="/index-2" onClick={handleMobileMenu}>Home Page 02</Link></li>
                  <li><Link href="/index-3" onClick={handleMobileMenu}>Home Page 03</Link></li>
                  <li><Link href="/index-onepage" onClick={handleMobileMenu}>OnePage Home</Link></li>
                </ul>
                <div className={`dropdown-btn ${activeDropdown === 1 ? "open" : ""}`} onClick={() => toggleDropdown(1)}>
                  <span className="fa fa-angle-right" />
                </div>
              </li>

              {/* About */}
              <li className={`dropdown ${activeDropdown === 2 ? "current" : ""}`}>
                <Link href="/#">About</Link>
                <ul style={{ display: activeDropdown === 2 ? "block" : "none" }}>
                  <li><Link href="/about" onClick={handleMobileMenu}>About Company</Link></li>
                  <li><Link href="/team" onClick={handleMobileMenu}>Meet Our Team</Link></li>
                  <li><Link href="/faq" onClick={handleMobileMenu}>FAQ&apos;s</Link></li>
                  <li><Link href="/testimonials" onClick={handleMobileMenu}>Testimonials</Link></li>
                  <li><Link href="/overview" onClick={handleMobileMenu}>Overview</Link></li>
                  <li><Link href="/place-job" onClick={handleMobileMenu}>Place Job Order</Link></li>
                </ul>
                <div className={`dropdown-btn ${activeDropdown === 2 ? "open" : ""}`} onClick={() => toggleDropdown(2)}>
                  <span className="fa fa-angle-right" />
                </div>
              </li>

              {/* Solutions */}
              <li className={`dropdown ${activeDropdown === 3 ? "current" : ""}`}>
                <Link href="/#">Solutions</Link>
                <ul style={{ display: activeDropdown === 3 ? "block" : "none" }}>
                  <li><Link href="/service" onClick={handleMobileMenu}>Our Solutions</Link></li>
                  <li><Link href="/temprory-staffing" onClick={handleMobileMenu}>Temprory Staffing</Link></li>
                  <li><Link href="/direct-hire" onClick={handleMobileMenu}>Direct Hire</Link></li>
                  <li><Link href="/contract-hire" onClick={handleMobileMenu}>Contract to Hire</Link></li>
                  <li><Link href="/payrolling" onClick={handleMobileMenu}>Payrolling</Link></li>
                  <li><Link href="/training" onClick={handleMobileMenu}>Training</Link></li>
                  <li><Link href="/executive-search" onClick={handleMobileMenu}>Executive Search</Link></li>
                </ul>
                <div className={`dropdown-btn ${activeDropdown === 3 ? "open" : ""}`} onClick={() => toggleDropdown(3)}>
                  <span className="fa fa-angle-right" />
                </div>
              </li>

              {/* Job Seekers */}
              <li className={`dropdown ${activeDropdown === 4 ? "current" : ""}`}>
                <Link href="/#">Job Seekers</Link>
                <ul style={{ display: activeDropdown === 4 ? "block" : "none" }}>
                  <li><Link href="/overview_two" onClick={handleMobileMenu}>Job Overview</Link></li>
                  <li><Link href="/job-openings" onClick={handleMobileMenu}>Job Openings</Link></li>
                  <li><Link href="/job-details" onClick={handleMobileMenu}>Detail Page</Link></li>
                  <li><Link href="/apply-now" onClick={handleMobileMenu}>Apply Now</Link></li>
                </ul>
                <div className={`dropdown-btn ${activeDropdown === 4 ? "open" : ""}`} onClick={() => toggleDropdown(4)}>
                  <span className="fa fa-angle-right" />
                </div>
              </li>

              {/* Portfolio */}
              <li className={`dropdown ${activeDropdown === 5 ? "current" : ""}`}>
                <Link href="/#">Portfolio</Link>
                <ul style={{ display: activeDropdown === 5 ? "block" : "none" }}>
                  <li><Link href="/portfolio-1" onClick={handleMobileMenu}>Grid View 01</Link></li>
                  <li><Link href="/portfolio-2" onClick={handleMobileMenu}>Grid View 02</Link></li>
                  <li><Link href="/portfolio-3" onClick={handleMobileMenu}>Masonry View</Link></li>
                  <li><Link href="/portfolio-4" onClick={handleMobileMenu}>Fullwidth View 01</Link></li>
                  <li><Link href="/portfolio-5" onClick={handleMobileMenu}>Fullwidth View 02</Link></li>
                </ul>
                <div className={`dropdown-btn ${activeDropdown === 5 ? "open" : ""}`} onClick={() => toggleDropdown(5)}>
                  <span className="fa fa-angle-right" />
                </div>
              </li>

              {/* Blog */}
              <li className={`dropdown ${activeDropdown === 6 ? "current" : ""}`}>
                <Link href="/#">Blog</Link>
                <ul style={{ display: activeDropdown === 6 ? "block" : "none" }}>
                  <li><Link href="/blog-grid" onClick={handleMobileMenu}>Grid View</Link></li>
                  <li><Link href="/blog-list" onClick={handleMobileMenu}>List View</Link></li>
                  <li><Link href="/blog-details" onClick={handleMobileMenu}>Single Post</Link></li>
                </ul>
                <div className={`dropdown-btn ${activeDropdown === 6 ? "open" : ""}`} onClick={() => toggleDropdown(6)}>
                  <span className="fa fa-angle-right" />
                </div>
              </li>
              <li><Link href="/contact" onClick={handleMobileMenu}>Contact</Link></li>
            </ul>
          </div>

          <div className="contact-info">
              <h4>Contact Info</h4>
              <ul>
                  <li>Chicago 12, Melborne City, USA</li>
                  <li><Link href="tel:+8801682648101">+88 01682648101</Link></li>
                  <li><Link href="mailto:info@example.com">info@example.com</Link></li>
              </ul>
          </div>

          {/* Social Links */}
          <div className="social-links">
            <ul className="clearfix">
              <li><Link href="/#"><span className="fab fa-twitter" /></Link></li>
              <li><Link href="/#"><span className="fab fa-facebook-square" /></Link></li>
              <li><Link href="/#"><span className="fab fa-pinterest-p" /></Link></li>
              <li><Link href="/#"><span className="fab fa-instagram" /></Link></li>
              <li><Link href="/#"><span className="fab fa-youtube" /></Link></li>
            </ul>
          </div>

        </nav>
      </div>

      {/* Overlay */}
      <div
        className="nav-overlay"
      />
    </>
  );
}
