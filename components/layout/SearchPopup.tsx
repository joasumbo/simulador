'use client';
import React from 'react';
import Link from "next/link";

type SearchPopupProps = {
  isPopup: boolean;
  handlePopup: () => void;
};

const SearchPopup: React.FC<SearchPopupProps> = ({ isPopup, handlePopup }) => {
  return (

    <div id="search-popup" className={`search-popup ${isPopup ? "popup-visible" : ""}`}>
        <div className="close-search" onClick={handlePopup}><i className="flaticon-close"></i></div>
        <div className="popup-inner">
            <div className="overlay-layer"></div>
            <div className="search-form">
                <form method="post" action="/">
                    <div className="form-group">
                        <fieldset>
                            <input type="search" className="form-control" name="search-input" placeholder="Search Here" required />
                            <input type="submit" value="Search Now!" className="theme-btn style-four" />
                        </fieldset>
                    </div>
                </form>
                <h3>Recent Search Keywords</h3>
                <ul className="recent-searches">
                    <li><Link href="/">Finance</Link></li>
                    <li><Link href="/">Idea</Link></li>
                    <li><Link href="/">Service</Link></li>
                    <li><Link href="/">Growth</Link></li>
                    <li><Link href="/">Plan</Link></li>
                </ul>
            </div>
        </div>
    </div>
  );
};

export default SearchPopup;
