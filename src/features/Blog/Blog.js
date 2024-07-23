import React from 'react';

const posts = [
    {
        id: 2,
        title: '10 Essential Web Design Trends for 2024 to Elevate Your Website.',
        href: '/blog/top-10-web-design-trends-for-2024',
        description: 'Discover the top 10 essential web design trends for 2024 that will elevate your website. Stay ahead with the latest design techniques and create engaging, modern websites with WixenCo in West Chester, PA.',
        imageUrl: 'https://wixenco.s3.amazonaws.com/web-trends.webp',
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
        id: 3,
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
        id: 1,
        title: 'Tour-de-Trike - West Chester, Pa in Chester County - August 9, 2024.',
        href: '/blog/tour-de-trike-adult-tricycle-relay-race-west-chester-pa-2024',
        description: 'Join us for the Tour-de-Trike on Gay Street in West Chester on Friday, August 9, 2024, from 3:30pm-6:00pm. Enjoy adult-sized tricycle races, with registration starting at 3:00pm. Rain date: August 16.',
        imageUrl: 'https://wixenco.s3.amazonaws.com/trike.webp',
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
    // More posts...
];


export default function Blog() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        Learn how to grow your business with our expert advice.
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {posts.map((post) => (
                        <article key={post.id} className="flex flex-col items-start justify-between">
                            <div className="relative w-full">
                                <img
                                    src={post.imageUrl}
                                    alt={post.title}
                                    loading="lazy"
                                    className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[4/3]"
                                />
                                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                            </div>
                            <div className="max-w-xl">
                                <div className="mt-8 flex items-center gap-x-4 text-xs">
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
                                <div className="group relative">
                                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                        <a href={post.href}>
                                            <span className="absolute inset-0" />
                                            {post.title}
                                        </a>
                                    </h3>
                                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                                </div>
                                <div className="relative mt-8 flex items-center gap-x-4">
                                    {/*<img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-100" />*/}
                                    <div className="text-sm leading-6">
                                        <p className="font-semibold text-gray-900">
                                            <a href={post.author.href}>
                                                <span className="absolute inset-0" />
                                                {post.author.name}
                                            </a>
                                        </p>
                                        <p className="text-gray-600">{post.author.role}</p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}
