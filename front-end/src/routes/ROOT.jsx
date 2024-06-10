import Cinemas from "../pages/client/Cinemas";
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
