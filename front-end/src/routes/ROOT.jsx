import AddMovie from "../pages/admin/AddMovie";
import AdminDashboard from "../pages/admin/AdminDashboard";
import AdminRoot from "../pages/admin/AdminRoot";
import AdminLogin from "../pages/admin/Login";
import CinemaDetail from "../pages/client/CinemaDetail";
import Cinemas from "../pages/client/Cinemas";
import MovieDetail from "../pages/client/Detail";
import EventDetail from "../pages/client/EventDetail";
import Events from "../pages/client/Events";
import FoodsDrinks from "../pages/client/FoodsDrinks";
import Home from "../pages/client/Home";
import Movies from "../pages/client/Movies";
import RootPage from "../pages/client/RootPage";
import SessionTimes from "../pages/client/SessionTimes";

export const ROOT = [
    {
        path: "/",
        element: <RootPage />,
        children: [
            { index: true, element: <Home /> },
            {
                path: "movies",
                element: <Movies />,
            },
            {
                path: "movies/:id",
                element: <MovieDetail />
            },
            {
                path: "cinemas/:id",
                element: <CinemaDetail />
            },
            {
                path: "session-times",
                element: <SessionTimes />,
            },
            {
                path: "cinemas",
                element: <Cinemas />,
            },
            {
                path: "events",
                element: <Events />
            },
            {
                path: "events/:id",
                element: <EventDetail />
            },
            {
                path: "food-and-drinks",
                element: <FoodsDrinks />
            },

        ],
    },
    {
        path: "admin",
        element: <AdminRoot />,
        children: [
            { index: true, element: <AdminDashboard /> },
            {
                path: "add-movie",
                element: <AddMovie />,
            },
            {
                path: "login",
                element: <AdminLogin />,
            },
        ]
    }
];
