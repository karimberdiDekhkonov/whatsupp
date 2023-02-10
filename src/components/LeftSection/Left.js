import { Component } from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Main from "./Main/Main";

function Left (){
        return <section className="left col-4">
        <Header/>
        <Main/>
        <Footer/>
      </section>
    }

export default Left;