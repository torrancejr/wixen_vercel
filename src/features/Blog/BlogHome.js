import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const posts = [
    {
        id: 1,
        title: 'How to Add Tailwind CSS to Your React Project',
        href: '/blog/how-to-add-tailwindcss-to-react-app',
        description:
        'Learn how to seamlessly integrate Tailwind CSS into your React project with our step-by-step guide, enhancing your web development workflow with modern, utility-first styling.',
        imageUrl:
            'https://wixenco.s3.amazonaws.com/react2.jpeg',
        date: 'Mar 16, 2024',
        datetime: '2024-03-16',
        category: { title: 'Web Design', href: '#' },
        author: {
            name: 'Ryan Torrance',
            role: 'Owner',
            href: '#',
            imageUrl:
                ''
        },
    },
    // More posts...
]

export default function Example() {
    return (
        <div className="bg-white py-6 sm:py-6">
        <Header />
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-4xl">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        Learn how to grow your business with our expert advice.
                    </p>
                    <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
                        {posts.map((post) => (
                            <article key={post.id} className="relative isolate flex flex-col gap-8 lg:flex-row">
                                <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                                    <img
                                        src={post.imageUrl}
                                        alt=""
                                        className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                                    />
                                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
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
                                                <span className="absolute inset-0" />
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
                                                        <span className="absolute inset-0" />
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
            <Footer />
        </div>
    )
}
