import Header from "../Header.js";
import { Outlet } from "react-router-dom";
    
function Root() {
    return (
        <>
            <link rel="stylesheet" type="text/css" href="/assets/css/style.css"></link>
            <Header />
            <div id="pageContainer">
                <Outlet />
            </div>
        </>
    )
}

export default Root;