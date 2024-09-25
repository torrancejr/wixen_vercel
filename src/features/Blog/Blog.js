import React from 'react';

const posts = [
    {
        id: 3,
        title: 'How to Create a Google Business Profile: A Step-by-Step Guide',
        href: '/blog/how-to-create-google-business-profile',
        description: 'Learn how to create a Google Business Profile with this step-by-step guide. Optimize your online presence and attract more customers by making your business visible on Google Maps and local search results.',
        imageUrl: 'https://wixenco.s3.amazonaws.com/googlebusiness.webp',
        date: 'September 25, 2024',
        datetime: '2024-09-25',
        category: { title: 'Digital Marketing', href: '#' },
        author: {
            name: 'Ryan Torrance',
            role: 'Owner',
            href: '#',
            imageUrl: ''
        },
    },
    {
        id: 1, // Increment the ID if this is a new article
        title: 'Top 10 Free Website Image Websites for Web Design',
        href: '/blog/top-10-free-website-image-websites',
        description: 'Discover the top 10 free website image websites for web design. Enhance your projects with high-quality visuals from these sources, perfect for improving your SEO and attracting visitors.',
        imageUrl: 'https://wixenco.s3.amazonaws.com/summer-gal.webp',
        date: 'August 27, 2024',  // Today's date or the date of publication
        datetime: '2024-08-27',
        category: { title: 'Web Design', href: '#' },
        author: {
            name: 'Ryan Torrance',
            role: 'Owner',
            href: 'https://www.wixenco.com/about', // Link to your author page or about section
            imageUrl: 'https://wixenco.s3.amazonaws.com/ryan-torrance-photo.webp'  // Update with a valid image URL of the author if available
        },
    },
    {
        id: 2,
        title: 'Top 10 Haunted Houses in Chester County: Ranked for a Thrilling Halloween',
        href: '/blog/top-10-haunted-houses-chester-county',
        description: 'Discover the top 10 haunted houses in Chester County and nearby areas, ranked from scariest to spookiest. Explore these Halloween attractions for a night of thrilling adventure.',
        imageUrl: 'https://wixenco.s3.amazonaws.com/hauntedhouse.webp',
        date: 'September 9, 2024',
        datetime: '2024-09-09',
        category: {
            title: 'Halloween Attractions',
            href: '#'
        },
        author: {
            name: 'Ryan Torrance',
            role: 'Owner',
            href: '#',
            imageUrl: ''
        }
    }

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
