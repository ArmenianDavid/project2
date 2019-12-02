import React from 'react'
import honey_5 from '../img/honey_5.jpg'

const AboutSite = () =>{
  return(
    <React.Fragment>
      <div className="container-fluid">
       <div className="row text-center alert">
          <div className="col-12">
            <h1 className="displey-4"> Site making </h1>
          </div>
          <hr></hr>
       </div>
     </div>

    <div className="container-fluid padding">
       <div className="row  text-center  padding ">
         <div className="col-xs-12 col-sm-12  col-md-3">
            <i className="fab fa-html5"></i>
            <h3>HTML5</h3>
            <p>HTML5 is the latest version of Hypertext Markup Language, the code that describes web pages.</p>
         </div>
         <div className="col-xs-12 col-sm-12 col-md-3">
            <i className="fas fa-bold"></i>
            <h3>bootstrap</h3>
            <p>Bootstrap is an open source toolkit for developing with HTML, CSS, and JS.</p>
         </div>
         <div className="col-xs-12 col-sm-12 col-md-3">
            <i className="fab fa-css3"></i>
            <h3>Css</h3>
            <p>CSS is a language that describes the style of an HTML document. CSS describes how HTML elements should be displayed.</p>
         </div>
         <div className="col-xs-12 col-sm-12 col-md-3">
            <i className="fab fa-js"></i>
            <h3>JS</h3>
            <p>Javascript (JS) is a scripting languages, primarily used on the Web. It is used to enhance HTML pages and is commonly found embedded in HTML code.</p>
         </div>
         <div className="col-xs-12 col-sm-12 col-md-12">
            <i className="fab fa-react"></i>
            <h3>React</h3>
            <p>React is a JavaScript library for building user interfaces. React is used to build single page applications.</p>
         </div>
       </div>
    <hr className="my-4"></hr>

    <div className="container-fluid padding">
       <div className="row padding">
         <div className="offset-lg-2 col-lg-4">
            <h2>Programming</h2>
            <p>Web programming refers to the writing, markup and coding involved in Web development, which includes Web content, Web client and server scripting and network security. The most common languages used for Web programming are XML, HTML, JavaScript, Perl 5 and PHP.</p>
              <br></br>
              To improve user experience and related functionalities on the client side, JavaScript is usually used. It is an excellent client-side platform for designing and implementing Web applications.
               <br></br>
               <a href="#"  className="btn btn-danger "> Կարդալ ավելին</a>
            </div>
            <div className="col-lg-6">
               <img src={honey_5} className="img-fluid"/>
            </div>
       </div>
     </div>
    </div>
    </React.Fragment>
  )
}

export default AboutSite