import React from "react";
import Demo from './../Demo';
import Header from "./component/Header";
import Hero from "./component/Hero";
import ContactForm from "./component/ContactFrom";
import Footer from "./component/Footer";
import Todo from "./component/Todo";

// this is functional component
const App =()=>{
  return(
    <div>
      <Header />
      <Hero  title='This is props data'  des='this is props data description'   />
      <Todo />
      <ContactForm />
      <Footer />
      </div>
  )
}

export default App;