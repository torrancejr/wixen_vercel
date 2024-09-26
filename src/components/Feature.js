import React from 'react';
import Header from './Header';
import Footer from './Footer';
import WithTabs from '../features/OurWork/WithTabs'
import Blog from "../../src/features/Blog/Blog";
import TopThreeSites from "../features/OurWork/TopThreeSites";


export default function Feature() {
    return (
        <div>
            <div className="header">
                <Header />
            </div>
            <div className="tabs">
                <WithTabs />
            </div>
            <div className="top-three-sites">
                <TopThreeSites />
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    )
}