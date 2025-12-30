// ✅ SERVER COMPONENT (no "use client")

import React from "react";
import Header from "./Header";         // ✅ Client component (should have "use client" at top)
import Footer from "./Footer";         // ✅ Server component
import Breadcrumb from "./Breadcrumb"; // adjust the import path as needed

interface LayoutProps {
  children: React.ReactNode;
  headerStyle?: 1 | 4;  // Header variant
  footerStyle?: 2;      // Footer variant (only Footer2 is used)
  breadcrumbTitle?: string;
  breadcrumbTitleTwo?: string;
  breadcrumbTitleThree?: string;
}

export default function Layout({
  children,
  headerStyle = 1,
  footerStyle = 2,
  breadcrumbTitle,
  breadcrumbTitleTwo,
  breadcrumbTitleThree,
}: LayoutProps) {
  const hasBreadcrumb =
    breadcrumbTitle || breadcrumbTitleTwo || breadcrumbTitleThree;

  return (
    <div className="boxed_wrapper" id="top">
      {/* ✅ Header (Client Component) */}
      <Header style={headerStyle} />

      {/* ✅ Breadcrumb (Single render with multiple props) */}
      {hasBreadcrumb && (
        <Breadcrumb
          breadcrumbTitle={breadcrumbTitle ?? ""}
          breadcrumbTitleTwo={breadcrumbTitleTwo}
          breadcrumbTitleThree={breadcrumbTitleThree}
        />
      )}

      {/* ✅ Main Page Content */}
      <main>{children}</main>

      {/* ✅ Footer (Server Component) */}
      <Footer style={footerStyle} />
    </div>
  );
}
