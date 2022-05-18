import { Footer } from "./footer"
import { Navbar } from "./navbar"

export const Layout = ({ children }) => {
    return (
        <div className="content">
            <Navbar/>
            {
                children
            }
            <Footer/>
        </div>
    )
}