import { CheckCircleIcon, InformationCircleIcon } from '@heroicons/react/20/solid';
import { Helmet } from 'react-helmet';
import Header from "../../../components/Header";
import React from "react";

export default function ChristmasArticle() {
    return (
        <div className="bg-white px-6 pb-8 lg:px-8">
            <Helmet>
                <title>West Chester Christmas Parade - WixenCo Web Design & SEO</title>
                <meta
                    name="description"
                    content="Join us for the West Chester Christmas Parade, a cherished tradition that lights up the holiday season in West Chester, PA. Discover the magic of the parade, tree lighting, and other festive events during the Chester County Hospital Lights Up Holiday Weekends."
                />
            </Helmet>
            <Header/>
            <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
                <p className="text-base font-semibold leading-7 text-indigo-600">Event Overview</p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    West Chester Christmas Parade: Celebrating the Season in Style
                </h1>
                <p className="mt-6 text-xl leading-8">
                    West Chester is ready to light up the holiday season with the Chester County Hospital Lights Up Holiday Weekends, culminating in the spectacular West Chester Christmas Parade.
                </p>
                <figure className="mt-16">
                    <img
                        alt="West Chester Christmas Parade"
                        src="https://wixenco.s3.amazonaws.com/parade-lg.webp"
                        className="aspect-video rounded-xl bg-gray-50 object-cover"
                    />
                    <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
                        <InformationCircleIcon aria-hidden="true" className="mt-0.5 h-5 w-5 flex-none text-gray-300"/>
                        The West Chester Christmas Parade is a must-see event for the entire community.
                    </figcaption>
                </figure>
                <div className="mt-10 max-w-2xl">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Holiday Weekend Festivities</h2>
                    <p className="mt-6">
                        The holiday magic begins on November 29, 2024, and continues through January 1, 2025, with a series of festive events. The Annual Tree Lighting Ceremony kicks off the main events on December 6th, followed by the iconic West Chester Christmas Parade.
                    </p>
                    <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
                        <li className="flex gap-x-3">
                            <CheckCircleIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600"/>
                            <span>
                <strong className="font-semibold text-gray-900">Tree Lighting Ceremony.</strong> Join us on Friday, December 6th, at 6:30 pm for the Annual Tree Lighting Ceremony, sponsored by Lasko Products, LLC. Watch as the town square comes alive with twinkling lights and holiday cheer.
            </span>
                        </li>
                        <li className="flex gap-x-3">
                            <CheckCircleIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600"/>
                            <span>
                <strong className="font-semibold text-gray-900">West Chester Christmas Parade.</strong> The parade starts at 7:00 pm on December 6th, featuring dazzling floats, marching bands, and Santa Claus, sponsored by The Chester County Hospital Penn Medicine.
            </span>
                        </li>
                    </ul>

                    <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Photos with Santa and More Holiday Fun</h2>
                    <p className="mt-6">
                        The holiday cheer doesn’t end with the parade. On Saturday, December 14th, from 2:00 pm to 4:00 pm, children of all ages can have their photos taken with Santa at M&T Bank, thanks to the sponsorship of M&T Bank. Additionally, the annual WSFS Bank Toy Drive & Breakfast (date to be announced) will offer a wonderful opportunity to give back to the community during this season of giving.
                    </p>

                    <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Recurring Holiday Events</h2>
                    <p className="mt-6">
                        Throughout the Lights Up Holiday Weekends, West Chester will host a variety of recurring events that capture the spirit of the season. The Professional Gingerbread House Competition, running from November 29th to January 1st, invites local bakers to showcase their creative confectionery skills. Sponsored by Delphi Wealth Management, this competition is a feast for the eyes and a celebration of holiday tradition.
                    </p>
                    <p className="mt-8">
                        The Making Spirits Bright Holiday Music Series will fill the air with festive melodies from November 29th to December 20th, sponsored by Oakbourne Advisors. Meanwhile, Santa on the Fire Truck will delight children and adults alike, as Santa makes his rounds through the town from November 29th to December 20th, courtesy of Tolsdorf Oil Lube Express. And let’s not forget the Balladeer Carolers, who will be spreading holiday cheer with their beautiful caroling, sponsored by The West Chester Downtown Foundation.
                    </p>

                    <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Don’t Miss: The 5th Annual Christkindlmarkt</h2>
                    <p className="mt-6">
                        Another highlight of the season is the 5th Annual Christkindlmarkt on Saturday, December 14th. Presented by The Chester County Art Association and Downtown West Chester, this traditional holiday market offers a unique shopping experience with local artisans, festive foods, and holiday crafts. It’s the perfect place to find one-of-a-kind gifts and soak in the holiday atmosphere.
                    </p>

                    <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Join the Celebration!</h2>
                    <p className="mt-6">
                        West Chester’s holiday events are a celebration of community, tradition, and the joy of the season. Whether you’re attending the parade, visiting Santa, or enjoying the music and lights, there’s something for everyone to enjoy. Mark your calendars and join us for a holiday season that promises to be unforgettable!
                    </p>

                    <p className="mt-8">
                        This year’s West Chester Christmas Parade and the accompanying events are sure to light up your holiday season with joy, laughter, and lasting memories. Don’t miss out on the fun—come and be part of the magic in West Chester!
                    </p>
                </div>
            </div>
        </div>
    );
}
