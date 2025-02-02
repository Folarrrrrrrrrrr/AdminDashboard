import React from 'react'
import Style from '../total_Card/Total_Card.module.css'
import { Link } from 'react-router-dom'



const Total_Card = (props) => {
  const { image1, text, divText, divTextColor, price, to, isBlack, isPurple, isGreen, isRed ,onClick, all, image2, image3, image4, price2, price3, price4, view_div = true } = props


  return (

    <div id={Style.Total_Card_mainDiv} onClick={onClick}>

      <div id={Style.statCards}> 
        <div id={Style.Total_Card_Wrapper} style={{ backgroundColor: isBlack ? 'rgba(4, 135, 155, 0.4)' : isPurple?  'rgba(11,67,141, 0.15)': isGreen? 'rgba(49,195,100, 0.15)': isRed?'rgba(237,113,13,0.15)': "#FFFFFF", cursor: "pointer" }}>
          <div id={Style.Total_Card_firstLine_Div}>

            <div id={Style.Total_Card_firstLine_ImgDiv}>

              <img src={image1} alt="" />
              <div id={Style.Total_CardText} style={{ color: isBlack ? "#FFFFFF" : "#777777", }}>{text}</div>
            </div>

            {view_div == true ? <div id={Style.Total_Card_imgDiv} style={{ borderColor: isBlack ? "#ffffff" : "#0E093C", backgroundColor:  isBlack ? 'rgb(4, 135, 155)' : isPurple?  'rgba(11, 67, 141, 0.45)': isGreen? 'rgba(49,195,100, 0.15)': isRed?'rgba(237, 114, 13, 0.37)':"transparent" }} >

              <Link to={to}>
                <div id={divTextColor}>{divText}</div>
              </Link>
            </div> : ""}

          </div>

          <div id={Style.Total_Card_info_Div}>

            <p id={Style.priceText} style={{ color: isBlack ? "#FFFFFF" : "#0E093C", }}>
              <span>{all}</span> {price}
            </p>

            <div id={Style.contact_detailsDiv}>

              <p><img src={image2} alt="" />{price2}</p>
              <p><img src={image3} alt="" />{price3}</p>
              <p><img src={image4} alt="" />{price4}</p>

            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Total_Card