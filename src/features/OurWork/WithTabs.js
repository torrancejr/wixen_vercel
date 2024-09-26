import React from 'react'
import { Fragment } from 'react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'

const tabs = [
    {
        name: 'Design',
        features: [
            {
                name: 'Modern and Responsive',
                description:
                    'Your website’s design is the first thing visitors see. At Wixen Company, we ensure a modern, clean, and responsive design that looks great on all devices, from desktops to mobile. We prioritize user experience and intuitive navigation to keep visitors engaged.',
                imageSrc: 'https://wixenco.s3.amazonaws.com/feature-page-design.webp',
                imageAlt: 'picture with boxes background with the word design in the middle.',
            },
        ],
    },
    {
        name: 'Performance',
        features: [
            {
                name: 'Optimized for speed',
                description:
                    'A fast-loading website is crucial for user retention and SEO. We focus on optimizing every aspect of your site, from image compression to code efficiency, ensuring it runs smoothly and quickly for every visitor, no matter where they are.',
                imageSrc: 'https://wixenco.s3.amazonaws.com/feature-page-audit-4.webp',
                imageAlt:
                    'picture of website audit for page speed performance.',
            },
        ],
    },
    {
        name: 'SEO',
        features: [
            {
                name: 'Built with Search in Mind',
                description:
                    "We don’t just design websites, we make sure they are found. Our SEO-optimized structure ensures that search engines can easily crawl your site, improving your chances of ranking higher and attracting more organic traffic.",
                imageSrc: 'https://wixenco.s3.amazonaws.com/SEO.webp',
                imageAlt: 'picture of play cassette tape with the word SEO meaning Search Engine Optimization.',
            },
        ],
    },
    {
        name: 'Security',
        features: [
            {
                name: "Safe and Secure",
                description:
                    'Your website’s security is our priority. We implement best practices, including SSL certificates, regular updates, and secure code, to protect your site from potential threats, giving both you and your users peace of mind.',
                imageSrc: 'https://wixenco.s3.amazonaws.com/security.webp',
                imageAlt: 'digital human face with the word security overlayed.',
            },
        ],
    },
]

export default function Example() {
    return (
        <div className="bg-white">
            <section aria-labelledby="features-heading" className="mx-auto max-w-7xl py-32 sm:px-2 lg:px-8">
                <div className="mx-auto max-w-2xl px-4 lg:max-w-none lg:px-0">
                    <div className="max-w-3xl">
                        <h2 id="features-heading" className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Our Work
                        </h2>
                        <p className="mt-4 text-gray-500">
                            At Wixen Company, we craft websites that tell your story. Our portfolio showcases a variety of projects where we've helped businesses establish a strong online presence. From sleek designs to optimized performance, we ensure each site reflects the unique voice and vision of our clients.
                        </p>
                    </div>

                    <TabGroup className="mt-4">
                        <div className="-mx-4 flex overflow-x-auto sm:mx-0">
                            <div className="flex-auto border-b border-gray-200 px-4 sm:px-0">
                                <TabList className="-mb-px flex space-x-10">
                                    {tabs.map((tab) => (
                                        <Tab
                                            key={tab.name}
                                            className="whitespace-nowrap border-b-2 border-transparent py-6 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 data-[selected]:border-indigo-500 data-[selected]:text-indigo-600"
                                        >
                                            {tab.name}
                                        </Tab>
                                    ))}
                                </TabList>
                            </div>
                        </div>

                        <TabPanels as={Fragment}>
                            {tabs.map((tab) => (
                                <TabPanel key={tab.name} className="space-y-16 pt-10 lg:pt-16">
                                    {tab.features.map((feature) => (
                                        <div key={feature.name} className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8">
                                            <div className="mt-6 lg:col-span-5 lg:mt-0">
                                                <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                                                <p className="mt-2 text-sm text-gray-500">{feature.description}</p>
                                            </div>
                                            <div className="lg:col-span-7">
                                                <div className="aspect-h-1 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:aspect-h-2 sm:aspect-w-5">
                                                    <img alt={feature.imageAlt} src={feature.imageSrc} className="object-cover object-center" />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </TabPanel>
                            ))}
                        </TabPanels>
                    </TabGroup>
                </div>
            </section>
        </div>
    )
}
