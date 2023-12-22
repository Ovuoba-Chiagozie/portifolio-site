import NavBar from "../components/navBar"
import ContactForm from "./ContactForm"
import Footer from "./Footer"
import {Outlet} from 'react-router-dom'

function Layout ()  {


    return (
       <>
       <NavBar />
        <Outlet />
       <ContactForm />
       <Footer />
       </>
    )
}

export default Layout