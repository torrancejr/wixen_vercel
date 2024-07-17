import { CheckCircleIcon, InformationCircleIcon } from '@heroicons/react/20/solid';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import {Helmet} from "react-helmet";

const installCommand = `npm install -D tailwindcss postcss autoprefixer npx tailwindcss init -p`;

const tailwindConfig = `module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`;

export default function Ollama() {
    return (
        <div className="bg-white px-6 py-32 lg:px-8">
            <Helmet>
                <title>Step-by-Step Guide: Ollama Ai - West Chester, PA in Chester County - WixenCo Web Design &
                    SEO </title>
            </Helmet>
            <Header/>
            <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
                <p className="text-base font-semibold leading-7 text-indigo-600">Introducing</p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Step-by-Step Guide: How
                    to Install and Use Ollama Ai on macOS for Running LLMs Locally</h1>
                <p className="mt-6 text-xl leading-8">
                    Running large language models (LLMs) locally has become increasingly popular, offering more privacy
                    and control over data. Ollama is an open-source tool that simplifies this process for macOS users.
                    In this guide, we’ll walk you through the steps to install and use Ollama on your Mac, ensuring you
                    can harness the power of LLMs effortlessly.
                </p>
                <div className="mt-10 max-w-2xl">
                    <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
                        <li className="flex gap-x-3">
                            <CheckCircleIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600"/>
                            <span>
                <strong className="font-semibold text-gray-900">1. Download Ollama.</strong> Visit the <a
                                href="https://ollama.com" className="text-blue-500 underline">Ollama website</a> and download the application for macOS.
              </span>
                        </li>
                        <li className="flex gap-x-3">
                            <CheckCircleIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600"/>
                            <span>
                <strong className="font-semibold text-gray-900">2. Install Docker Desktop (Optional for GPU Acceleration).</strong> If you want to leverage GPU acceleration, download and install Docker Desktop from <a
                                href="https://www.docker.com/products/docker-desktop"
                                className="text-blue-500 underline">Docker’s official site</a>.
              </span>
                        </li>
                        <li className="flex gap-x-3">
                            <CheckCircleIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600"/>
                            <span>
                <strong className="font-semibold text-gray-900">3. Install Ollama.</strong> Once downloaded, open the Ollama installer and follow the on-screen instructions to complete the installation.
              </span>
                        </li>
                        <li className="flex gap-x-3">
                            <CheckCircleIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600"/>
                            <span>
                <strong className="font-semibold text-gray-900">4. Set Up Ollama.</strong> Open your terminal and verify the installation by running:
                <pre className="bg-gray-100 p-4 rounded mt-2">
                  <code>ollama --version</code>
                </pre>
                You should see the version information confirming that Ollama is installed correctly.
              </span>
                        </li>
                        <li className="flex gap-x-3">
                            <CheckCircleIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600"/>
                            <span>
                <strong className="font-semibold text-gray-900">5. Running a Model.</strong> To run a model like Llama 2, use the following command:
                <pre className="bg-gray-100 p-4 rounded mt-2">
                  <code>ollama run llama2</code>
                </pre>
                This will download and start the Llama 2 model.
              </span>
                        </li>
                        <li className="flex gap-x-3">
                            <CheckCircleIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600"/>
                            <span>
                <strong className="font-semibold text-gray-900">6. Interacting with the Model.</strong> Once the model is running, you can start a chat session. For example, type:
                <pre className="bg-gray-100 p-4 rounded mt-2">
                  <code>&gt;&gt;&gt; Hello, what can you do?</code>
                </pre>
                The model will respond with its capabilities.
              </span>
                        </li>
                        <li className="flex gap-x-3">
                            <CheckCircleIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600"/>
                            <span>
                <strong
                    className="font-semibold text-gray-900">7. Customizing a Model.</strong> Create a <code>Modelfile</code> to customize your model:
                <pre className="bg-gray-100 p-4 rounded mt-2">
                  <code>
                    {`FROM llama3
PARAMETER temperature 1
SYSTEM "You are Mario from Super Mario Bros. Answer as Mario, the assistant, only."`}
                  </code>
                </pre>
                Use the following commands to create and run your customized model:
                <pre className="bg-gray-100 p-4 rounded mt-2">
                  <code>ollama create mario -f ./Modelfile{'\n'}ollama run mario</code>
                </pre>
              </span>
                        </li>
                        <li className="flex gap-x-3">
                            <CheckCircleIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600"/>
                            <span>
                <strong className="font-semibold text-gray-900">8. Running Multi-Modal Models.</strong> Ollama supports multi-modal inputs, such as images. To use a multi-modal model like LLaVA, run:
                <pre className="bg-gray-100 p-4 rounded mt-2">
                  <code>ollama run llava</code>
                </pre>
                You can then provide an image file and ask questions about it:
                <pre className="bg-gray-100 p-4 rounded mt-2">
                  <code>&gt;&gt;&gt; What's in this image? ./path/to/image.jpeg</code>
                </pre>
              </span>
                        </li>
                    </ul>
                </div>
                <figure className="mt-16">
                    <img
                        alt="ollama home screen picture"
                        src="https://wixenco.s3.amazonaws.com/ollama.webp"
                        className="aspect-video rounded-xl bg-gray-50 object-cover"
                    />
                    <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
                        <InformationCircleIcon aria-hidden="true" className="mt-0.5 h-5 w-5 flex-none text-gray-300"/>
                        Ollama in action.
                    </figcaption>
                </figure>
                <div className="mt-16 max-w-2xl">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Everything you need to get up and
                        running</h2>
                    <p className="mt-6">
                        Installing and using Ollama on macOS is straightforward, enabling you to run powerful LLMs
                        locally with ease. Whether you are looking for privacy, control, or the ability to customize
                        models, Ollama offers a robust solution for all your large language model needs.
                    </p>
                    <p className="mt-8">
                        For more detailed information and updates, visit the <a href="https://ollama.com"
                                                                                className="text-blue-500 underline">official
                        Ollama website</a>.
                    </p>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
