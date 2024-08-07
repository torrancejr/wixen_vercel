import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import BlogHome from './features/Blog/BlogHome';
import Tailwind from './features/Blog/articles/TailwindBlog';
import Stucture from './features/Blog/articles/StructuredData';
import Ollama from "./features/Blog/articles/Ollama";
import Trike from "./features/Blog/articles/Trike";
import WebDesignTrends2024 from "./features/Blog/articles/WebTrendsJune24";
import reportWebVitals from './reportWebVitals';
import NotFoundPage from './components/NotFoundPage';
import SiteAudit from "./features/SiteAudit/SiteAudit";
import RankTool from './features/Tools/RankTool';
import CssFrameworks from "./features/Blog/articles/CssFrameworks";
import ChatGptJulyTwentyFour from "./features/Blog/articles/ChatGptJulyTwentyFour";
import TopBusinessDirectories from "./features/Blog/articles/TopBusinessDirectories";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import ReactGA from 'react-ga4';

ReactGA.initialize('G-1707PEGC4M');

const router = createBrowserRouter([
    { path: '/', element: <App /> },
    { path: '/blog', element: <BlogHome /> },
    { path: '/site-analysis', element: <SiteAudit /> },
    { path: '/seo-tools/google-index-checker', element: <RankTool /> },
    { path: '/blog/how-to-add-tailwindcss-to-react-app', element: <Tailwind /> },
    { path: '/blog/unlocking-the-power-of-google-structured-data', element: <Stucture /> },
    { path: '/blog/how-to-install-and-use-ollama-on-macos', element: <Ollama /> },
    { path: '/blog/top-css-framework-of-2024', element: <CssFrameworks /> },
    { path: '/blog/tour-de-trike-adult-tricycle-relay-race-west-chester-pa-2024', element: <Trike />},
    { path: '/blog/top-10-web-design-trends-for-2024', element: <WebDesignTrends2024 />},
    { path: '/blog/top-10-business-directories-to-boost-seo-online-presence', element: <TopBusinessDirectories />},
    { path: '/blog/chatgpt-upgraded-voice-mode-coming-soon', element: <ChatGptJulyTwentyFour />},
    { path: '*', element: <NotFoundPage /> },
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
