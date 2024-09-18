import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default function TermsOfServicePage() {
    return (
        <>
            <Header/>
            <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
                <div className="max-w-prose text-left">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Terms of Service</h1>
                    <p className="mt-4 text-lg leading-7 text-gray-600">Effective Date: January 21, 2024</p>

                    <h2 className="mt-10 text-2xl font-semibold text-gray-900">1. Acceptance of Terms</h2>
                    <p className="mt-4 text-base leading-7 text-gray-600">
                        By accessing or using Wixen Company LLC’s website ("Site"), services, or products, you agree to comply
                        with and be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you
                        should not use our services.
                    </p>

                    <h2 className="mt-10 text-2xl font-semibold text-gray-900">2. Services</h2>
                    <p className="mt-4 text-base leading-7 text-gray-600">
                        Wixen Company LLC ("Company", "we", "us", or "our") provides web design, SEO, and other related
                        services. By engaging with our services, you acknowledge and agree to the terms herein.
                    </p>

                    <h2 className="mt-10 text-2xl font-semibold text-gray-900">3. Payment Terms</h2>
                    <p className="mt-4 text-base leading-7 text-gray-600">
                        We accept all standard payment methods, including credit cards, PayPal, bank transfers, and other
                        authorized methods. Payments for our services must be made in accordance with the payment terms
                        outlined in our service agreements.
                    </p>
                    <p className="mt-4 text-base leading-7 text-gray-600">
                        <strong>Bank Checks</strong>: We accept bank checks, but we reserve the right to withhold
                        services until the check is fully cleared. A 45-day waiting period may apply for refunds or
                        disputes related to bank checks to account for fraud prevention and ensure funds are not reversed
                        after delivery of services.
                    </p>

                    <h2 className="mt-10 text-2xl font-semibold text-gray-900">4. Refund Policy</h2>
                    <p className="mt-4 text-base leading-7 text-gray-600">
                        - <strong>Services:</strong> Once a project or service has commenced, refunds will be considered
                        on a case-by-case basis. If you are unsatisfied with the quality of the services provided, you
                        may request a refund within 15 days of delivery. Any refunds issued will be at our sole
                        discretion.
                    </p>
                    <p className="mt-4 text-base leading-7 text-gray-600">
                        - <strong>Bank Check Payments:</strong> Refunds on bank checks will only be issued after a
                        45-day verification period to ensure funds are fully cleared and no fraudulent activity has
                        occurred.
                    </p>
                    <p className="mt-4 text-base leading-7 text-gray-600">
                        - <strong>Credit Card Payments:</strong> Refunds for payments made by credit card will be
                        processed in accordance with the payment provider's policies.
                    </p>

                    <h2 className="mt-10 text-2xl font-semibold text-gray-900">5. Fraud Prevention</h2>
                    <p className="mt-4 text-base leading-7 text-gray-600">
                        To protect against fraudulent activities, Wixen Company LLC reserves the right to verify the
                        authenticity of payment methods, especially for bank checks. We may delay delivery of services
                        until payments are fully cleared and deny or refund transactions that appear suspicious or
                        fraudulent.
                    </p>

                    <h2 className="mt-10 text-2xl font-semibold text-gray-900">6. Limitation of Liability</h2>
                    <p className="mt-4 text-base leading-7 text-gray-600">
                        Wixen Company LLC will not be liable for any indirect, incidental, or consequential damages that arise
                        from the use of our services, including, but not limited to, loss of profits, data, or business
                        opportunities. Our liability for any claims related to our services will not exceed the total
                        amount you paid for the services.
                    </p>

                    <h2 className="mt-10 text-2xl font-semibold text-gray-900">7. Indemnification</h2>
                    <p className="mt-4 text-base leading-7 text-gray-600">
                        You agree to indemnify, defend, and hold harmless Wixen Company LLC, its affiliates, officers,
                        directors, employees, and agents from and against any and all claims, liabilities, damages,
                        losses, or expenses, including legal fees, arising out of or in any way connected with your use
                        of the services or breach of these Terms.
                    </p>

                    <h2 className="mt-10 text-2xl font-semibold text-gray-900">8. Governing Law</h2>
                    <p className="mt-4 text-base leading-7 text-gray-600">
                        These Terms will be governed by and construed in accordance with the laws of the state of
                        Pennsylvania, without regard to its conflict of law principles. Any disputes arising from these
                        Terms or your use of the services will be subject to the exclusive jurisdiction of the state and
                        federal courts located in Pennsylvania.
                    </p>

                    <h2 className="mt-10 text-2xl font-semibold text-gray-900">9. Changes to the Terms of Service</h2>
                    <p className="mt-4 text-base leading-7 text-gray-600">
                        WixenCo LLC reserves the right to modify these Terms at any time. Any changes will be effective
                        immediately upon posting on our website. Your continued use of the services after such changes
                        are posted will constitute your agreement to the modified Terms.
                    </p>

                    <h2 className="mt-10 text-2xl font-semibold text-gray-900">10. Contact Information</h2>
                    <p className="mt-4 text-base leading-7 text-gray-600">
                        If you have any questions about these Terms, please contact us at:
                    </p>
                    <p className="mt-4 text-base leading-7 text-gray-600">
                        WixenCo LLC
                        ryan@wixenco.com
                    </p>
                </div>
            </main>
            <Footer/>
        </>
    );
}
