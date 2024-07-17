'use client'

import React, { useState } from 'react';
import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
} from '@headlessui/react';
import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline';
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid';

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Contact Me', href: '#contact' },
    {
        name: 'Tools',
        children: [
            { name: 'Google Index Checker', href: '/seo-tools/google-index-checker' }
        ]
    },
    { name: 'Free Site Analysis', href: '/site-analysis' },
    { name: 'Blog', href: '/blog' },
];

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="bg-white mt-4 lg:mt-8"> {/* Add margin-top here */}
            <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                <div className="flex lg:flex-1">
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
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                    </button>
                </div>
                <PopoverGroup className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) =>
                        item.children ? (
                            <Popover key={item.name} className="relative">
                                <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                                    {item.name}
                                    <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
                                </PopoverButton>

                                <PopoverPanel
                                    transition
                                    className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                                >
                                    <div className="p-4">
                                        {item.children.map((child) => (
                                            <div
                                                key={child.name}
                                                className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                                            >
                                                <div className="flex-auto">
                                                    <a href={child.href} className="block font-semibold text-gray-900">
                                                        {child.name}
                                                        <span className="absolute inset-0" />
                                                    </a>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </PopoverPanel>
                            </Popover>
                        ) : (
                            <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                                {item.name}
                            </a>
                        )
                    )}
                </PopoverGroup>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                </div>
            </nav>
            <Dialog open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} className="lg:hidden">
                <div className="fixed inset-0 z-10" />
                <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                        </a>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) =>
                                    item.children ? (
                                        <Disclosure as="div" key={item.name} className="-mx-3">
                                            <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                                {item.name}
                                                <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
                                            </DisclosureButton>
                                            <DisclosurePanel className="mt-2 space-y-2">
                                                {item.children.map((child) => (
                                                    <DisclosureButton
                                                        key={child.name}
                                                        as="a"
                                                        href={child.href}
                                                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                                    >
                                                        {child.name}
                                                    </DisclosureButton>
                                                ))}
                                            </DisclosurePanel>
                                        </Disclosure>
                                    ) : (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        >
                                            {item.name}
                                        </a>
                                    )
                                )}
                            </div>
                            <div className="py-6">
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    );
}


