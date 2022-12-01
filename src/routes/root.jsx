import Header from "../Header.js";
import { Outlet } from "react-router-dom";
    
function Root() {
    return (
        <>
            <Header />
            <div id="pageContainer">
                <Outlet />
            </div>
        </>
    )
}

export default Root;