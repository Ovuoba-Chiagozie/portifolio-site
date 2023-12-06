import NavBar from "../components/navBar"
import ContactForm from "./ContactForm"
import Footer from "./Footer"

function Layout ({children})  {


    return (
       <>
       <NavBar />
        {children}
       <ContactForm />
       <Footer />
       </>
    )
}

export default Layout