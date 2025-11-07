import { createBrowserRouter } from "react-router";
import App from "../App";
import HomePage from "../Pages/Home";
import axios from "axios";

export const router  = createBrowserRouter([{
    path: '/',
    Component: App,
    children: [
        {
            index: true,
            loader: () => axios(`${import.meta.env.VITE_BACKEND}/models`),
            Component: HomePage
        },
    ]
}])