import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Root from "./routes/root";
import PostPage from "./routes/post"
import ProfilePage from "./routes/profile"
import ErrorPage from "./routes/error-page";
import ComposePage from './routes/compose';
import PortfolioPage from './routes/portfolio';
import LoginPage from './routes/login';
import RegisterPage from './routes/register';
import EditProfilePage from './routes/editProfile';
import MyProfilePage from './routes/me';
import SearchPage from './routes/search';
import FeedPage from './routes/feed';
import TagsPage from './routes/tag';
import LogoutPage from './routes/logout';
import HomePage from './routes/homepage';
import AboutPage from './routes/about';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage />,
    children: [{
      path: "/post/:postId",
      element: <PostPage />,
    },
    {
      path: "/profile/:userName",
      element: <ProfilePage />,
    },
    {
      path: "/compose",
      element: <ComposePage />,
    },
    {
      path: "/portfolio",
      element: <PortfolioPage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/register",
      element: <RegisterPage />,
    },
    {
      path: "/me",
      element: <MyProfilePage />,
    },
    {
      path: "/me/edit",
      element: <EditProfilePage />
    },
    {
      path:"/search",
      element: <SearchPage />,
    },
    {
      path:"/feed",
      element: <FeedPage />
    },
    {
      path:"/tags/:tag",
      element: <TagsPage />
    },
    {
      path:"/logout",
      element: <LogoutPage />
    },
    {
      path:"/about",
      element: <AboutPage />
    },
    {
      path:"/",
      element: <HomePage />
    }
  ]
  },
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
