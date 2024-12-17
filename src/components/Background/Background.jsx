import './Background.css'
import video1 from '../../assets/car.mp4';
import i1 from '../../assets/i1.jpg';
import i2 from '../../assets/redcar.jpg';
import i3 from '../../assets/multi.jpg';
const Background = ({play,heroCount}) => {
  if (play){
    return(
      <video className='background fade-in' autoPlay loop muted>
        <source src={video1} type='video/mp4'/>
 
      </video>
    )

  }
  else if(heroCount===0){
    return <img src={i1} className='background' alt="" />
  }
  else if(heroCount===1){
    return <img src={i2} className='background' alt="" />
  }

  else if(heroCount===2){
    return <img src={i3} className='background' alt="" />
  }
  else{
    return null;
  }

};

export default Background
