import { CheckCircleIcon, InformationCircleIcon } from '@heroicons/react/20/solid';
import { Helmet } from 'react-helmet';
import Header from "../../../components/Header";
import React from "react";

export default function EventArticle() {
    return (
        <div className="bg-white px-6 pb-8 lg:px-8">
            <Helmet>
                <title>Trike Race - West Chester, PA in Chester County - WixenCo Web Design & SEO </title>
                <meta
                    name="description"
                    content="WixenCo is a web design and SEO company based in West Chester, PA. We specialize in crafting unique, tailored websites that effectively communicate your brand's narrative and engage your audience. Let us help you captivate your audience with a website that tells your story and strengthens your connection with the community."
                />
            </Helmet>
            <Header/>
            <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
                <p className="text-base font-semibold leading-7 text-indigo-600">Event Announcement</p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Tour-de-Trike: An Adult Tricycle Relay Race Tournament
                </h1>
                <p className="mt-6 text-xl leading-8">
                    The Greater West Chester Chamber of Commerce, Downtown West Chester & Tolsdorf Oil Lube Express
                    present the "Tour-de-Trike: An Adult Tricycle Relay Race Tournament."
                </p>
                <figure className="mt-16">
                    <img
                        alt="Tour-de-Trike Event"
                        src="https://wixenco.s3.amazonaws.com/trike.webp"
                        className="aspect-video rounded-xl bg-gray-50 object-cover"
                    />
                    <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
                        <InformationCircleIcon aria-hidden="true" className="mt-0.5 h-5 w-5 flex-none text-gray-300"/>
                        Join us for an exciting tricycle relay race tournament!
                    </figcaption>
                </figure>
                <div className="mt-10 max-w-2xl">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">What is the Tour-de-Trike?</h2>
                    <p className="mt-6">
                        Remember the excitement of the "Trike Challenge" from the past Criterium bike races in Downtown
                        West Chester? We're thrilled to bring you our updated version, the "Tour-de-Trike," with
                        Tolsdorf Oil Lube Express proudly sponsoring the event! Don't miss out on this reimagined
                        favorite! I will update this if I hear any word on the Teams.
                    </p>
                    <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
                        <li className="flex gap-x-3">
                            <CheckCircleIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600"/>
                            <span>
                <strong className="font-semibold text-gray-900">Event Format.</strong> Get ready for a thrilling bracket-style tournament where teams of five members (ages 18 and up) will race adult-sized tricycles. Each team member will complete one segment of the race, competing for the ultimate trophy.
            </span>
                        </li>
                        <li className="flex gap-x-3">
                            <CheckCircleIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600"/>
                            <span>
                <strong className="font-semibold text-gray-900">Teams of 5 Members.</strong> Teams will consist of 5 members (18+) who will each complete 1 leg of the race.
            </span>
                        </li>
                    </ul>
                    <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">When & Where is it?</h2>
                    <p className="mt-6">
                        Join us on Gay Street, between Church St. and Darlington St., for the Tour-de-Trike on Friday,
                        August 9, 2024, from 3:30 pm to 6:00 pm. Registration opens at 3:00 pm, with the first race
                        starting at 3:30 pm. In case of rain, the event will be postponed to Friday, August 16, at the
                        same time.
                    </p>
                    <p className="mt-8">
                        Please note: Gay Street will be closed to vehicles every weekend from Friday, May 3, to Sunday,
                        September 29, for the Gay Street Open-Air Market.
                    </p>
                </div>
            </div>
        </div>
    );
}
