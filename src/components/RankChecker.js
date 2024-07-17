import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

const RankChecker = () => {
    const [domain, setDomain] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const checkRank = async (e) => {
        e.preventDefault();
        setError(null);
        setResults([]);
        setLoading(true);
        try {
            const response = await fetch(`https://wixenco-api-2ee861916a31.herokuapp.com/rank?domain=${domain}`);
            const data = await response.json();

            if (response.ok) {
                setResults(data.results);
            } else {
                setError(data.error);
            }
        } catch (error) {
            setError('An error occurred while fetching the rank.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="relative isolate bg-white px-6 py-8 sm:py-32 lg:px-8">
            <title>SEO Tool - Google Index Check - West Chester, PA in Chester County - WixenCo</title>
            <meta
                name="description"
                content="SEO Tool - Google Index Check - WixenCo is a web design and SEO company based in West Chester, PA. We specialize in crafting unique, tailored websites that effectively communicate your brand's narrative and engage your audience. Let us help you captivate your audience with a website that tells your story and strengthens your connection with the community."
            />
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
                        y={-64}
                        patternUnits="userSpaceOnUse"
                    >
                        <path d="M100 200V.5M.5 .5H200" fill="none"/>
                    </pattern>
                </defs>
                <svg x="50%" y={-64} className="overflow-visible fill-gray-50">
                    <path
                        d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M299.5 800h201v201h-201Z"
                        strokeWidth={0}
                    />
                </svg>
                <rect width="100%" height="100%" strokeWidth={0} fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"/>
            </svg>
            <div className="mx-auto max-w-xl lg:max-w-4xl flex flex-col lg:flex-row">
                <div className="flex-grow">
                    <h2 className="text-4xl font-bold tracking-tight text-gray-900">Check Your Indexed Pages on
                        Google.</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        Enter your website's domain to see your latest pages ranked on Google. If no results appear, it
                        means your website isn't being indexed by Google. This means people can't find your site through
                        search engines, but don't worry—I'm here to help! If there are very few results, I can help
                        generate more content to improve your site's visibility. You can see examples of top-ranked
                        pages from my own site to give you an idea of what well-indexed pages look like. Remember
                        Content is King!
                    </p>
                    <form onSubmit={checkRank} className="mt-16 lg:mt-0 lg:flex-auto">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                            <div className="sm:col-span-2">
                                <label htmlFor="domain" className="block text-sm font-semibold leading-6 text-gray-900">
                                    Domain
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="text"
                                        name="domain"
                                        id="domain"
                                        value={domain}
                                        onChange={(e) => setDomain(e.target.value)}
                                        autoComplete="url"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="mt-10">
                            <button
                                type="submit"
                                className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Check Pages
                            </button>
                        </div>
                        {error && <p className="mt-4 text-sm text-red-600">{error}</p>}
                    </form>
                </div>
                <div className="lg:mt-6 lg:w-80 lg:flex-none lg:ml-8 mt-8 lg:mt-0">
                    <h3 className="text-xl font-bold text-gray-900">Results</h3>
                    <div className="mt-4">
                        {loading ? (
                            <div className="flex justify-center items-center">
                                <div
                                    className="spinner-border animate-spin inline-block w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full"
                                    role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        ) : results.length > 0 ? (
                            <ul className="space-y-6">
                                {results.map((result, index) => (
                                    <li key={index} className="border-b pb-6">
                                        <p className="text-sm text-gray-600">Found Page: {result.position}</p>
                                        <p className="text-lg font-semibold text-gray-900">{result.title}</p>
                                        <a href={result.link} className="text-indigo-600 hover:underline">
                                            {result.displayed_link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <ul className="space-y-6">
                                <li className="border-b pb-6">
                                    <p className="text-sm text-gray-600">Found Page: 1</p>
                                    <p className="text-lg font-semibold text-gray-900">WixenCo - Web Design and SEO
                                        Services | Crafting Websites ...</p>
                                    <a href="https://www.wixenco.com" className="text-indigo-600 hover:underline">
                                        https://www.wixenco.com
                                    </a>
                                </li>
                                <li className="border-b pb-6">
                                    <p className="text-sm text-gray-600">Found Page: 2</p>
                                    <p className="text-lg font-semibold text-gray-900">Blog - Development - Web Services
                                        | SEO - Wixenco</p>
                                    <a href="https://www.wixenco.com/blog/development"
                                       className="text-indigo-600 hover:underline">
                                        https://www.wixenco.com › blog › de...
                                    </a>
                                </li>
                                <li className="border-b pb-6">
                                    <p className="text-sm text-gray-600">Found Page: 3</p>
                                    <p className="text-lg font-semibold text-gray-900">WixenCo | Crafting Websites &
                                        Boosting Online Presence</p>
                                    <a href="https://www.wixenco.com/blog" className="text-indigo-600 hover:underline">
                                        https://www.wixenco.com › blog
                                    </a>
                                </li>
                                <li className="border-b pb-6">
                                    <p className="text-sm text-gray-600">Found Page: 4</p>
                                    <p className="text-lg font-semibold text-gray-900">Optimize Your Website with Our
                                        Comprehensive Site Analysis</p>
                                    <a href="https://www.wixenco.com/site-analysis"
                                       className="text-indigo-600 hover:underline">
                                        https://www.wixenco.com › site-analysis
                                    </a>
                                </li>
                                <li className="border-b pb-6">
                                    <p className="text-sm text-gray-600">Found Page: 5</p>
                                    <p className="text-lg font-semibold text-gray-900">Top CSS Frameworks of 2024 -
                                        WixenCo</p>
                                    <a href="https://www.wixenco.com/blog/top-css-framework-of-2024"
                                       className="text-indigo-600 hover:underline">
                                        https://www.wixenco.com › blog › top...
                                    </a>
                                </li>
                                <li className="border-b pb-6">
                                    <p className="text-sm text-gray-600">Found Page: 6</p>
                                    <p className="text-lg font-semibold text-gray-900">Boost Your SEO with Schema Markup
                                        - WixenCo</p>
                                    <a href="https://www.wixenco.com/blog/unlocking-the-power-of-google-structured-data"
                                       className="text-indigo-600 hover:underline">
                                        https://www.wixenco.com › blog › unl...
                                    </a>
                                </li>
                                <li className="border-b pb-6">
                                    <p className="text-sm text-gray-600">Found Page: 7</p>
                                    <p className="text-lg font-semibold text-gray-900">How to Add Tailwind CSS to Your
                                        React Project - WixenCo</p>
                                    <a href="https://www.wixenco.com/blog/how-to-add-tailwindcss-to-react-app"
                                       className="text-indigo-600 hover:underline">
                                        https://www.wixenco.com › blog › ho...
                                    </a>
                                </li>
                                <li className="border-b pb-6">
                                    <p className="text-sm text-gray-600">Found Page: 8</p>
                                    <p className="text-lg font-semibold text-gray-900">How to Install and Use Ollama on
                                        macOS for Running LLMs ...</p>
                                    <a href="https://www.wixenco.com/blog/how-to-install-and-use-ollama-on-macos"
                                       className="text-indigo-600 hover:underline">
                                        https://www.wixenco.com › blog › ho...
                                    </a>
                                </li>
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RankChecker;





