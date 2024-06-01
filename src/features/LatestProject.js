import React from 'react';

import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

const features = [
    {
        name: 'Testimonial section.',
        description:
            'Added testimonial section to show real success stories and genuine feedback showcasing the impact of their work.',
        icon: CloudArrowUpIcon,
    },
    {
        name: 'Google Maps',
        description: 'Enhanced customer experience with interactive, location-based features by integrating Google Maps API into their website for their service area.',
        icon: LockClosedIcon,
    },
    {
        name: 'Admin tools',
        description: 'Added admin capabilities to create and organize customers, track leads, and monitor interactions for seamless operation and growth.',
        icon: ServerIcon,
    },
]

export default function LatestProject() {
    return (
        <div className="overflow-hidden bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:ml-auto lg:pl-4 lg:pt-4">
                        <div className="lg:max-w-lg">
                            <h2 className="text-base font-semibold leading-7 text-indigo-600">
                                <a href="https://www.wyattelevator.com">wyattelevator.com</a>
                            </h2>
                            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Latest
                                Project Highlight</p>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                Transforming a local business's online presence with a custom-built, SEO-optimized
                                website featuring Google services integration, custom map, and robust admin tools.
                            </p>
                            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                                {features.map((feature) => (
                                    <div key={feature.name} className="relative pl-9">
                                        <dt className="inline font-semibold text-gray-900">
                                            <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                                                          aria-hidden="true"/>
                                            {feature.name}
                                        </dt>
                                        {' '}
                                        <dd className="inline">{feature.description}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                    <div className="flex items-start justify-end lg:order-first">
                        <img
                            src="https://wixenco.s3.amazonaws.com/wyatt-last-project.png"
                            alt="Product screenshot"
                            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                            width={2432}
                            height={1442}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
