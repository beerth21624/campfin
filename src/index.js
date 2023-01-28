import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/home/Home";
import Trip from "./pages/trip/Trip";
import CreateTrip from "./pages/trip/CreateTrip";
import WithNavabar from "./layout/WithNavabar";
import Login from "./pages/login/login";
import LayoutWithGuard from "./layout/LayoutWithGuard";
import TripDetail from './pages/trip/TripDetail'
import About from './pages/about/About'
import Profile from './pages/profile/Profile'
import Shop from './pages/shop/Shop'
import Favorite from './pages/favorite/Favorite'
import Community from './pages/community/Community'
import CommunityAllRoom from './pages/community/CommunityAllRoom'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <WithNavabar>
        <Home />
      </WithNavabar>
    ),
  },
  {
    path: '/trip',
    element: (
      <WithNavabar>
        <Trip />
      </WithNavabar>
    ),
  },
  {
    path: '/create-trip',
    element: (
      // <LayoutWithGuard>
        <WithNavabar>
          <CreateTrip />
        </WithNavabar>
      // </LayoutWithGuard>
    ),
  },
  {
    path: '/view-trip',
    element: (
      // <LayoutWithGuard>
        <WithNavabar>
          <TripDetail />
        </WithNavabar>
      // </LayoutWithGuard>
    ),
  },
  {
    path: '/about',
    element: (
      // <LayoutWithGuard>
        <WithNavabar>
          <About />
        </WithNavabar>
      // </LayoutWithGuard>
    ),
  },
  {
    path: '/profile',
    element: (
      // <LayoutWithGuard>
        <WithNavabar>
          <Profile />
        </WithNavabar>
      // </LayoutWithGuard>
    ),
  },
  {
    path: '/shop',
    element: (
      // <LayoutWithGuard>
        <WithNavabar>
          <Shop />
        </WithNavabar>
      // </LayoutWithGuard>
    ),
  },
  {
    path: '/favorite',
    element: (
      // <LayoutWithGuard>
        <WithNavabar>
          <Favorite />
        </WithNavabar>
      // </LayoutWithGuard>
    ),
  },
  {
    path: '/community',
    element: (
      // <LayoutWithGuard>
        <WithNavabar>
          <Community />
        </WithNavabar>
      // </LayoutWithGuard>
    ),
  },
  {
    path: '/community-all',
    element: (
      // <LayoutWithGuard>
        <WithNavabar>
          <CommunityAllRoom />
        </WithNavabar>
      // </LayoutWithGuard>
    ),
  },
  {
    path: '/login',
    element: <Login />,
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
);
