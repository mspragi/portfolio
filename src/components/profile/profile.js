import React,{useEffect} from 'react'
import './style.css'
import Lottie from 'react-lottie';
import AOS from 'aos';
import 'aos/dist/aos.css';
import * as developer from '../profile/lotties/63921-developer.json';
import * as about from '../profile/lotties/9694-about.json';
import * as skills from '../profile/lotties/48531-htmlcssjs.json'
import { Skill } from './Skill/skill';
import { Project } from './projects/project';
import { Showprofile } from './sociallink/showprofile';


const Profile = () => {

    useEffect(() => {
       AOS.init({
           offset:100,
           duration:1000,
           easing:'ease'
       }
       ); 
    });


    const Developer = {
        loop: true,
        autoplay: true,
        animationData: developer.default,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

      
    const About = {
        loop: false,
        autoplay: true,
        animationData: about.default,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

      const skill={
        loop: true,
        autoplay: true,
        animationData: skills.default,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      }

    return (
      <>

       
        <div className='container'>
        <div  className='row ' data-aos='fade-right'>
            <div className='col-md-6 '>
            <div className='header'>
            <h4 data-text='Hi I am Prakash FrontEnd Developer'>Hi I am Prakash FrontEnd Developer</h4>
            </div>
            </div>
            <div className='col-md-6'>
            <div className='pic'>
            <Lottie options={Developer}/>
            </div>
        </div>
            </div>    



            <div className='about ' data-aos='fade-left' >
        <h3><Lottie options={About}/></h3>
             <p>
             I have good knowledge on front end development looking for opportunity to learn more  and  contribute for the growth of the organization.
             I am seeking a position where I will be able to share my high level of skills for
the growth and development of the organization and also where I can upgrade
my knowledge.
             </p>
        </div>




    <div className='row skill' >
    <div className='col-md-6' data-aos='fade-left'>
        <div className='skillpic'>
          <h3 >Skills</h3>
        <Lottie options={skill} style={{width:'70%'}}/>
        </div>
    </div>

    <div className='col-md-6 ' data-aos='fade-right'>
          <div className='skills' >
            <Skill/>
        </div>
        </div>
        </div>


        <Project/>
      
      
      
         </div>
        

         <div className='footer' data-aos='zoom-in'>
            <Showprofile/>
         </div>

      
        </>
    )
}

export default Profile;
