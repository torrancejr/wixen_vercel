import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Contact from "../../components/Contact";
import Divider from '../../components/Divider';
import RankChecker from "../../components/RankChecker";

export default function SiteAudit() {
    return (
        <div>
            <div className="header">
                <Header />
            </div>
            <div className="form">
                <RankChecker />
            </div>
            <Divider />
            <div className="contact">
                <Contact />
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    )
}