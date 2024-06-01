import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import BlogHome from './features/Blog/BlogHome';
import Tailwind from './features/Blog/articles/TailwindBlog';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
    { path: '/', element: <App /> },
    { path: '/blog', element: <BlogHome /> },
    { path: '/blog/how-to-add-tailwindcss-to-react-app', element: <Tailwind /> },
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
