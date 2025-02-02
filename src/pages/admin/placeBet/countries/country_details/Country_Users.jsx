import React, { useState } from 'react'
import Style from "./Country_Users.module.css"
import flag from "../../../../../assets/svg/nig_flag.svg"
import person from "../../../../../assets/images/Person1.png"
import search from "../../../../../assets/svg/Search.svg"
import InputField from "../../../../../components/input/InputField"
import Header from "../../../../../components/header/Header"
import App_Pagination from "../../../../../components/app_Pagination/App_Pagination"
import Staff_Card from '../../../../../components/userStaff_Card/Staff_Card'




const Country_Users = () => {

    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(12)



    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    const footSoldiers_arr = [

        {
            img: person,
            name: "John Doe",
            position: "Nigeria",
            status: "Online",
            to: "/userDetails"
        },
        {
            img: person,
            name: "John Doe",
            position: "Nigeria",
            status: "Online"
        },
        {
            img: person,
            name: "John Doe",
            position: "Nigeria",
            status: "Online"
        },
        {
            img: person,
            name: "John Doe",
            position: "Nigeria",
            status: "Online"
        },
        {
            img: person,
            name: "John Doe",
            position: "Nigeria",
            status: "Online"
        },
        {
            img: person,
            name: "John Doe",
            position: "Nigeria",
            status: "Online"
        },
        {
            img: person,
            name: "John Doe",
            position: "Nigeria",
            status: "Online"
        },
        {
            img: person,
            name: "John Doe",
            position: "Nigeria",
            status: "Offline"
        },
        {
            img: person,
            name: "John Doe",
            position: "Nigeria",
            status: "Offline"
        },
        {
            img: person,
            name: "John Doe",
            position: "Nigeria",
            status: "Online"
        },
        {
            img: person,
            name: "John Doe",
            position: "Nigeria",
            status: "Online"
        },
        {
            img: person,
            name: "John Doe",
            position: "Nigeria",
            status: "Online"
        },
        {
            img: person,
            name: "John Doe",
            position: "Nigeria",
            status: "Offline"
        },
        {
            img: person,
            name: "John Doe",
            position: "Nigeria",
            status: "Online"
        },
        {
            img: person,
            name: "John Doe",
            position: "Nigeria",
            status: "Online"
        },
        {
            img: person,
            name: "John Doe",
            position: "Nigeria",
            status: "Online"
        },
        {
            img: person,
            name: "John Doe",
            position: "Nigeria",
            status: "Offline"
        },
        {
            img: person,
            name: "John Doe",
            position: "Nigeria",
            status: "Online"
        },
        {
            img: person,
            name: "John Doe",
            position: "Nigeria",
            status: "Online"
        },
        {
            img: person,
            name: "John Doe",
            position: "Nigeria",
            status: "Online"
        },
        {
            img: person,
            name: "John Doe",
            position: "Nigeria",
            status: "Offline"
        },
        {
            img: person,
            name: "John Doe",
            position: "Nigeria",
            status: "Online"
        },
        {
            img: person,
            name: "John Doe",
            position: "Nigeria",
            status: "Online"
        },
        {
            img: person,
            name: "John Doe",
            position: "Nigeria",
            status: "Online"
        },
    ]

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = footSoldiers_arr.slice(indexOfFirstPost, indexOfLastPost);


    return (

        <div id={Style.FootSoldiers_mainDiv}>

            <Header
                headerText={"Country"}
                headerInfo={"Here’s an information on country"} />

            <div id={Style.FootSoldiers_wrapperDiv}>


                <div id={Style.flag_Div}>
                    <img id={Style.flag_img} src={flag} alt="" />
                </div>

                <div id={Style.FootSoldiers_header_dateDiv}>

                    <p id={Style.headerText}>All Users in Nigeria</p>

 
                        <div id={Style.searchDiv}>
                            <img src={search} alt="" />
                            <InputField
                                placeholder={"A-Z"} />
                        </div>

                </div>

                <div id={Style.footSoldiers_Card}>
                    {
                        currentPosts.map((object) => {
                            let statusColor = object.status === "Online" ? true : false

                            return (
                                <Staff_Card
                                    img={object.img}
                                    status={object.status}
                                    name={object.name}
                                    position={object.position}
                                    to={object.to}
                                    statusColor={statusColor} />
                            )
                        })
                    }
                </div>

              

                        <App_Pagination
                            postsPerPage={postsPerPage}
                            totalPosts={footSoldiers_arr.length}
                            paginate={paginate}
                        />

            </div>
        </div>
    )
}

export default Country_Users