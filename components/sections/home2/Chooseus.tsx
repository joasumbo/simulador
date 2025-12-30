import Link from "next/link";
import Image from "next/image";

export default function Chooseus() {
  return (
    <>
        <section className="chooseus-section bg-color-1" id="chooseus">
            <div className="pattern-layer" style={{ backgroundImage: "url(/assets/images/shape/pattern-18.png)" }}></div>
            <div className="auto-container">
                <div className="sec-title centred light">
                    <span className="top-title">Benefits of Eazy Recruitz</span>
                    <h2>Advantages Of Working With Us</h2>
                    <p>Long established fact that a reader will be distracted by the <br />readable content of a page.</p>
                </div>
                <div className="row clearfix">
                    <div className="col-lg-3 col-md-6 col-sm-12 chooseus-block">
                        <div className="chooseus-block-one wow fadeInUp animated animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <figure className="icon-box"><Image src="/assets/images/icons/icon-31.png" alt="Image" width={50} height={62} priority /></figure>
                                <h3>Certified Companies</h3>
                                <p>Indignations & dislike men beguiled demoralized.</p>
                                <Link href="/index-2"><i className="flaticon-right-arrow"></i>More Details</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 chooseus-block">
                        <div className="chooseus-block-one wow fadeInUp animated animated" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <figure className="icon-box"><Image src="/assets/images/icons/icon-32.png" alt="Image" width={62} height={62} priority /></figure>
                                <h3>Save Your Time</h3>
                                <p>Business it will frequently pleasures repudiated.</p>
                                <Link href="/index-2"><i className="flaticon-right-arrow"></i>More Details</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 chooseus-block">
                        <div className="chooseus-block-one wow fadeInUp animated animated" data-wow-delay="400ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <figure className="icon-box"><Image src="/assets/images/icons/icon-33.png" alt="Image" width={62} height={62} priority /></figure>
                                <h3>Save Your Money</h3>
                                <p>Indignations & dislike men beguiled demoralized.</p>
                                <Link href="/index-2"><i className="flaticon-right-arrow"></i>More Details</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 chooseus-block">
                        <div className="chooseus-block-one wow fadeInUp animated animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <figure className="icon-box"><Image src="/assets/images/icons/icon-34.png" alt="Image" width={62} height={62} priority /></figure>
                                <h3>Broad Network</h3>
                                <p>Business it will frequently pleasures repudiated.</p>
                                <Link href="/index-2"><i className="flaticon-right-arrow"></i>More Details</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
