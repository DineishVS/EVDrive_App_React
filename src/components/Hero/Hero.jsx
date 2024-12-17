import './Hero.css'
import playicon from '../../assets/play.png';
import pauseicon from '../../assets/pause.png';
import arrowb from '../../assets/arrow.png';


const Hero = ({HeroData,setherocount,heroCount,setplay,play}) => {
  return (
    <div className='hero'>
      <div className="hero-text">
        <p>{HeroData.text1}</p>
        <p>{HeroData.text2}</p>
      </div>
      <div className="hero-explore">
        <p>Explore the Features</p>
        <img src={arrowb} alt="" />
      </div>
      <div className="hero-dot-play">
        <ul className="hero-dots">
          <li onClick={()=>setherocount(0)} className={heroCount===0?"hero-dot orange":"hero-dot"}></li>
          <li onClick={()=>setherocount(1)} className={heroCount===1?"hero-dot orange":"hero-dot"}></li>
          <li onClick={()=>setherocount(2)} className={heroCount===2?"hero-dot orange":"hero-dot"}></li>
        </ul>
        <div className="hero-play">
          <img onClick={()=>setplay(!play)}src={play?pauseicon:playicon}alt=""/>
          <p>See the video</p>
        </div>

      </div>
    </div>
  )
}

export default Hero
