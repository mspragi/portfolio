import React,{useState,useEffect} from 'react'
import ReactLoading from 'react-loading'
import Profile from '../profile/profile';
import './preloader.css'




export const Preloader = () => {

    const [load, setload] = useState();
    
    useEffect(() => {
        setTimeout(()=>{
            setload(true);
        },2000)
    }, )
    

    return (
        <div className='preload"'>

  {!load ?( 
  <ReactLoading  type={'bars'} color={'blue'} height={'100px'} width={'100px'}  />):
  (
    <Profile/>
  ) }
            
            </div> 
    )
}
