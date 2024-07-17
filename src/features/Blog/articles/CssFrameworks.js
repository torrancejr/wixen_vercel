import {CheckCircleIcon, InformationCircleIcon} from '@heroicons/react/20/solid'
import { Helmet } from 'react-helmet';
import Header from "../../../components/Header";
import React from "react";

export default function Example() {
    return (
        <div className="bg-white pb-8">
            <Helmet>
                <title>Top CSS Frameworks of 2024 - West Chester, PA in Chester County - WixenCo Web Design & SEO </title>
            </Helmet>
            <Header />
            <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
                <p className="text-base font-semibold leading-7 text-indigo-600">Introducing</p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Top CSS Frameworks of
                    2024</h1>
                <figure className="mt-16">
                    <img
                        alt=""
                        src="https://wixenco.s3.amazonaws.com/frameworks.png"
                        className="aspect-video rounded-xl bg-gray-50 object-cover"
                    />
                    <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
                        <InformationCircleIcon aria-hidden="true" className="mt-0.5 h-5 w-5 flex-none text-gray-300"/>
                        Stay updated with the latest frameworks to keep your web development skills sharp.
                    </figcaption>
                </figure>
                <p className="mt-6 text-xl leading-8">
                    As web development evolves, staying updated with the latest CSS frameworks is crucial for creating
                    modern, responsive websites. Here are the top CSS frameworks of 2024 that you should consider for
                    your next project.
                </p>
                <div className="mt-10 max-w-2xl">
                    <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
                        <li className="flex gap-x-3">
                            <CheckCircleIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600"/>
                            <span>
                <strong className="font-semibold text-gray-900">Tailwind CSS</strong> - Tailwind CSS is a utility-first CSS framework that allows you to build custom designs without having to write your own CSS. With Tailwind, you can apply styles directly in your HTML using a wide array of utility classes. This approach helps keep your CSS file small and your project highly customizable.
                <a href="https://tailwindcss.com" className="text-indigo-600"> Download Tailwind CSS</a>.
                <pre className="bg-gray-100 p-4 rounded-md mt-4">
{`<div className="bg-blue-500 text-white p-4 rounded">
  Hello, Tailwind CSS!
</div>`}
                </pre>
              </span>
                        </li>
                        <li className="flex gap-x-3">
                            <CheckCircleIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600"/>
                            <span>
                <strong className="font-semibold text-gray-900">Bootstrap</strong> - Bootstrap remains one of the most popular CSS frameworks due to its comprehensive suite of tools for developing responsive, mobile-first websites. It comes with a grid system, a vast collection of pre-designed components, and JavaScript plugins. Bootstrap's extensive documentation and active community make it an excellent choice for both beginners and experienced developers.
                <a href="https://getbootstrap.com" className="text-indigo-600"> Download Bootstrap</a>.
                <pre className="bg-gray-100 p-4 rounded-md mt-4">
{`<div className="alert alert-primary" role="alert">
  Hello, Bootstrap!
</div>`}
                </pre>
              </span>
                        </li>
                        <li className="flex gap-x-3">
                            <CheckCircleIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600"/>
                            <span>
                <strong className="font-semibold text-gray-900">UIKit</strong> - UIKit is a lightweight and modular front-end framework that provides a comprehensive collection of HTML, CSS, and JS components. Its design is minimalistic, making it ideal for creating fast and powerful web interfaces. UIKit's modular structure allows developers to include only the components they need, reducing bloat and improving performance.
                <a href="https://getuikit.com" className="text-indigo-600"> Download UIKit</a>.
                <pre className="bg-gray-100 p-4 rounded-md mt-4">
{`<div className="uk-alert-primary" uk-alert>
  <a className="uk-alert-close" uk-close></a>
  <p>Hello, UIkit!</p>
</div>`}
                </pre>
              </span>
                        </li>
                        <li className="flex gap-x-3">
                            <CheckCircleIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600"/>
                            <span>
                <strong className="font-semibold text-gray-900">Materialize</strong> - Materialize is a modern responsive front-end framework based on Material Design principles by Google. It provides a clean and modern aesthetic, along with a wide range of components and animations. Materialize is ideal for developers who want to quickly implement Google's Material Design specifications in their projects.
                <a href="https://materializecss.com" className="text-indigo-600"> Download Materialize</a>.
                <pre className="bg-gray-100 p-4 rounded-md mt-4">
{`<div className="card-panel teal lighten-2">
  <span className="white-text">Hello, Materialize!</span>
</div>`}
                </pre>
              </span>
                        </li>
                        <li className="flex gap-x-3">
                            <CheckCircleIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600"/>
                            <span>
                <strong className="font-semibold text-gray-900">Bulma</strong> - Bulma is a modern CSS framework based on Flexbox, which makes it highly responsive and easy to use. It offers a simple grid system, various components, and utilities that help streamline the development process. Bulma's clean syntax and minimalistic design make it a great choice for developers who prefer simplicity and efficiency.
                <a href="https://bulma.io" className="text-indigo-600"> Download Bulma</a>.
                <pre className="bg-gray-100 p-4 rounded-md mt-4">
{`<div className="notification is-primary">
  Hello, Bulma!
</div>`}
                </pre>
              </span>
                        </li>
                    </ul>
                    <p className="mt-8">
                        Choosing the right CSS framework can significantly enhance your development workflow, ensuring
                        your websites are responsive, accessible, and visually appealing. Each of these frameworks
                        offers unique features and strengths, so consider your project's specific needs when making a
                        choice.
                    </p>
                </div>

            </div>
        </div>
    )
}

