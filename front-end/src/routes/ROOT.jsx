import CinemaDetail from "../pages/client/CinemaDetail";
import Cinemas from "../pages/client/Cinemas";
import MovieDetail from "../pages/client/Detail";
import Events from "../pages/client/Events";
import Home from "../pages/client/Home";
import Movies from "../pages/client/Movies";
import RootPage from "../pages/client/RootPage";
import SessionTimes from "../pages/client/SessionTimes";

export const ROOT = [
    {
        path: "/",
        element: <RootPage/>,
        children: [
            { index: true, element: <Home /> },
            {
                path: "movies",
                element: <Movies />,
            },
            {
                path:"movies/:id",
                element:<MovieDetail/>
            },
            {
                path:"cinemas/:id",
                element:<CinemaDetail/>
            },
            {
                path: "session-times",
                element: <SessionTimes/>,
            },
            {
                path: "cinemas",
                element: <Cinemas/>,
            },
            {
                path:"events",
                element:<Events/>
            }
        ],
    },
];
