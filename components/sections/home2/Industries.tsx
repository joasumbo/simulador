"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type TabItem = {
  id: string;
  title: string;
  img: string;
};

export default function Industries() {
  const [activeOuterTab, setActiveOuterTab] = useState<"industries" | "roles">("industries");
  const [activeInnerTab, setActiveInnerTab] = useState("tab-3");

  const industriesTabs: TabItem[] = [
    { id: "tab-3", title: "Logistics & Services", img: "/assets/images/resource/industries-7.jpg" },
    { id: "tab-4", title: "Hospitality", img: "/assets/images/resource/industries-8.jpg" },
    { id: "tab-5", title: "Manufacturing", img: "/assets/images/resource/industries-9.jpg" },
    { id: "tab-6", title: "Education & Government", img: "/assets/images/resource/industries-10.jpg" },
    { id: "tab-7", title: "Software/IT", img: "/assets/images/resource/industries-11.jpg" },
    { id: "tab-8", title: "Front Line Support", img: "/assets/images/resource/industries-12.jpg" },
  ];

  const jobRolesTabs: TabItem[] = [
    { id: "tab-12", title: "Education & Government", img: "/assets/images/resource/industries-10.jpg" },
    { id: "tab-13", title: "Software/IT", img: "/assets/images/resource/industries-11.jpg" },
    { id: "tab-9", title: "Logistics & Services", img: "/assets/images/resource/industries-7.jpg" },
    { id: "tab-11", title: "Manufacturing", img: "/assets/images/resource/industries-9.jpg" },
    { id: "tab-14", title: "Front Line Support", img: "/assets/images/resource/industries-12.jpg" },
    { id: "tab-10", title: "Hospitality", img: "/assets/images/resource/industries-8.jpg" },
  ];

  const getActiveTabs = () => (activeOuterTab === "industries" ? industriesTabs : jobRolesTabs);

  return (
    <section className="industries-style-two" id="service">
      <div className="auto-container">
        <div className="sec-title centred">
          <span className="top-title">Our Service areas</span>
          <h2>Industries Hiring & Job Roles</h2>
          <p>
            Long established fact that a reader will be distracted by the <br />
            readable content of a page.
          </p>
        </div>

        <div className="tabs-box">
          {/* Outer Tabs */}
          <div className="tab-btn-one">
            <ul className="tab-btns tab-buttons clearfix">
              <li
                className={`tab-btn ${activeOuterTab === "industries" ? "active-btn" : ""}`}
                onClick={() => {
                  setActiveOuterTab("industries");
                  setActiveInnerTab("tab-3");
                }}
              >
                <figure className="icon-box">
                  <Image src="/assets/images/icons/icon-23.png" alt="Industries" width={42} height={42} />
                </figure>
                <h3>Industries of Expertise</h3>
                <i className="flaticon-up-arrow-2"></i>
              </li>

              <li
                className={`tab-btn ${activeOuterTab === "roles" ? "active-btn" : ""}`}
                onClick={() => {
                  setActiveOuterTab("roles");
                  setActiveInnerTab("tab-9");
                }}
              >
                <figure className="icon-box">
                  <Image src="/assets/images/icons/icon-24.png" alt="Job Roles" width={45} height={42} />
                </figure>
                <h3>Job Roles We Cater to</h3>
                <i className="flaticon-up-arrow-2"></i>
              </li>
            </ul>
          </div>

          {/* Outer Tabs Content */}
          <div className="tabs-content">
            <div className={`tab ${activeOuterTab === "industries" ? "active-tab" : ""}`} id="tab-1">
              <div className="tabs-box-2">
                <div className="row clearfix">
                  {/* Left Content */}
                  <div className="col-lg-8 col-md-12 col-sm-12 content-column">
                    <div className="tabs-content-2">
                      {getActiveTabs().map(
                        (tab) =>
                          activeInnerTab === tab.id && (
                            <div key={tab.id} className={`tab-2 active-tab-2`} id={tab.id}>
                              <div className="inner-box">
                                <figure className="image-box">
                                  <Image src={tab.img} alt={tab.title} width={740} height={466} />
                                </figure>
                                <div className="content-box">
                                  <div className="text">
                                    <h2>{tab.title}</h2>
                                    <span>26 Jobs in 10 Different Companies</span>
                                  </div>
                                  <div className="link">
                                    <Link href="#">
                                      <i className="flaticon-right-arrow-angle"></i>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )
                      )}
                    </div>
                  </div>

                  {/* Right Buttons */}
                  <div className="col-lg-4 col-md-12 col-sm-12 btn-column">
                    <div className="tab-btn-two">
                      <ul className="tab-btns tab-buttons-2 clearfix">
                        {getActiveTabs().map((tab, i) => (
                          <li
                            key={tab.id}
                            className={`tab-btn-2 ${activeInnerTab === tab.id ? "active-btn-2" : ""}`}
                            onClick={() => setActiveInnerTab(tab.id)}
                          >
                            <figure className="icon-box">
                                <Image src={`/assets/images/icons/icon-${25 + i}.png`} alt={tab.title} width={50} height={50} priority />
                            </figure>
                            <h3>{tab.title}</h3>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`tab ${activeOuterTab === "roles" ? "active-tab" : ""}`} id="tab-2">
              {/* The same inner structure reused for jobRolesTabs */}
              <div className="tabs-box-2">
                <div className="row clearfix">
                  {/* Left Content */}
                  <div className="col-lg-8 col-md-12 col-sm-12 content-column">
                    <div className="tabs-content-2">
                      {getActiveTabs().map(
                        (tab) =>
                          activeInnerTab === tab.id && (
                            <div key={tab.id} className={`tab-2 active-tab-2`} id={tab.id}>
                              <div className="inner-box">
                                <figure className="image-box">
                                  <Image src={tab.img} alt={tab.title} width={740} height={466} />
                                </figure>
                                <div className="content-box">
                                  <div className="text">
                                    <h2>{tab.title}</h2>
                                    <span>26 Jobs in 10 Different Companies</span>
                                  </div>
                                  <div className="link">
                                    <Link href="#">
                                      <i className="flaticon-right-arrow-angle"></i>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )
                      )}
                    </div>
                  </div>

                  {/* Right Buttons */}
                  <div className="col-lg-4 col-md-12 col-sm-12 btn-column">
                    <div className="tab-btn-two">
                      <ul className="tab-btns tab-buttons-2 clearfix">
                        {getActiveTabs().map((tab, i) => (
                          <li
                            key={tab.id}
                            className={`tab-btn-2 ${activeInnerTab === tab.id ? "active-btn-2" : ""}`}
                            onClick={() => setActiveInnerTab(tab.id)}
                          >
                            <figure className="icon-box">
                              <Image src={`/assets/images/icons/icon-${25 + i}.png`} alt={tab.title} width={50} height={50} priority />
                            </figure>
                            <h3>{tab.title}</h3>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
