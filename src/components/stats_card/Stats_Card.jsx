import React from 'react'
import Style from '../stats_card/Stats_Card.module.css'
import rise from '../../assets/svg/rise.svg'
import arrow_side from '../../assets/svg/arrow_side.svg'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'



const Stats_Card = (props) => {
    const { img, figure, text, to, colourChange, onClick, isBlack, isPurple,isTransparent, isGreen, isRed, customContainer,customContainerWidth } = props
    return (
        <div id={Style.Stats_Card_mainDiv} onClick={onClick}>
            <Link to={to}>
             <div className={Style.Stats_CardDiv} style={{ backgroundColor: isTransparent? 'rgba(254, 255, 255, 0)': isBlack ? 'rgba(4, 135, 155, 0.4)' : isPurple?  'rgba(11,67,141, 0.15)': isGreen? 'rgba(49,195,100, 0.15)': isRed?'rgba(237,113,13,0.15)': "#FFFFFF", cursor: "pointer" }}>
                    <div id={Style.Stats_Card_img_textDiv}>
                        <img src={img} alt="" />
                        <div>
                            <p className={Style.Card_figure} style={{ color: colourChange ? "#FFFFFF" : "#333333" }}>{figure}</p>
                            <p className={Style.Card_text} style={{ color: colourChange ? "#FFFFFF" : "#333333" }}>{text}</p>
                        </div>
                    </div>
                    <img src={arrow_side} alt="" />
                </div>
            </Link>

        </div>
    )
}

export default Stats_Card