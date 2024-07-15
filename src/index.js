import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import BlogHome from './features/Blog/BlogHome';
import Tailwind from './features/Blog/articles/TailwindBlog';
import Stucture from './features/Blog/articles/StructuredData';
import Ollama from "./features/Blog/articles/Ollama";
import reportWebVitals from './reportWebVitals';
import SiteAudit from "./features/SiteAudit/SiteAudit";
import CssFrameworks from "./features/Blog/articles/CssFrameworks";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import ReactGA from 'react-ga4';

ReactGA.initialize('G-1707PEGC4M');

const router = createBrowserRouter([
    { path: '/', element: <App /> },
    { path: '/blog', element: <BlogHome /> },
    { path: '/site-analysis', element: <SiteAudit /> },
    { path: '/blog/how-to-add-tailwindcss-to-react-app', element: <Tailwind /> },
    { path: '/blog/unlocking-the-power-of-google-structured-data', element: <Stucture /> },
    { path: '/blog/how-to-install-and-use-ollama-on-macos', element: <Ollama /> },
    { path: '/blog/top-css-framework-of-2024', element: <CssFrameworks /> },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
