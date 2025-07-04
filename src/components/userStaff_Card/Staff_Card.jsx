import React from 'react'
import Style from './Staff_Card.module.css'
import Button from '../button/Button'
import { Link } from 'react-router-dom'


const Staff_Card = (props) => {

//   const { id } = useParams();
//   const [profile, setProfile] = useState(null);
//   const [loading, setLoading] = useState(true);

    
    const { img, status, position, name, to,subscriptionType, statusColor, phone, lastname,  country, verified, isBlack, isPurple, isGreen, isRed, email  } = props

    return (

        <div id={Style.Staff_Card_mainDiv}>

            <div id={Style.Staff_Card_WrapperDiv}>

                <div>
                    <div id={Style.verified_img_div}>

                    {verified && <img id={Style.VerifiedImgDesktop} src={verified} alt="" />}

                    </div>

                    <img src={img} alt="" />
                </div>

                <div id={Style.Staff_Card_textDiv}>
                    {/* <p className={Style.Staff_Card_nameText}>{name}</p> */}
                    {/* <p className={Style.Staff_Card_careRep}>{position}</p> */}
                    {
                        name&&
                        <p className={Style.Staff_Card_careRep}>{name}</p>
                    }
                    {
                        lastname&&
                        <p className={Style.Staff_Card_careRep}>{lastname}</p>
                    }
                    {
                        subscriptionType&&
                        <p className={Style.Staff_Card_careRep}>{subscriptionType}</p>
                    }
                    {
                        email&&
                        <p className={Style.Staff_Card_careRep}>{email}</p>
                    }
                    {
                        position&&
                        <p className={Style.Staff_Card_careRep}>{position}</p>
                    }
                    {
                        phone&&
                        <p className={Style.Staff_Card_careRep}>{phone}</p>
                    }
                    {
                        country&&
                        <p className={Style.Staff_Card_careRep}>{country}</p>
                    }
                    {/* <p className={Style.Staff_Card_careRep}>{country}</p> */}
                    <p className={Style.Staff_Card_onlineDiv}> <div className={Style.Staff_Card_online_signalDiv} style={{backgroundColor: status=== "active" ? 'rgb(54, 133, 1)':isBlack ? 'rgba(4, 135, 155, 0.4)' : isPurple?  'rgba(11,67,141, 0.15)': isGreen? 'rgba(49,195,100, 0.15)': isRed?'rgba(237,113,13,0.15)': "#FFFFFF", cursor: 'pointer' }}></div>{status}</p>
                    <div>
                    {
                        window.innerWidth < 480 ? verified ? <img id={Style.VerifiedImg} style={{width:30}} src={verified} alt="" /> :'':''
                    }                        
                    </div>
                    <div id={ verified ? Style.BtnDiv : ''}></div>

                    <Link to={to}>
                        <Button
                            
                            text={"View More Details"} />
                    </Link> 
                </div>
            </div>
        </div>




        // <div id={Style.Staff_Card_mainDiv}>

        //     <div id={Style.Staff_Card_WrapperDiv}>
        //         <div id={Style.onboardedText}>
        //             <p>Frozen</p>
        //         </div>



        //         <div id={Style.Staff_Card_textDiv}>
        //             <img src={img} alt="" />
        //             <div>
        //                 <p className={Style.Staff_Card_nameText}>John Doe</p>
        //                 <p className={Style.Staff_Card_careRep}>Nigeria</p>
        //                 {/* <p className={Style.emailText}>erry5jb</p> */}
        //                 <p className={Style.Staff_Card_onlineDiv}> <div className={Style.Staff_Card_online_signalDiv}></div>{status}</p>

        //                 <Link to={to}>
        //                     <Button
        //                         text={"View More Details"} />
        //                 </Link>

        //             </div>
        //         </div>
        //     </div>
        // </div >
    )
}

export default Staff_Card