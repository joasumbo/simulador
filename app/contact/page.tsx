import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import ContactForm from "@/components/elements/ContactForm";
import Clients from "@/components/sections/home2/Clients";

export default function Contact_Page() {

    return (
        <Layout headerStyle={1} footerStyle={4} breadcrumbTitle="Get In Touch" breadcrumbTitleTwo="Smarter Business Solutions. Better Customer Relations." breadcrumbTitleThree="Contact">
            
            <section className="contactinfo-section contact-page-section">
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-12 col-sm-12 content-column">
                            <div id="content_block_6">
                                <div className="content-box">
                                    <div className="sec-title">
                                        <span className="top-title">Endless Opportunities</span>
                                        <h2>It&apos;s Your Turn</h2>
                                        <p>Visit our <span>Employer FAQ</span> or <span>Employee FAQ</span> page for answers to common questions.</p>
                                    </div>
                                    <ul className="info-list clearfix">
                                        <li>
                                            <figure className="icon-box"><Image src="/assets/images/icons/icon-39.png" alt="Image" width={62} height={62} priority /></figure>
                                            <div className="inner">
                                                <h4>Location</h4>
                                                <p>United States <br />866 Wilshire, 2nd Street <br />Los Angeles 90024.</p>
                                            </div>
                                        </li>
                                        <li>
                                            <figure className="icon-box"><Image src="/assets/images/icons/icon-40.png" alt="Image" width={62} height={62} priority /></figure>
                                            <div className="inner">
                                                <h4>Call or Email</h4>
                                                <p>
                                                    <Link href="tel:8004561234">(800) 456-1234</Link><br />
                                                    <Link href="mailto:contact@example.com">contact@example.com</Link>
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <figure className="icon-box"><Image src="/assets/images/icons/icon-41.png" alt="Image" width={62} height={62} priority /></figure>
                                            <div className="inner">
                                                <h4>Office Hrs</h4>
                                                <p>Mon - Sat: 9.00am to 7.00pm<br />Sunday: Closed</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-12 col-sm-12 form-column">
                            <div className="form-inner">
                                <h2>What are you looking for?</h2>
                                <ContactForm/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="locations-section bg-color-2">
                <div className="pattern-layer" style={{ backgroundImage: "url(/assets/images/shape/pattern-50.png)" }}></div>
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                            <div className="single-item wow fadeInUp animated animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="upper-box">
                                        <h3>Philadelphia</h3>
                                        <p>United States, 205 Wilshire, 2nd Str Philadelphia 19019.</p>
                                    </div>
                                    <ul className="info-list clearfix">
                                        <li>
                                            <i className="flaticon-email"></i>
                                            <p>Email</p>
                                            <Link href="mailto:eazyph@example.com">eazyph@example.com</Link>
                                        </li>
                                        <li>
                                            <i className="flaticon-phone-call"></i>
                                            <p>Phone</p>
                                            <Link href="tel:2674561234">(267) 456-1234</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                            <div className="single-item wow fadeInUp animated animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="upper-box">
                                        <h3>New Orleans</h3>
                                        <p>United States, 102 Wilshire, 3rd Str New Orleans 70032.</p>
                                    </div>
                                    <ul className="info-list clearfix">
                                        <li>
                                            <i className="flaticon-email"></i>
                                            <p>Email</p>
                                            <Link href="mailto:eazyph@example.com">eazyph@example.com</Link>
                                        </li>
                                        <li>
                                            <i className="flaticon-phone-call"></i>
                                            <p>Phone</p>
                                            <Link href="tel:5044561234">(504) 456-1234</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                            <div className="single-item wow fadeInUp animated animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="upper-box">
                                        <h3>Minneapolis</h3>
                                        <p>United States, 405 Wilshire, 2nd Str Minneapolis 55111.</p>
                                    </div>
                                    <ul className="info-list clearfix">
                                        <li>
                                            <i className="flaticon-email"></i>
                                            <p>Email</p>
                                            <Link href="mailto:eazyph@example.com">eazyph@example.com</Link>
                                        </li>
                                        <li>
                                            <i className="flaticon-phone-call"></i>
                                            <p>Phone</p>
                                            <Link href="tel:6124561234">(612) 456-1234</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Clients/>

        </Layout>
    )
}
