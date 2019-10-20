import React from 'react'
import gif_1 from '../img/gif_1.gif'
import gif_2 from '../img/gif_2.gif'
import gif_3 from '../img/gif_3.gif'
import gif_4 from '../img/gif_4.gif'

const GifBlock = () =>{
  return(
    <React.Fragment>
      <figure>
       <div class="fixed-wrap">
         <div id='fixed'> 

         </div>
       </div>
    </figure>
    

    <div class="text-center">
      <button type="button" id="gifsBtn" class="btn btn-success text-center" data-toggle="collapse" 
         data-target="#gifs">
            Open block
         </button>
    </div>
    

    <div id="gifs" class="collapse">
       <div class="container-fluid padding">
         <div class="row text-center">
            <div class="col-sm-6 col-md-6 col-lg-3">
              <img src={gif_1} class="gif"/>
            </div>
            <div class="col-sm-6 col-md-6 col-lg-3">
               <img src={gif_2} class="gif"/>
             </div>
             <div class="col-sm-6 col-md-6 col-lg-3">
               <img src={gif_3} class="gif"/>
             </div>
             <div class="col-sm-6 col-md-6 col-lg-3">
               <img src={gif_4} class="gif"/>
             </div>
         </div>
       </div>
    </div>
    </React.Fragment>
  )
}

export default GifBlock