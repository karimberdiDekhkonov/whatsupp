import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Main from "./Main/Main";
import './Right.css'

function Right (){
        return <section className="right col-8 d-flex flex-column">
        <Header/>
        <Main/>
        <Footer/>
      </section>
    }

export default Right;