import { CheckCircleIcon, InformationCircleIcon } from '@heroicons/react/20/solid';
import { Helmet } from 'react-helmet';
import Header from "../../../components/Header";
import React from "react";

export default function GoogleBusinessProfileArticle() {
    const ldJson = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "How to Create a Google Business Profile: A Step-by-Step Guide",
        "author": {
            "@type": "Person",
            "name": "Ryan Torrance",
            "url": "https://www.wixenco.com"
        },
        "publisher": {
            "@type": "Organization",
            "name": "WixenCo",
            "logo": {
                "@type": "ImageObject",
                "url": "https://wixenco.s3.amazonaws.com/wixen-logo.png"
            }
        },
        "datePublished": "2024-09-25",
        "dateModified": "2024-09-25",
        "image": "https://wixenco.s3.amazonaws.com/googlebusiness.webp",
        "articleSection": "Digital Marketing",
        "url": "https://www.wixenco.com/blog/how-to-create-google-business-profile",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.wixenco.com/blog/how-to-create-google-business-profile"
        },
        "description": "Learn how to create a Google Business Profile with this step-by-step guide. Optimize your online presence and attract more customers by making your business visible on Google Maps and local search results.",
        "keywords": "Google Business Profile, local SEO, online presence, small business marketing, Google My Business",
        "articleBody": "As a business owner, having a strong online presence is crucial for attracting customers. One of the most effective ways to ensure your business is visible in local searches is by creating a Google Business Profile. This profile gives potential customers essential information about your company, such as your address, contact information, services, and reviews. In this article, we’ll walk you through the steps to create your Google Business Profile and optimize it for success."
    };

    return (
        <div className="bg-white px-6 pb-8 lg:px-8">
            <Helmet>
                <title>How to Create a Google Business Profile: A Step-by-Step Guide | WixenCo</title>
                <meta
                    name="description"
                    content="Learn how to create a Google Business Profile with this step-by-step guide. Optimize your online presence and attract more customers by making your business visible on Google Maps and local search results."
                />
                <script type="application/ld+json">
                    {JSON.stringify(ldJson)}
                </script>
            </Helmet>
            <Header/>
            <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
                <p className="text-base font-semibold leading-7 text-indigo-600">Digital Marketing</p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    How to Create a Google Business Profile: A Step-by-Step Guide
                </h1>
                <figure className="mt-16 flex flex-col items-center">
                    <img
                        alt="Google Business Profile"
                        src="https://wixenco.s3.amazonaws.com/googlebusiness.webp"
                        className="aspect-video rounded-xl bg-gray-50 object-cover"
                    />
                    <figcaption className="mt-4 flex items-center gap-x-2 text-sm leading-6 text-gray-500">
                        <InformationCircleIcon aria-hidden="true" className="mt-0.5 h-5 w-5 flex-none text-gray-300"/>
                        Enhance your online presence with a Google Business Profile.
                    </figcaption>
                </figure>
                <p className="mt-6 text-xl leading-8">
                    As a business owner, having a strong online presence is crucial for attracting customers. One of the most effective ways to ensure your business is visible in local searches is by creating a Google Business Profile. This profile gives potential customers essential information about your company, such as your address, contact information, services, and reviews. In this article, we’ll walk you through the steps to create your Google Business Profile and optimize it for success.
                </p>
                <h2 className="mt-10 text-2xl font-bold tracking-tight text-gray-900">Why Your Business Needs a Google Business Profile</h2>
                <p className="mt-6">
                    A Google Business Profile helps your business show up in Google Maps and local search results when users search for relevant services or products. If you want customers to find you easily online, it’s vital to have a well-maintained profile. Not only does it improve your visibility, but it also helps build trust with potential clients by showing reviews, hours of operation, and contact details at a glance.
                </p>
                <h2 className="mt-10 text-2xl font-bold tracking-tight text-gray-900">Step-by-Step Guide: How to Create a Google Business Profile</h2>
                <h3 className="mt-8 text-xl font-semibold text-gray-900">1. Sign Up for a Google Account</h3>
                <p className="mt-4">
                    To begin, you’ll need a Google account. If you already have one, sign in. If not, create a new account at <a href="https://business.google.com/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Google Business</a>.
                </p>
                <h3 className="mt-8 text-xl font-semibold text-gray-900">2. Go to Google Business Profile</h3>
                <p className="mt-4">
                    Visit the <a href="https://business.google.com/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Google Business Profile</a> page and click <strong>Manage Now</strong> to start setting up your profile.
                </p>
                <h3 className="mt-8 text-xl font-semibold text-gray-900">3. Enter Your Business Name</h3>
                <p className="mt-4">
                    Type in your business name, and if it doesn’t exist yet, select <strong>Create a business with this name</strong>. For example, if you're a web design business like WixenCo, enter your business name exactly as you want it to appear in search results.
                </p>
                <h3 className="mt-8 text-xl font-semibold text-gray-900">4. Choose Your Business Category</h3>
                <p className="mt-4">
                    Select the category that best fits your business. Google will suggest categories based on what you type. For example, for WixenCo, you could choose “Web Design” or “SEO Services.” The category you select will help Google show your business in relevant searches.
                </p>
                <h3 className="mt-8 text-xl font-semibold text-gray-900">5. Add Your Business Location</h3>
                <p className="mt-4">
                    If you have a physical office or store that customers can visit, enter the address. If you don’t, you can choose to list your business as a service-area business. This is perfect if you offer services like web design or SEO in specific areas but don’t have a physical storefront.
                </p>
                <h3 className="mt-8 text-xl font-semibold text-gray-900">6. Specify Service Areas</h3>
                <p className="mt-4">
                    If your business doesn’t have a physical location, add the areas you serve. For instance, WixenCo could list West Chester, PA, and the surrounding areas. This helps Google show your business to people in your target area.
                </p>
                <h3 className="mt-8 text-xl font-semibold text-gray-900">7. Add Contact Information</h3>
                <p className="mt-4">
                    Enter your business phone number and website URL. This is crucial for customers to contact you directly. Make sure to double-check the details to avoid missed opportunities.
                </p>
                <h3 className="mt-8 text-xl font-semibold text-gray-900">8. Verify Your Business</h3>
                <p className="mt-4">
                    Google will ask you to verify your business by sending a postcard with a verification code to your address, or you may be able to verify via phone or email. Follow the instructions provided to complete the verification process.
                </p>
                <h3 className="mt-8 text-xl font-semibold text-gray-900">9. Optimize Your Google Business Profile</h3>
                <p className="mt-4">
                    Once verified, you can add more details to enhance your profile:
                </p>
                <ul role="list" className="mt-4 space-y-4 text-gray-600">
                    <li className="flex gap-x-3">
                        <CheckCircleIcon aria-hidden="true" className="h-5 w-5 flex-none text-indigo-600"/>
                        <span><strong>Business Hours:</strong> Keep these updated, especially if you close on holidays or have special hours.</span>
                    </li>
                    <li className="flex gap-x-3">
                        <CheckCircleIcon aria-hidden="true" className="h-5 w-5 flex-none text-indigo-600"/>
                        <span><strong>Photos:</strong> Upload high-quality images that showcase your work or location.</span>
                    </li>
                    <li className="flex gap-x-3">
                        <CheckCircleIcon aria-hidden="true" className="h-5 w-5 flex-none text-indigo-600"/>
                        <span><strong>Services:</strong> List the services you offer, such as web design, SEO, or custom software development.</span>
                    </li>
                </ul>
                <h3 className="mt-8 text-xl font-semibold text-gray-900">10. Manage Your Profile Regularly</h3>
                <p className="mt-4">
                    Keep your profile updated by responding to reviews, posting updates, and ensuring all information is current. Google rewards businesses that are actively engaged with better visibility in search results.
                </p>
                <h2 className="mt-10 text-2xl font-bold tracking-tight text-gray-900">SEO Tips for Optimizing Your Google Business Profile</h2>
                <p className="mt-6">
                    Creating a Google Business Profile is just the start. To maximize your visibility, here are a few key SEO tips:
                </p>
                <ul role="list" className="mt-4 space-y-4 text-gray-600">
                    <li className="flex gap-x-3">
                        <CheckCircleIcon aria-hidden="true" className="h-5 w-5 flex-none text-indigo-600"/>
                        <span><strong>Use Keywords:</strong> Ensure that your business description includes relevant keywords, like “web design in West Chester” or “SEO services for small businesses.” But make sure the keywords flow naturally and avoid keyword stuffing.</span>
                    </li>
                    <li className="flex gap-x-3">
                        <CheckCircleIcon aria-hidden="true" className="h-5 w-5 flex-none text-indigo-600"/>
                        <span><strong>Encourage Reviews:</strong> Google favors businesses with positive reviews. Ask your satisfied clients to leave feedback on your profile, and respond to reviews to show you value your customers.</span>
                    </li>
                    <li className="flex gap-x-3">
                        <CheckCircleIcon aria-hidden="true" className="h-5 w-5 flex-none text-indigo-600"/>
                        <span><strong>Add Regular Updates:</strong> Just like you’d post on social media, use your Google Business Profile to share updates, offers, or new blog posts.</span>
                    </li>
                    <li className="flex gap-x-3">
                        <CheckCircleIcon aria-hidden="true" className="h-5 w-5 flex-none text-indigo-600"/>
                        <span><strong>Link to Your Website:</strong> Ensure your website link is correct. You can also include direct links to key pages, like your services or portfolio, within your Google Business Profile posts.</span>
                    </li>
                    <li className="flex gap-x-3">
                        <CheckCircleIcon aria-hidden="true" className="h-5 w-5 flex-none text-indigo-600"/>
                        <span><strong>Track Performance:</strong> Use Google My Business Insights to monitor how often people are finding you, and optimize based on that data.</span>
                    </li>
                </ul>
                <h2 className="mt-10 text-2xl font-bold tracking-tight text-gray-900">Need Help Optimizing Your Online Presence?</h2>
                <p className="mt-6">
                    At WixenCo, we specialize in helping small businesses boost their online presence through effective web design and SEO services. Whether you need help creating your Google Business Profile or optimizing your site for local searches, we’ve got you covered. <a href="/#contact" className="text-indigo-600 hover:underline">Contact us</a> today to get started!
                </p>
                <p className="mt-8">
                    <strong>Contact WixenCo:</strong>
                </p>
                <ul>
                    <li><strong>Email:</strong> <a href="mailto:ryan@wixenco.com">ryan@wixenco.com</a></li>
                    <li><strong>Contact Us:</strong> <a href="/#contact" target="_blank" rel="noopener noreferrer">Contact Form</a></li>
                </ul>
            </div>
        </div>
    );
}
