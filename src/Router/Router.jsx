import {BrowserRouter, Route, Routes} from "react-router-dom";
import {MallaUniversal} from "../Pages/MallaUniversal.jsx";
import {CareerSelection} from "../Pages/CareerSelection.jsx";
import {NextUIProvider} from "@nextui-org/react";

export const Router = () => {
    return (
        <BrowserRouter basename={'/malla'}>
            <NextUIProvider>
                <Routes>
                    <Route path={''} element={<CareerSelection/>}/>
                    <Route path={':specialty'} element={<MallaUniversal/>}/>
                </Routes>
            </NextUIProvider>
        </BrowserRouter>
    )
}