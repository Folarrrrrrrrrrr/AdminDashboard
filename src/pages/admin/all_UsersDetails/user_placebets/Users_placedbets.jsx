import React, { useState } from 'react'
import Style from './Users_placedbets.module.css'
import Header from '../../../../components/header/Header'
import Activity from '../../../../assets/svg/Activity.svg'
import Total_Card from '../../../../components/total_Card/Total_Card'
import BetPlaced_com from '../../../../components/bet_placedCom/BetPlaced_com'
import person from '../../../../assets/images/person_img.png'
import green_eyes from '../../../../assets/svg/green_eyes.svg'
import warning from '../../../../assets/svg/yellow_warning.svg'
import delete_list from '../../../../assets/svg/product_delete.svg'





const Users_placedbets = () => {


    const placedbet_total_Card = [

        {
            image1: Activity,
            text: "Total Amount Staked",
            divText: "View All",
            price: "$25,000",
            to: "",
            view_div: false

        },
        {
            image1: Activity,
            text: "Total Amount Won",
            divText: "View All",
            price: "$15,052",
            view_div: false
        },
        {
            image1: Activity,
            text: "Total Amount Loss",
            divText: "View All",
            price: "$5,000",
            view_div: false
        },
        {
            image1: Activity,
            text: "Lorem",
            divText: "View all",
            price: "23,000",
            view_div: false
        },
    ]



    const arr = [
        {
          SN: "1",
          userID: "5466FH",
          BetID: "6458575RFG",
          game: "DiceRoom344",
          amount: "1000",
          players: person,
          status: "Won",
          win: "5000",
          action: {
            eye: green_eyes,
            warning: warning,
            delete: delete_list
          }
    
        },
        {
          SN: "2",
          userID: "5466FH",
          BetID: "6458575RFG",
          game: "DiceRoom344",
          amount: "1000",
          players: person,
          status: "Lost",
          win: "5000",
          action: {
            eye: green_eyes,
            warning: warning,
            delete: delete_list
          }
    
        },
        {
          SN: "2",
          userID: "5466FH",
          BetID: "6458575RFG",
          game: "DiceRoom344",
          amount: "1000",
          players: person,
          status: "Lost",
          win: "5000",
          action: {
            eye: green_eyes,
            warning: warning,
            delete: delete_list
          }
    
        },
        {
          SN: "2",
          userID: "5466FH",
          BetID: "6458575RFG",
          game: "DiceRoom344",
          amount: "1000",
          players: person,
          status: "Lost",
          win: "5000",
          action: {
            eye: green_eyes,
            warning: warning,
            delete: delete_list
          }
    
        },
        {
          SN: "3",
          userID: "5466FH",
          BetID: "6458575RFG",
          game: "DiceRoom344",
          amount: "1000",
          players: person,
          status: "Won",
          win: "5000",
          action: {
            eye: green_eyes,
            warning: warning,
            delete: delete_list
          }
    
        },
        {
          SN: "4",
          userID: "5466FH",
          BetID: "6458575RFG",
          game: "DiceRoom344",
          amount: "1000",
          players: person,
          status: "Lost",
          win: "5000",
          action: {
            eye: green_eyes,
            warning: warning,
            delete: delete_list
          }
    
        },
        {
          SN: "3",
          userID: "5466FH",
          BetID: "6458575RFG",
          game: "DiceRoom344",
          amount: "1000",
          players: person,
          status: "Won",
          win: "5000",
          action: {
            eye: green_eyes,
            warning: warning,
            delete: delete_list
          }
        },
    
        {
          SN: "3",
          userID: "5466FH",
          BetID: "6458575RFG",
          game: "DiceRoom344",
          amount: "1000",
          players: person,
          status: "Won",
          win: "5000",
          action: {
            eye: green_eyes,
            warning: warning,
            delete: delete_list
          }
        }
      ]



    return (
        <div id={Style.Users_placedbets_mainDiv}>
            <Header
                headerText={"John Doe's Bet Placed"}
                headerInfo={"Here’s an information on all bets placed by John Doe"} />


            <div id={Style.placedbets_wrapperDiv}>

                <div id={Style.Users_placedbets_mapDiv}>

                    {
                        placedbet_total_Card.map((obj) => {

                            return (
                                <Total_Card
                                    image1={obj.image1}
                                    text={obj.text}
                                    divText={obj.divText}
                                    price={obj.price}
                                    to={obj.to}
                                    view_div={obj.view_div}
                                />
                            )
                        })
                    }
                    
                </div>
                <p id={Style.headerText}>All Bets Overview</p>


                {/* betplaced components */}
                <div id={window.innerWidth < 480 ? Style.betPlacedComponent : null}>
                  <BetPlaced_com arr= {arr} initialIndex= {0}/>
                </div>
            
            </div>
        </div >
    )
}

export default Users_placedbets