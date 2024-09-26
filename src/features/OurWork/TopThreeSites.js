import React from 'react';

const features = [
    {
        name: 'SpeechTakesTwo.com',
        url: 'https://speechtakestwo.com',  // Add URL here
        description:
            'This website focuses on early childhood speech therapy, offering services for children under five years old. We crafted a playful yet professional design, making the information accessible to parents while highlighting the specialized expertise of the Speech Takes Two team.',
        imageSrc: 'https://wixenco.s3.amazonaws.com/feature-speech-2.webp',
        imageAlt: 'picture of speech takes two company website homepage.',
    },
    {
        name: 'WyattElevator.com',
        url: 'https://wyattelevator.com',  // Add URL here
        description:
            "For Wyatt Elevator, a commercial elevator service provider, we developed a sleek and modern site that reflects their commitment to safety and performance. The site is fully optimized for SEO, with a clean layout that highlights their services and expertise in the industry.",
        imageSrc: 'https://wixenco.s3.amazonaws.com/feature-wyatt.webp',
        imageAlt: 'picture of wyatt elevator company website homepage',
    },
    {
        name: 'LettysTavern.com',
        url: 'https://lettystavern.com',  // Add URL here
        description:
            'Letty\'s Tavern blends rich tradition with modern flair, and we brought that spirit to life online. The website captures the rustic charm of the tavern while providing easy access to menus, events, and reservation bookings. It’s designed to engage both locals and visitors alike.',
        imageSrc: 'https://wixenco.s3.amazonaws.com/feature-lettys.webp',
        imageAlt: 'picture of lettys tavern restaurant website homepage.',
    },
]

export default function TopThreeSites() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
                <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
                    <div className="max-w-3xl">
                        <h2 className="font-semibold text-gray-500">Wixen Company - Web Design</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Featured Projects</p>
                        <p className="mt-4 text-gray-500">
                            We take pride in building websites that reflect the unique stories of our clients. Here’s a look at some of the recent projects we’ve brought to life, each designed to showcase the individuality and vision of the businesses we serve.
                        </p>
                    </div>

                    <div className="mt-10 space-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16">
                        {features.map((feature) => (
                            <div
                                key={feature.name}
                                className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8"
                            >
                                <div className="mt-6 lg:col-span-5 lg:mt-0 xl:col-span-4">
                                    {/* Make the feature name a link */}
                                    <h3 className="text-lg font-medium text-gray-900">
                                        <a href={feature.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                            {feature.name}
                                        </a>
                                    </h3>
                                    <p className="mt-2 text-sm text-gray-500">{feature.description}</p>
                                </div>
                                <div className="flex-auto lg:col-span-7 xl:col-span-8">
                                    <div className="aspect-h-2 aspect-w-5 overflow-hidden rounded-lg bg-gray-100">
                                        <img alt={feature.imageAlt} src={feature.imageSrc} className="object-cover object-center" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

