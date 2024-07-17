import React from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { Helmet } from 'react-helmet';

const myCode = `module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`;

const myCode2 = `function App() {
  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
      <div>
        <h1 className="text-xl font-medium text-black">Welcome to Tailwind CSS!</h1>
        <p className="text-gray-500">You're ready to build awesome interfaces!</p>
      </div>
    </div>
  );
}`;

function Blog() {
    return (
        <div className="bg-white px-6 py-32 lg:px-8">
            <Helmet>
                <title>Tailwind CSS - West Chester, PA in Chester County - WixenCo Web Design & SEO </title>
                <meta
                    name="description"
                    content="WixenCo is a web design and SEO company based in West Chester, PA. We specialize in crafting unique, tailored websites that effectively communicate your brand's narrative and engage your audience. Let us help you captivate your audience with a website that tells your story and strengthens your connection with the community."
                />
            </Helmet>
            <Header/>
            <header className="py-8">
                <div className="container mx-auto px-4">
                    <h1 className="text-center text-4xl font-bold">How to Add Tailwind CSS to Your React Project</h1>
                    <p className="text-center mt-4">Web designer and SEO specialist in West Chester, PA</p>
                </div>
            </header>

            <section className="my-12 container mx-auto px-4">
                <article>
                    <h5 className="text-xl font-semibold mt-6">1. Install TailwindCSS</h5>
                    <p>First, open your terminal in your project's root directory and install TailwindCSS along with its
                        peer dependencies using npm or yarn:</p>
                    <pre className="bg-gray-100 p-4 rounded mt-2">
            <code>npm install -D tailwindcss postcss autoprefixer npx tailwindcss init -p</code>
          </pre>
                    <p>This command will create two files in your project: tailwind.config.js and postcss.config.js.</p>
                </article>

                <article>
                    <h5 className="text-xl font-semibold mt-6">2. Configure TailwindCSS</h5>
                    <p>Edit your tailwind.config.js file to enable TailwindCSS to purge your CSS in production:</p>
                    <pre className="bg-gray-100 p-4 rounded mt-2">
            <code>{myCode}</code>
          </pre>
                </article>

                <article>
                    <h5 className="text-xl font-semibold mt-6">3. Include Tailwind in Your CSS</h5>
                    <p>Create a CSS file (if you don’t have one already) where you will import Tailwind’s directives.
                        You can name it anything, like src/index.css:</p>
                    <pre className="bg-gray-100 p-4 rounded mt-2">
            <code>@tailwind base; @tailwind components; @tailwind utilities;</code>
          </pre>
                </article>

                <article>
                    <h5 className="text-xl font-semibold mt-6">4. Import the CSS File</h5>
                    <p>Make sure to import the CSS file in your React project’s entry file (typically src/index.js or
                        src/App.js):</p>
                    <pre className="bg-gray-100 p-4 rounded mt-2">
            <code>import './index.css';</code>
          </pre>
                </article>

                <article>
                    <h5 className="text-xl font-semibold mt-6">5. Start Using Tailwind Classes</h5>
                    <p>Now, you can start using TailwindCSS classes in your React components. For example:</p>
                    <pre className="bg-gray-100 p-4 rounded mt-2">
            <code>{myCode2}</code>
          </pre>
                </article>

                <footer className="mt-12">
                    <p className="text-center">Happy Coding!</p>
                </footer>
            </section>
            <Footer/>
        </div>
    );
}

export default Blog;
