"use client";

import React from "react";
import Link from "next/link";

interface BreadcrumbProps {
  breadcrumbTitle: string;
  breadcrumbTitleTwo?: string;   // Optional subtitle
  breadcrumbTitleThree?: string; // Optional middle breadcrumb
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  breadcrumbTitle,
  breadcrumbTitleTwo,
  breadcrumbTitleThree,
}) => {
  return (
    <section className="page-title" style={{ backgroundImage: "url(/assets/images/background/page-title-2.jpg)" }}>
            <div className="pattern-layer" style={{ backgroundImage: "url(/assets/images/shape/pattern-35.png)" }}></div>
            <div className="auto-container">
                <div className="content-box">
                    <div className="title-box centred">
                        <h1>{ breadcrumbTitle }</h1>
                        <p>{ breadcrumbTitleTwo }</p>
                    </div>
                    <ul className="bread-crumb clearfix">
                        <li><Link href="/">Home</Link></li>
                        <li>{ breadcrumbTitleThree }</li>
                        <li>{ breadcrumbTitle }</li>
                    </ul>
                </div>
            </div>
        </section>
  );
};

export default Breadcrumb;
