import React from 'react';

import { CommandLineIcon, ChatBubbleLeftEllipsisIcon, TrophyIcon, ArrowTrendingUpIcon } from '@heroicons/react/24/outline'

const features = [
    {
        name: 'Custom Website Design and Development',
        description:
            'Craft unique, responsive websites with seamless user experiences, utilizing the latest technologies for robust, scalable full-stack development.',
        icon: CommandLineIcon,
    },
    {
        name: 'Search Engine Optimization (SEO)',
        description:
            'Enhance your website’s visibility with comprehensive audits, on-page and technical SEO, and strategic link building and content marketing.',
        icon: ArrowTrendingUpIcon,
    },
    {
        name: 'Chatbot Development and Integration',
        description:
            'Design AI-powered chatbots for automated customer support, lead generation, and real-time engagement, integrated with your existing business systems.',
        icon: ChatBubbleLeftEllipsisIcon,
    },
    {
        name: 'Google Services and Analytics',
        description:
            'Optimize Google My Business listings, manage Google Ads, and provide actionable insights through comprehensive Google Analytics setup and reporting.',
        icon: TrophyIcon,
    },
]

export default function Services() {
    return (
        <div id="services" className="bg-white py-24 sm:py-2">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-indigo-600">Our Top Services</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Elevate Your Digital Presence with Expert Solutions
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Discover our top-notch digital services designed to elevate your online presence. Our expert team
                        specializes in custom website design and development, advanced search engine optimization (SEO), innovative
                        chatbot development and integration, and comprehensive Google services and analytics. Enhance your brand's visibility, engage customers,
                        and drive growth with our tailored solutions. Contact us today to learn how we can help you succeed in the digital landscape.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative pl-16">
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
