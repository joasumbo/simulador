

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Menu() {
  const pathname = usePathname();

  // Checks if a path is active
  const isActive = (path: string) => pathname === path;

  // Checks if a parent dropdown should be active
  const isDropdownActive = (paths: string[]) => paths.some((path) => pathname.startsWith(path));

  return (
    <ul className="navigation clearfix">

        {/* Home */}
        <li className={`dropdown ${isDropdownActive([
            "/index-2",
            "/index-3",
            "/index-onepage"
            ]) || isActive("/")
            ? "current"
            : ""
        }`}>
            <Link href="#">Home</Link>
            <ul>
              <li className={isActive("/") ? "current" : ""}><Link href="/">Home Page 01</Link></li>
              <li className={isActive("/index-2") ? "current" : ""}><Link href="/index-2">Home Page 02</Link></li>
              <li className={isActive("/index-3") ? "current" : ""}><Link href="/index-3">Home Page 03</Link></li>
              <li className={isActive("/index-onepage") ? "current" : ""}><Link href="/index-onepage">Home OnePage</Link></li>
            </ul>
      </li>

      {/* About */}
      <li className={`dropdown ${isDropdownActive(["/about", "/team"]) ? "current" : ""}`}>
        <Link href="#">About</Link>
        <ul>
          <li className={isActive("/about") ? "current" : ""}><Link href="/about">About Company</Link></li>
          <li className={isActive("/team") ? "current" : ""}><Link href="/team">Meet Our Team</Link></li>
        </ul>
      </li>

      {/* Employers */}
      <li className={`dropdown ${isDropdownActive(["/overview", "/place-job", "/faq", "/testimonials"]) ? "current" : ""}`}>
        <Link href="#">Employers</Link>
        <ul>
          <li className={isActive("/overview") ? "current" : ""}><Link href="/overview">Overview</Link></li>
          <li className={isActive("/place-job") ? "current" : ""}><Link href="/place-job">Place Job Order</Link></li>
          <li className={isActive("/faq") ? "current" : ""}><Link href="/faq">FAQ&apos;s</Link></li>
          <li className={isActive("/testimonials") ? "current" : ""}><Link href="/testimonials">Testimonials</Link></li>
        </ul>
      </li>

      {/* Solutions */}
      <li className={`dropdown ${isDropdownActive(["/service", "/temprory-staffing", "/direct-hire", "/contract-hire", "/payrolling", "/training", "/executive-search"]) ? "current" : ""}`}>
        <Link href="#">Solutions</Link>
        <ul>
          <li className={isActive("/service") ? "current" : ""}><Link href="/service">Our Solutions</Link></li>
          <li className={isActive("/temprory-staffing") ? "current" : ""}><Link href="/temprory-staffing">Temprory Staffing</Link></li>
          <li className={isActive("/direct-hire") ? "current" : ""}><Link href="/direct-hire">Direct Hire</Link></li>
          <li className={isActive("/contract-hire") ? "current" : ""}><Link href="/contract-hire">Contract to Hire</Link></li>
          <li className={isActive("/payrolling") ? "current" : ""}><Link href="/payrolling">Payrolling</Link></li>
          <li className={isActive("/training") ? "current" : ""}><Link href="/training">Training</Link></li>
          <li className={isActive("/executive-search") ? "current" : ""}><Link href="/executive-search">Executive Search</Link></li>
        </ul>
      </li>

      {/* Job Seekers */}
      <li className={`dropdown ${isDropdownActive(["/overview_two", "/apply-now"]) ? "current" : ""}`}>
        <Link href="#">Job Seekers</Link>
        <ul>
          <li className={isActive("/overview_two") ? "current" : ""}><Link href="/overview_two">Overview</Link></li>
          <li className={`dropdown ${isDropdownActive(["/job-openings", "/job-details"]) ? "current" : ""}`}>
            <Link href="#">Job Openings</Link>
            <ul>
              <li className={isActive("/job-openings") ? "current" : ""}><Link href="/job-openings">Job Openings</Link></li>
              <li className={isActive("/job-details") ? "current" : ""}><Link href="/job-details">Detail Page</Link></li>
            </ul>
          </li>
          <li className={isActive("/apply-now") ? "current" : ""}><Link href="/apply-now">Apply Now</Link></li>
        </ul>
      </li>

      {/* Pages */}
      <li className={`dropdown ${isDropdownActive(["/error"]) ? "current" : ""}`}>
        <Link href="#">Pages</Link>
        <ul>
          <li className={`dropdown ${isDropdownActive(["/blog-grid", "/blog-list", "/blog-details"]) ? "current" : ""}`}>
            <Link href="#">Blog</Link>
            <ul>
              <li className={isActive("/blog-grid") ? "current" : ""}><Link href="/blog-grid">Grid View</Link></li>
              <li className={isActive("/blog-list") ? "current" : ""}><Link href="/blog-list">List View</Link></li>
              <li className={isActive("/blog-details") ? "current" : ""}><Link href="/blog-details">Single Post</Link></li>
            </ul>
          </li>
          <li className={`dropdown ${isDropdownActive(["/portfolio-1", "/portfolio-2", "/portfolio-3", "/portfolio-4", "/portfolio-5"]) ? "current" : ""}`}>
            <Link href="#">Portfolio</Link>
            <ul>
              <li className={isActive("/portfolio-1") ? "current" : ""}><Link href="/portfolio-1">Grid View 01</Link></li>
              <li className={isActive("/portfolio-2") ? "current" : ""}><Link href="/portfolio-2">Grid View 02</Link></li>
              <li className={isActive("/portfolio-3") ? "current" : ""}><Link href="/portfolio-3">Masonry View</Link></li>
              <li className={isActive("/portfolio-4") ? "current" : ""}><Link href="/portfolio-4">Fullwidth View 01</Link></li>
              <li className={isActive("/portfolio-5") ? "current" : ""}><Link href="/portfolio-5">Fullwidth View 02</Link></li>
            </ul>
          </li>
          <li className={isActive("/error") ? "current" : ""}><Link href="/error">404</Link></li>
        </ul>
      </li>
      <li className={isActive("/contact") ? "current" : ""}><Link href="/contact">Contact</Link></li>
    </ul>
  );
}
