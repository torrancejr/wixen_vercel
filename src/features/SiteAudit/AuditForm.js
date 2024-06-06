import React, { useState } from 'react';
import axios from 'axios';

function SiteAnalysisForm() {
    const [url, setUrl] = useState('');
    const [results, setResults] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');
        setResults(null);
        setLoading(true);

        try {
            const response = await axios.post('https://wixenco-api-2ee861916a31.herokuapp.com/analyze', { url });
            setResults(response.data);
        } catch (error) {
            setError('There was a problem analyzing the site. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const getScore = (category) => {
        if (results && results.lighthouseResult && results.lighthouseResult.categories) {
            const score = results.lighthouseResult.categories[category]?.score;
            return score !== undefined ? score * 100 : 'N/A';
        }
        return 'N/A';
    };

    return (
        <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-xl lg:max-w-4xl">
                <h2 className="text-4xl font-bold tracking-tight text-gray-900">Website Analysis Tool</h2>
                <p className="mt-2 text-lg leading-8 text-gray-600">
                    Enter your website URL to get a comprehensive analysis of its performance, SEO, and more. Please be patient it can take a few minutes for results. Contact me below to discuss your results!
                </p>
                <div className="mt-16 flex flex-col gap-16 sm:gap-y-20 lg:flex-row">
                    <form onSubmit={handleSubmit} className="lg:flex-auto">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                            <div className="sm:col-span-2">
                                <label htmlFor="url" className="block text-sm font-semibold leading-6 text-gray-900">
                                    Website URL
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="url"
                                        name="url"
                                        id="url"
                                        value={url}
                                        onChange={(e) => setUrl(e.target.value)}
                                        required
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
                                Analyze Website
                            </button>
                        </div>
                        {loading && (
                            <div className="mt-4 flex justify-center">
                                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-indigo-600"></div>
                            </div>
                        )}
                        {error && <p className="mt-4 text-sm text-red-600">{error}</p>}
                        {results && (
                            <div className="mt-10">
                                <h3 className="text-2xl font-semibold text-gray-900">Analysis Results</h3>
                                <div className="mt-4 p-4 bg-gray-100 rounded-md text-gray-900">
                                    <p><strong>Performance Score:</strong> {getScore('performance')}</p>
                                    <p><strong>Accessibility Score:</strong> {getScore('accessibility')}</p>
                                    <p><strong>Best Practices Score:</strong> {getScore('best-practices')}</p>
                                    <p><strong>SEO Score:</strong> {getScore('seo')}</p>
                                </div>
                            </div>
                        )}
                    </form>
                    <div className="lg:mt-6 lg:w-80 lg:flex-none">
                        <figure className="mt-10">
                            <blockquote className="text-lg font-semibold leading-8 text-gray-900">
                                <p>
                                    “Using this tool helped us identify key areas to improve our website's performance and SEO. Highly recommended!"
                                </p>
                            </blockquote>
                            <figcaption className="mt-10 flex gap-x-6">
                                <div>
                                    <div className="text-base font-semibold text-gray-900">Tom K.</div>
                                    <div className="text-sm leading-6 text-gray-600">Owner of Wyatt Elevator</div>
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SiteAnalysisForm;


