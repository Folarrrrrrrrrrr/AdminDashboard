import React from 'react'
import Style from '../countries/FootSoldiers_countries.module.css'
import search from '../../../../assets/svg/Search.svg'
import arrow_down from '../../../../assets/svg/arrow_down-dark.svg'
import InputField from '../../../../components/input/InputField'
import Button from '../../../../components/button/Button'
import country_flag2 from '../../../../assets/svg/country_flag2.svg'
import country_flag from '../../../../assets/svg/country_flag.svg'
import nig_flag from '../../../../assets/svg/nig_flag.svg'
import Header from '../../../../components/header/Header'




const FootSoldiers_countries = () => {

    const country_arr = [
        {
            country: "Nigeria",
            user: "20000",
            flag: nig_flag,
            action: "View Users"
        },
        {
            country: "Nigeria",
            user: "20000",
            flag: country_flag,
            action: "View Users"
        },
        {
            country: "Nigeria",
            user: "20000",
            flag: country_flag2,
            action: "View Users"
        },
        {
            country: "Nigeria",
            user: "20000",
            flag: country_flag2,
            action: "View Users"
        },
        {
            country: "Nigeria",
            user: "20000",
            flag: nig_flag,
            action: "View Users"
        },
        {
            country: "Nigeria",
            user: "20000",
            flag: nig_flag,
            action: "View Users"
        },
        {
            country: "Nigeria",
            user: "20000",
            flag: country_flag2,
            action: "View Users"
        },
        {
            country: "Nigeria",
            user: "20000",
            flag: country_flag,
            action: "View Users"
        },
    ]

    return (
        <div id={Style.Countries_mainDiv}>
            <Header
                headerText={"Countries"}
                headerInfo={"Here’s an information on all Countries"} />

            <div id={Style.Countries_wrapperDiv}>

                <div id={Style.input_FilterDiv}>
                    <p>3rd July, 2024 <img src={arrow_down} alt="" /></p>
                    <div id={Style.searchDiv}>
                        <img src={search} alt="" />
                        <InputField
                            placeholder={"Search Countries"} />
                    </div>
                </div>

                    <div id={Style.Countries_tableDiv}>
                        <table>

                            <thead>
                                <tr id={Style.headerTable}>
                                    <th>S/N</th>
                                    <th>Countries</th>
                                    <th>Users</th>
                                    <th id={Style.amount_TableText}>Flag</th>
                                    <th>Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    country_arr.map((obj, index) => {

                                        return (
                                            <tr id={Style}>
                                                <td className={Style.number}>{index + 1}</td>
                                                <td>{obj.country}</td>
                                                <td>{obj.user}</td>
                                                <td><img src={obj.flag} alt="" /></td>
                                                <td>
                                                    <Button
                                                        text={obj.action} />
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>

                        </table>
                    </div>
            </div>
        </div>
    )
}

export default FootSoldiers_countries