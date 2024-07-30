import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Helmet } from 'react-helmet';

const posts = [
    {
        id: 8,
        title: "ChatGPT's Upgraded Voice Mode is Coming Soon!",
        href: "/blog/chatgpt-upgraded-voice-mode-coming-soon",
        description: "Discover the upcoming upgrades to ChatGPT's voice mode. Learn about new features, improvements, and how this will enhance your AI interactions. Stay tuned for the latest advancements from OpenAI with WixenCo.",
        imageUrl: "https://wixenco.s3.amazonaws.com/voice-mode-sm.webp",
        date: "July 29, 2024",
        datetime: "2024-07-29",
        category: {
            title: "Technology",
            href: "#"
        },
        author: {
            name: "Ryan Torrance",
            role: "Owner",
            href: "#",
            imageUrl: "" // Add the URL of the author's image if available
        },
    },
    {
        id: 7,
        title: 'Top 10 Free and Paid Business Directories to Boost Your SEO',
        href: '/blog/top-10-business-directories-to-boost-seo-online-presence',
        description: 'Discover the top 10 free and paid business directories to boost your SEO and online presence. Elevate your business visibility with WixenCo in West Chester, PA.',
        imageUrl: 'https://wixenco.s3.amazonaws.com/business-335.webp',
        date: 'July 23, 2024',
        datetime: '2024-07-23',
        category: { title: 'SEO', href: '#' },
        author: {
            name: 'Ryan Torrance',
            role: 'Owner',
            href: '#',
            imageUrl: ''
        },
    },
    {
        id: 6,
        title: '10 Essential Web Design Trends for 2024 to Elevate Your Website',
        href: '/blog/top-10-web-design-trends-for-2024',
        description: 'Discover the top 10 essential web design trends for 2024 that will elevate your website. Stay ahead with the latest design techniques and create engaging, modern websites with WixenCo in West Chester, PA."',
        imageUrl: 'https://wixenco.s3.amazonaws.com/web-trends-sm.webp',
        date: 'July 22, 2024',
        datetime: '2024-07-22',
        category: { title: 'Web Design', href: '#' },
        author: {
            name: 'Ryan Torrance',
            role: 'Owner',
            href: '#',
            imageUrl: ''
        },
    },
    {
        id: 5,
        title: 'Tour-de-Trike - West Chester, Pa in Chester County - August 9, 2024.',
        href: '/blog/tour-de-trike-adult-tricycle-relay-race-west-chester-pa-2024',
        description: 'Join us for the Tour-de-Trike on Gay Street in West Chester on Friday, August 9, 2024, from 3:30pm-6:00pm. Enjoy adult-sized tricycle races, with registration starting at 3:00pm. Rain date: August 16.',
        imageUrl: 'https://wixenco.s3.amazonaws.com/trike-homepage.webp',
        date: 'July 17, 2024',
        datetime: '2024-07-17',
        category: { title: 'West Chester Events', href: '#' },
        author: {
            name: 'Ryan Torrance',
            role: 'Owner',
            href: '#',
            imageUrl: ''
        },
    },
    {
        id: 4,
        title: 'Top CSS Frameworks of 2024.',
        href: '/blog/top-css-framework-of-2024',
        description: 'Explore the best CSS frameworks of 2024! Discover top features, advantages, and how they can streamline your web development process. Stay ahead in web design!',
        imageUrl: 'https://wixenco.s3.amazonaws.com/frameworks.png',
        date: 'July 15, 2024',
        datetime: '2024-07-15',
        category: { title: 'Web Design', href: '#' },
        author: {
            name: 'Ryan Torrance',
            role: 'Owner',
            href: '#',
            imageUrl: ''
        },
    },
    {
        id: 1,
        title: 'Step-by-Step Guide: How to Install and Use Ollama on macOS for Running LLMs Locally.',
        href: '/blog/how-to-install-and-use-ollama-on-macos',
        description: 'Learn how to install and use Ollama on macOS with this easy-to-follow guide. Discover how to run large language models locally for enhanced privacy and control. Perfect for developers and AI enthusiasts!',
        imageUrl: 'https://wixenco.s3.amazonaws.com/ollama.webp',
        date: 'July 11, 2024',
        datetime: '2024-07-11',
        category: { title: 'Ai', href: '#' },
        author: {
            name: 'Ryan Torrance',
            role: 'Owner',
            href: '#',
            imageUrl: ''
        },
    },
    {
        id: 3,
        title: 'How to Add Tailwind CSS to Your React Project',
        href: '/blog/how-to-add-tailwindcss-to-react-app',
        description: 'Learn how to seamlessly integrate Tailwind CSS into your React project with our step-by-step guide, enhancing your web development workflow with modern, utility-first styling.',
        imageUrl: 'https://wixenco.s3.amazonaws.com/react2.jpeg',
        date: 'Mar 16, 2024',
        datetime: '2024-03-16',
        category: { title: 'Web Design', href: '#' },
        author: {
            name: 'Ryan Torrance',
            role: 'Owner',
            href: '#',
            imageUrl: ''
        },
    },
    {
        id: 2,
        title: 'Unlocking the Power of Google Structured Data: Boost Your SEO with Schema Markup',
        href: '/blog/unlocking-the-power-of-google-structured-data',
        description: 'Discover how Google Structured Data can enhance your website\'s SEO. Learn to implement Schema Markup for rich snippets and better search engine visibility with our comprehensive guide.',
        imageUrl: 'https://wixenco.s3.amazonaws.com/google.jpeg',
        date: 'Jun 20, 2024',
        datetime: '2024-06-20',
        category: { title: 'SEO', href: '#' },
        author: {
            name: 'Ryan Torrance',
            role: 'Owner',
            href: '#',
            imageUrl: ''
        },
    },
    // More posts...
];

export default function Example() {
    return (
        <div className="bg-white">
            <Helmet>
                <title>Web Design & SEO Blog - West Chester, PA in Chester County - WixenCo</title>
                <meta
                    name="description"
                    content="Discover the latest in web design and SEO from WixenCo. Stay updated with our expert advice and boost your online presence. Based in West Chester, PA, we specialize in crafting unique, tailored websites that engage your audience."
                    data-react-helmet="true"
                />
                <meta property="og:title" content="Web Design & SEO Blog - West Chester, PA in Chester County - WixenCo" data-react-helmet="true" />
                <meta property="og:description" content="Discover the latest in web design and SEO from WixenCo. Stay updated with our expert advice and boost your online presence. Based in West Chester, PA, we specialize in crafting unique, tailored websites that engage your audience." data-react-helmet="true" />
                <meta property="og:image" content="https://wixenco.s3.amazonaws.com/blog-overview.webp" data-react-helmet="true" />
                <meta property="og:url" content="https://wixenco.com/blog" data-react-helmet="true" />
                <meta property="og:type" content="website" data-react-helmet="true" />
            </Helmet>
            <Header/>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-4xl">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        Learn how to grow your business with our expert advice.
                    </p>
                    <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
                        {posts.map((post) => (
                            <article key={post.id} className="relative isolate flex flex-col gap-8 lg:flex-row">
                                <div
                                    className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-[calc(20rem+15px)] lg:shrink-0">
                                    <img
                                        src={post.imageUrl}
                                        alt=""
                                        className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                                    />
                                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"/>
                                </div>
                                <div>
                                    <div className="flex items-center gap-x-4 text-xs">
                                        <time dateTime={post.datetime} className="text-gray-500">
                                            {post.date}
                                        </time>
                                        <a
                                            href={post.category.href}
                                            className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                                        >
                                            {post.category.title}
                                        </a>
                                    </div>
                                    <div className="group relative max-w-xl">
                                        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                            <a href={post.href}>
                                                <span className="absolute inset-0"/>
                                                {post.title}
                                            </a>
                                        </h3>
                                        <p className="mt-5 text-sm leading-6 text-gray-600">{post.description}</p>
                                    </div>
                                    <div className="mt-6 flex border-t border-gray-900/5 pt-6">
                                        <div className="relative flex items-center gap-x-4">
                                            {/*<img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />*/}
                                            <div className="text-sm leading-6">
                                                <p className="font-semibold text-gray-900">
                                                    <a href={post.author.href}>
                                                        <span className="absolute inset-0"/>
                                                        {post.author.name}
                                                    </a>
                                                </p>
                                                <p className="text-gray-600">{post.author.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

