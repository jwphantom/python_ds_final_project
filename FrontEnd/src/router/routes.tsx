
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";


import DashboardPage from "../pages/DashBoardPage";
import HistoriquePage from "../pages/HistoriquePage";


import { DefaultLayout } from "./ContextRouter";


export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>

            <Route element={<DefaultLayout />} >
                <Route path="/" element={<DashboardPage />} />
                <Route path="/historique" element={<HistoriquePage />} />
            </Route>
            <Route path="*" element={<div> Not found</div>} />
        </Route>
    )
);