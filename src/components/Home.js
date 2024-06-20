import React, { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

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
            <header className="absolute inset-x-0 top-0 z-50 lg:top-8">
                <nav className="flex items-center justify-between p-4 lg:px-8" aria-label="Global">
                    <div className="flex items-center lg:flex-1">
                        <a href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">WixenCo</span>
                            <img
                                className="h-12 w-auto"
                                src="https://wixenco.s3.amazonaws.com/ryan%40wixenco.com.svg"
                                alt="WixenCo Logo"
                            />
                        </a>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md text-gray-700"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                        {navigation.map((item) => (
                            <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                                {item.name}
                            </a>
                        ))}
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    </div>
                </nav>
                <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)}>
                    <div className="fixed inset-0 z-50" />
                    <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-3 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <a href="/" className="-m-1.5 p-1.5">
                                <span className="sr-only">WixenCo</span>
                                <img
                                    className="h-32 w-auto"
                                    src="https://wixenco.s3.amazonaws.com/ryan%40wixenco.com.svg"
                                    alt="WixenCo Logo"
                                />
                            </a>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base lg:text-lg font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </DialogPanel>
                </Dialog>
            </header>

            <div className="relative isolate pt-4 sm:pt-14">
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
                <div className="mx-auto max-w-7xl px-6 py-16 sm:py-32 lg:py-40 lg:flex lg:items-center lg:gap-x-10 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
                        <h1 className="mt-10 max-w-lg text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                            A <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-purple-500">Freelance</span> Web Developer Crafting Websites That Tell Your Story
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            I specialize in creating unique, tailored websites that effectively communicate your brand's narrative and engage your audience.
                        </p>
                        <div className="mt-10 flex items-center gap-x-6">
                            <a
                                href="#contact"
                                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Contact Me
                            </a>
                            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                                Learn more <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>
                    <div className="mt-8 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow flex justify-center">
                        <img src="https://wixenco.s3.amazonaws.com/moonman2.svg" alt="Moonman" className="hidden lg:block w-[22.875rem] max-w-full drop-shadow-xl" />
                        <img src="https://wixenco.s3.amazonaws.com/moonman.svg" alt="Moonman" className="lg:hidden w-[22.875rem] max-w-full drop-shadow-xl" />
                    </div>
                </div>
            </div>
        </div>
    )
}




