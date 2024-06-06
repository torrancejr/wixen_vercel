import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Main from './Main';
import AuditForm from './AuditForm';
import Contact from "../../components/Contact";
import Divider from '../../components/Divider';

export default function SiteAudit() {
    return (
        <div>
            <div className="header">
                <Header />
            </div>
            <div className="main">
                <Main />
            </div>
            <div className="form">
                <AuditForm />
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