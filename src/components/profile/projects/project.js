import React from 'react'
import './project.css'





export const Project = () => {
   

    return (
        <>
        <section className='main'>
            <h3 >Projects</h3>
        <div className=' row projects '>
        <div className=' col-md-4 project1' data-aos='fade-left'>
                        <div className="card ">
                <div className="card-header" style={{color:' #007bff'}} >
                FrontEnd Development
                </div>
                <div className="card-body">
                    <p className="card-text">I have built beautiful movie website using <text>Html,Css,Bootstrap,Javascript</text> </p>
                    
                    <div className='ml-auto mg-3'>
                     <button className="btn btn-light btn_one " style={{float:'left'}}> <a href="https://github.com/mspragi/moviesite" target='_blank' > Code</a></button>
                        <button className="btn btn-light btn_one " style={{float:'right'}}> <a href="https://moviesite00.netlify.app/" target='_blank' > Live</a></button>
                    </div>
                   
                </div>
                </div>  
        </div>



        <div className=' col-md-4 project2' data-aos='fade-right'>
        <div className="card two">
                <div className="card-header " style={{color:' #007bff'}}>
                   Control Form
                </div>
                <div className="card-body">
                    <p className="card-text">I have develop Simple Login Control Form using <text> Reactjs </text> </p>
                    <div className='ml-auto '>
                     <button className="btn btn-light btn_one " style={{float:'left'}}> <a href="https://github.com/mspragi/control_form" target='_blank' > Code</a></button>
                     <button className="btn btn-light btn_one " style={{float:'right'}}> <a href="https://controlform.netlify.app/" target='_blank' > Live</a></button>

                    </div>
                </div>
                </div>
        </div>

      

        <div className=' col-md-4 project2' data-aos='fade-left' >
        <div class="card three">
                <div class="card-header " style={{color:' #007bff'}}>
                   NetflixClone
                </div>
                <div class="card-body">
                    <p class="card-text">I have bulit this website for my learning purpose using <text> Html,css</text>  </p>
                    <div className='ml-auto mg-3'>
                     <button className="btn btn-light btn_one " style={{float:'left'}}> <a href="https://github.com/mspragi/netflix" target='_blank' > Code</a></button>
                        <button className="btn btn-light btn_one " style={{float:'right'}}> <a href="https://chandrasekhar-86a527.netlify.app/" target='_blank' > Live</a></button>
                    </div>
                </div>
                </div>
        </div>


        <div className=' col-md-4 project2' data-aos='fade-right'>
        <div className="card four">
                <div className="card-header" style={{color:' #007bff'}}>
                   API Development
                </div>
                <div className="card-body">
                    <p className="card-text">I have develop Movie api using <text> omdb api in javascript</text> </p>
                    <div className='ml-auto '>
                     <button className="btn btn-light btn_one " style={{float:'left'}}> <a href="https://github.com/mspragi/movie-api" target='_blank' > Code</a></button>
                    </div>
                </div>
                </div>
        </div>


       
        </div>

        </section>
        </>
    )
}

 