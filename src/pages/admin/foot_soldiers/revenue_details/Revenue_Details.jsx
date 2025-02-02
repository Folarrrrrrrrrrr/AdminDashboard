import React from 'react'
import Style from './Revenue_Details.module.css'
import { PopupContextHook } from '../../../../../WhiteHouse_PopupContext'
import arrow_down from '../../../../../assets/svg/arrow_down.svg'
import revenue_graph from '../../../../../assets/svg/revenue_graph.svg'
import green_arrowUp from '../../../../../assets/svg/green_arrowUp.svg'


const Revenue_Details = () => {

  const { updateRevenuePopup} = PopupContextHook()

  return (
    <div id={Style.Revenue_Details_mainDiv}>
      <div id={Style.transparentDiv} onClick={()=>updateRevenuePopup(false)}></div>

      <div id={Style.Revenue_Details_wrapperDiv}>
        <div id={Style.headerDiv}>
          <p>Daily Payments</p>
          <p id={Style.dateText}>Today <img src={arrow_down} alt="" /></p>
        </div>

        <p id={Style.headerText}>Mon 26th October, 2024</p>

        <div id={Style.revenue_TextDiv}>
          <p id={Style.amountText}>Total Amount</p>
          <p id={Style.Revenue_boldText}>3,000 WHC</p>
        </div>

        <div id={Style.Revenue_content_wrapperDiv}>
         
          <div className={Style.revenue_contentDiv}>
            <p className={Style.nameText}>John Doe</p>
            <img src={revenue_graph} alt="" />
            <p className={Style.total_revenueText}>500  WHC <img src={green_arrowUp} alt="" /></p>
          </div>

          <div className={Style.revenue_contentDiv}>
            <p className={Style.nameText}>John Doe</p>
            <img src={revenue_graph} alt="" />
            <p className={Style.total_revenueText}>500  WHC <img src={green_arrowUp} alt="" /></p>
          </div>

          <div className={Style.revenue_contentDiv}>
            <p className={Style.nameText}>John Doe</p>
            <img src={revenue_graph} alt="" />
            <p className={Style.total_revenueText}>500  WHC <img src={green_arrowUp} alt="" /></p>
          </div>

          <div className={Style.revenue_contentDiv}>
            <p className={Style.nameText}>John Doe</p>
            <img src={revenue_graph} alt="" />
            <p className={Style.total_revenueText}>500  WHC <img src={green_arrowUp} alt="" /></p>
          </div>

          <div className={Style.revenue_contentDiv}>
            <p className={Style.nameText}>John Doe</p>
            <img src={revenue_graph} alt="" />
            <p className={Style.total_revenueText}>500  WHC <img src={green_arrowUp} alt="" /></p>
          </div>

          <div className={Style.revenue_contentDiv}>
            <p className={Style.nameText}>John Doe</p>
            <img src={revenue_graph} alt="" />
            <p className={Style.total_revenueText}>500  WHC <img src={green_arrowUp} alt="" /></p>
          </div>

          <div className={Style.revenue_contentDiv}>
            <p className={Style.nameText}>John Doe</p>
            <img src={revenue_graph} alt="" />
            <p className={Style.total_revenueText}>500  WHC <img src={green_arrowUp} alt="" /></p>
          </div>

          <div className={Style.revenue_contentDiv}>
            <p className={Style.nameText}>John Doe</p>
            <img src={revenue_graph} alt="" />
            <p className={Style.total_revenueText}>500  WHC <img src={green_arrowUp} alt="" /></p>
          </div>

          <div className={Style.revenue_contentDiv}>
            <p className={Style.nameText}>John Doe</p>
            <img src={revenue_graph} alt="" />
            <p className={Style.total_revenueText}>500  WHC <img src={green_arrowUp} alt="" /></p>
          </div>

          <div className={Style.revenue_contentDiv}>
            <p className={Style.nameText}>John Doe</p>
            <img src={revenue_graph} alt="" />
            <p className={Style.total_revenueText}>500  WHC <img src={green_arrowUp} alt="" /></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Revenue_Details