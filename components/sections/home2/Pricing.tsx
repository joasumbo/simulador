"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Pricing() {

  const [activeTab, setActiveTab] = useState("pricing");

  return (
    <>
        <section className="pricing-section">
            <div className="pattern-layer" style={{ backgroundImage: "url(/assets/images/shape/pattern-19.png)" }}></div>
            <div className="auto-container">
                <div className="sec-title">
                    <span className="top-title">Our Pricing & Plans</span>
                    <h2>Impressive Pricing & Plans</h2>
                </div>
                <div className="tabs-box">
                    <div className="tab-btn-box">
                        <ul className="tab-btns tab-buttons clearfix">
                            <li
                            className={`tab-btn ${
                                activeTab === "pricing" ? "active-btn" : ""
                            }`}
                            onClick={() => setActiveTab("pricing")}
                            >Standard</li>

                            <li
                            className={`tab-btn ${
                                activeTab === "pricing2" ? "active-btn" : ""
                            }`}
                            onClick={() => setActiveTab("pricing2")}
                            >Premium</li>
                        </ul>
                    </div>
                    <div className="tabs-content">
                        {activeTab === "pricing" && (
                        <div className="tab active-tab">
                            <div className="row clearfix">
                                <div className="col-lg-3 col-md-6 col-sm-12 pricing-block">
                                    <div className="pricing-block-one">
                                        <div className="inner-box">
                                            <figure className="icon-box"><Image src="/assets/images/icons/icon-35.png" alt="Icon" width={70} height={70} priority /></figure>
                                            <h3>Temprory Recruitment</h3>
                                            <span className="text">Salary Level upto $50k</span>
                                            <h2><span className="symble">$</span>5.5k <span className="text"> / Role</span></h2>
                                            <p>Average Percentage Fee 10% / Candiadte</p>
                                            <Link href="/index-2">Get Started</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 pricing-block">
                                    <div className="pricing-block-one popular">
                                        <div className="inner-box">
                                            <div className="popular-tag">Popular</div>
                                            <figure className="icon-box"><Image src="/assets/images/icons/icon-36.png" alt="Icon" width={70} height={70} priority /></figure>
                                            <h3>Contract Recruitment</h3>
                                            <span className="text">Salary Level upto $50k</span>
                                            <h2><span className="symble">$</span>6.5k <span className="text"> / Role</span></h2>
                                            <p>Average Percentage Fee 12% / Candiadte</p>
                                            <Link href="/index-2">Get Started</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 pricing-block">
                                    <div className="pricing-block-one">
                                        <div className="inner-box">
                                            <figure className="icon-box"><Image src="/assets/images/icons/icon-37.png" alt="Icon" width={70} height={70} priority /></figure>
                                            <h3>Direct Recruitment</h3>
                                            <span className="text">Salary Level upto $50k</span>
                                            <h2><span className="symble">$</span>8.5k <span className="text"> / Role</span></h2>
                                            <p>Average Percentage Fee 15% / Candiadte</p>
                                            <Link href="/index-2">Get Started</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 pricing-block">
                                    <div className="pricing-block-one">
                                        <div className="inner-box">
                                            <figure className="icon-box"><Image src="/assets/images/icons/icon-38.png" alt="Icon" width={70} height={70} priority /></figure>
                                            <h3>Training for Employee</h3>
                                            <span className="text">Salary Level upto $50k</span>
                                            <h2><span className="symble">$</span>12k <span className="text"> / Role</span></h2>
                                            <p>Average Percentage Fee 20% / Candiadte</p>
                                            <Link href="/index-2">Get Started</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === "pricing2" && (
                        <div className="tab active-tab">
                            <div className="row clearfix">
                                <div className="col-lg-3 col-md-6 col-sm-12 pricing-block">
                                    <div className="pricing-block-one">
                                        <div className="inner-box">
                                            <figure className="icon-box"><Image src="/assets/images/icons/icon-35.png" alt="Icon" width={70} height={70} priority /></figure>
                                            <h3>Temprory Recruitment</h3>
                                            <span className="text">Salary Level upto $50k</span>
                                            <h2><span className="symble">$</span>10k <span className="text"> / Role</span></h2>
                                            <p>Average Percentage Fee 15% / Candiadte</p>
                                            <Link href="/index-2">Get Started</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 pricing-block">
                                    <div className="pricing-block-one">
                                        <div className="inner-box">
                                            <figure className="icon-box"><Image src="/assets/images/icons/icon-37.png" alt="Icon" width={70} height={70} priority /></figure>
                                            <h3>Direct Recruitment</h3>
                                            <span className="text">Salary Level upto $50k</span>
                                            <h2><span className="symble">$</span>18k <span className="text"> / Role</span></h2>
                                            <p>Average Percentage Fee 25% / Candiadte</p>
                                            <Link href="/index-2">Get Started</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 pricing-block">
                                    <div className="pricing-block-one">
                                        <div className="inner-box">
                                            <figure className="icon-box"><Image src="/assets/images/icons/icon-38.png" alt="Icon" width={70} height={70} priority /></figure>
                                            <h3>Training for Employee</h3>
                                            <span className="text">Salary Level upto $50k</span>
                                            <h2><span className="symble">$</span>20k <span className="text"> / Role</span></h2>
                                            <p>Average Percentage Fee 30% / Candiadte</p>
                                            <Link href="/index-2">Get Started</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 pricing-block">
                                    <div className="pricing-block-one popular">
                                        <div className="inner-box">
                                            <div className="popular-tag">Popular</div>
                                            <figure className="icon-box"><Image src="/assets/images/icons/icon-36.png" alt="Icon" width={70} height={70} priority /></figure>
                                            <h3>Contract Recruitment</h3>
                                            <span className="text">Salary Level upto $50k</span>
                                            <h2><span className="symble">$</span>15k <span className="text"> / Role</span></h2>
                                            <p>Average Percentage Fee 20% / Candiadte</p>
                                            <Link href="/index-2">Get Started</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
