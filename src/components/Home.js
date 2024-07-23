import React, { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Header from './Header';
import { Helmet } from 'react-helmet';

const navigation = [
    { name: 'Contact Me', href: '#contact' },
    { name: 'Services', href: '#services' },
    { name: 'Free Site Analysis', href: '/site-analysis' },
    { name: 'Blog', href: '/blog' },
];

export default function Home() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // Menu is closed by default

    return (
        <div className="bg-white">
            <Header></Header>
            <Helmet>
                <title>Web Design & SEO - West Chester, PA in Chester County - WixenCo</title>
                <meta
                    name="description"
                    content="WixenCo is a web design and SEO company based in West Chester, PA. We specialize in crafting unique, tailored websites that effectively communicate your brand's narrative and engage your audience. Let us help you captivate your audience with a website that tells your story and strengthens your connection with the community."
                />
                <meta property="og:title"
                      content="Web Design & SEO Services | WixenCo | West Chester, PA - Expertly crafting websites and boosting online presence in Chester County"/>
                <meta property="og:description"
                      content="Web Design & SEO Services | WixenCo | West Chester, PA - Elevate your business with expert web design and SEO services from WixenCo, based in Chester County. We specialize in crafting stunning websites and enhancing your online presence."/>
                <meta property="og:image" content="https://wixenco.s3.amazonaws.com/facebook-og8.png"/>
                <meta property="og:url" content="https://www.wixenco.com"/>
                <meta property="og:type" content="website"/>
            </Helmet>

            <div className="relative isolate pt-4 sm:pt-8"> {/* Reduced top padding */}
                <svg
                    className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                    aria-hidden="true"
                >
                    <defs>
                        <pattern
                            id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                            width={200}
                            height={200}
                            x="50%"
                            y={-1}
                            patternUnits="userSpaceOnUse"
                        >
                            <path d="M100 200V.5M.5 .5H200" fill="none" />
                        </pattern>
                    </defs>
                    <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                        <path
                            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                            strokeWidth={0}
                        />
                    </svg>
                    <rect width="100%" height="100%" strokeWidth={0} fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" />
                </svg>
                <div className="mx-auto max-w-7xl px-6 py-12 sm:py-20 lg:py-28 lg:flex lg:items-center lg:gap-x-10 lg:px-8"> {/* Adjusted padding */}
                    <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
                        <h1 className="max-w-lg text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                            A <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-purple-500">Web Design</span> Company Crafting Websites That Tell Your Story
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Based in the heart of West Chester, PA, we specialize in crafting unique, tailored websites that effectively communicate your brand's narrative and engage your audience. Let us help you captivate your audience with a website that tells your story and strengthens your connection with the community.
                        </p>
                        <div className="mt-10 flex items-center gap-x-6">
                            <a
                                href="#contact"
                                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Contact Us
                            </a>
                            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                                Learn more <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>
                    <div className="mt-8 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow flex justify-center">
                        <img src="https://wixenco.s3.amazonaws.com/moonman_homepage.webp" alt="Moonman" className="hidden lg:block w-[22.875rem] max-w-full drop-shadow-xl" />
                        <img src="https://wixenco.s3.amazonaws.com/moonman.svg" alt="Moonman" className="lg:hidden w-[22.875rem] max-w-full drop-shadow-xl" />
                    </div>
                </div>
            </div>
        </div>
    );
}





