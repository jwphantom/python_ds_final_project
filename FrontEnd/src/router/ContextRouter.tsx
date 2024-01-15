import { Outlet } from "react-router-dom";
import OperateurLayout from "../components/layouts/OperateurLayout";


export const DefaultLayout = () => {

    return (
        <OperateurLayout>
            <Outlet />
        </OperateurLayout>
    );
}

