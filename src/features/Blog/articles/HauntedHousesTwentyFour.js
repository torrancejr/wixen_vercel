import { CheckCircleIcon, InformationCircleIcon } from '@heroicons/react/20/solid';
import { Helmet } from 'react-helmet';
import Header from "../../../components/Header";
import React from "react";

export default function TopHauntedHousesInChesterCounty() {
    const ldJson = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Top 10 Haunted Houses in Chester County Ranked",
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
        "datePublished": "2024-09-09",
        "dateModified": "2024-09-09",
        "image": "https://wixenco.s3.amazonaws.com/hauntedhouse.webp",
        "articleSection": "Halloween Attractions",
        "url": "https://www.wixenco.com/blog/top-10-haunted-houses-chester-county",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.wixenco.com/blog/top-10-haunted-houses-chester-county"
        },
        "description": "Explore the top 10 haunted houses in Chester County for the spookiest Halloween experience. Find out which haunted attractions are ranked highest this year.",
        "keywords": "haunted houses, Halloween, Chester County, PA haunted attractions, WixenCo, top haunted houses",
        "articleBody": "As Halloween approaches on Thursday, October 31st, Chester County offers some of the scariest haunted houses in the region. Discover the top 10 haunted attractions to visit this spooky season."
    };

    const hauntedHouses = [
        {
            rank: 10,
            name: 'Spook Haven Haunted House',
            description: 'Spook Haven offers a uniquely creative haunted experience that caters to those seeking eerie fun without over-the-top frights. With innovative themes and skilled actors, it’s a great option for a spooky night out.',
            location: 'Mill Hall, PA',
            rating: 'Google Rating: 4.4/5',
            link: 'https://www.spookhaven.com/'
        },
        {
            rank: 9,
            name: 'Valley of Fear',
            description: 'Famous for its haunted hayrides and creepy walk-through trails, Valley of Fear brings the scares in a thrilling outdoor setting. It’s perfect for groups who want a mix of adventure and fright.',
            location: 'Feasterville, PA',
            rating: 'Google Rating: 4.2/5',
            link: 'https://valleyoffear.com/'
        },
        {
            rank: 8,
            name: 'Lincoln Mill Haunted House',
            description: 'This haunted attraction transforms an old industrial mill into a maze of horror. The combination of atmospheric sets and the mill’s history gives this haunted house a unique and chilling vibe.',
            location: 'Manayunk, PA',
            rating: 'Google Rating: 4.5/5',
            link: 'https://lincolnmillhaunt.com/'
        },
        {
            rank: 7,
            name: 'Sleepy Hollow Haunted Acres',
            description: 'Inspired by the legendary tale of the Headless Horseman, Sleepy Hollow delivers a classic Halloween experience. A mix of haunted hayrides and terrifying walk-through attractions makes this one perfect for a night of spooky entertainment.',
            location: 'Newtown, PA',
            rating: 'Google Rating: 4.3/5',
            link: 'https://www.sleepyhollowhayride.com/'
        },
        {
            rank: 6,
            name: 'Jason’s Woods',
            description: 'Offering a variety of attractions, from haunted hayrides to horror mazes, Jason’s Woods is known for delivering a full evening of scares. Its wide range of activities makes it a popular choice for both casual and hardcore horror fans.',
            location: 'Lancaster, PA',
            rating: 'Google Rating: 4.6/5',
            link: 'https://jasonswoods.com/'
        },
        {
            rank: 5,
            name: 'Frightland',
            description: 'Although just outside Chester County, Frightland remains a premier Halloween destination. With eight unique haunted attractions and a carnival atmosphere, it’s a must-visit for anyone seeking an all-night horror adventure.',
            location: 'Middletown, DE',
            rating: 'Google Rating: 4.7/5',
            link: 'https://frightland.com/'
        },
        {
            rank: 4,
            name: 'Field of Screams',
            description: 'This haunted attraction delivers a powerful mix of terrifying haunted houses, horror-themed mazes, and a chilling hayride. Its intensity makes it a standout choice for thrill-seekers.',
            location: 'Mountville, PA',
            rating: 'Google Rating: 4.8/5',
            link: 'https://fieldofscreams.com/'
        },
        {
            rank: 3,
            name: 'Bates Motel',
            description: 'With incredible set designs and movie-quality special effects, Bates Motel is known for bringing Hollywood horror to life. The hauntingly realistic atmosphere will leave you on edge from the moment you enter.',
            location: 'Glen Mills, PA',
            rating: 'Google Rating: 4.6/5',
            link: 'https://thebatesmotel.com/'
        },
        {
            rank: 2,
            name: 'Pennhurst Asylum',
            description: 'Set in a real, abandoned asylum, Pennhurst taps into the location\'s dark history to provide a truly bone-chilling experience. Its immersive atmosphere and the realism of the setting make it one of the scariest haunted houses in the area.',
            location: 'Spring City, PA',
            rating: 'Google Rating: 4.7/5',
            link: 'https://pennhurstasylum.com/'
        },
        {
            rank: 1,
            name: 'Eastern State Penitentiary Halloween Nights',
            description: 'Ranked as the top haunted attraction, Eastern State Penitentiary is set in a real, crumbling prison. Its historic past combined with elaborate haunted setups creates an unforgettable experience for those brave enough to walk its dark corridors.',
            location: 'Philadelphia, PA',
            rating: 'Google Rating: 4.8/5',
            link: 'https://www.easternstate.org/'
        }
    ];

    return (
        <div className="bg-white px-6 pb-8 lg:px-8">
            <Helmet>
                <title>Top 10 Haunted Houses in Chester County Ranked | WixenCo</title>
                <meta
                    name="description"
                    content="Explore the top 10 haunted houses in Chester County for the spookiest Halloween experience. Find out which haunted attractions are ranked highest this year."
                />
                <script type="application/ld+json">
                    {JSON.stringify(ldJson)}
                </script>
            </Helmet>
            <Header />
            <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
                <p className="text-base font-semibold leading-7 text-indigo-600">Halloween Attractions</p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Top 10 Haunted Houses in Chester County Ranked
                </h1>
                <p className="mt-6 text-xl leading-8">
                    Halloween is just around the corner, landing on <strong>Thursday, October 31st</strong> this year,
                    and it’s the perfect time to explore the most terrifying haunted houses in and around Chester
                    County, Pennsylvania. Whether you're after spine-chilling experiences or just some spooky fun, we've
                    ranked the top haunted attractions for you. Based on both their fear factor and Google reviews,
                    here’s the ultimate guide to the top 10 haunted houses.
                </p>
                <figure className="mt-16 flex flex-col items-center">
                    <img
                        alt="Top haunted houses in Chester County"
                        src="https://wixenco.s3.amazonaws.com/hauntedhouse.webp"
                        className="aspect-video rounded-xl bg-gray-50 object-cover"
                    />
                    <figcaption className="mt-4 flex items-center gap-x-2 text-sm leading-6 text-gray-500">
                        <InformationCircleIcon aria-hidden="true" className="mt-0.5 h-5 w-5 flex-none text-gray-300"/>
                        Discover the top haunted houses for Halloween!
                    </figcaption>
                </figure>

                {hauntedHouses.map((house) => (
                    <div key={house.rank} className="mt-10">
                        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                            {house.rank}. <a href={house.link} target="_blank" rel="noopener noreferrer"
                                             className="text-indigo-600 hover:underline">{house.name}</a>
                        </h2>
                        <p className="mt-4">{house.description}</p>
                        <p className="italic mt-2">{house.location}</p>
                        <p className="mt-2">{house.rating}</p>
                    </div>
                ))}

                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Why Haunted Houses Matter for
                    Halloween Fun</h2>
                <p className="mt-6">
                    Haunted houses have become a central part of Halloween celebrations, offering thrilling experiences
                    for all ages. If you’re in Chester County or nearby, these top-rated attractions promise an
                    unforgettable Halloween night.
                </p>
                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Plan Your Visit with WixenCo</h2>
                <p className="mt-6">
                    WixenCo is proud to serve Chester County and help you get in the Halloween spirit. If you're looking
                    to create an SEO-friendly, visually stunning website for your haunted attraction or any other
                    business, <a href="https://www.wixenco.com" target="_blank" rel="noopener noreferrer"
                                 className="text-indigo-600 hover:underline">contact us</a> for expert web design and
                    SEO services.
                </p>
                <p className="mt-8">
                    <strong>Contact WixenCo:</strong>
                </p>
                <ul>
                    <li><strong>Email:</strong> <a href="mailto:ryan@wixenco.com">ryan@wixenco.com</a></li>
                    <li><strong>Contact Us:</strong> <a href="/#contact" target="_blank" rel="noopener noreferrer">Contact
                        Form</a></li>
                </ul>
            </div>
        </div>
    );
}

