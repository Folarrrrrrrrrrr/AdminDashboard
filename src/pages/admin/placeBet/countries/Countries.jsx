import React, { useEffect, useState } from 'react'
import Style from '../countries/Countries.module.css'
import search from '../../../../assets/svg/Search.svg'
import InputField from '../../../../components/input/InputField'
import Button from '../../../../components/button/Button'
import Header from '../../../../components/header/Header'
import { Link } from 'react-router-dom'
import { PopupContextHook } from '../../../../WhiteHouse_PopupContext'
import { getRegCountriesProvider } from '../../api_detaills/provider/user_provider'



const Countries = () => {


    const { updateErrorPopup, updateErrorText } = PopupContextHook()



    const [countries, setCountries] = useState([])


    // Effect to fetch all countries when the component mounts
    useEffect(() => {

        getRegCountriesProvider({
            updateCountries: (data) => {
                // Update the country state with the fetched data

                setCountries(data)
            },
            updateErrorPopup, // Function to update error popup
            updateErrorText // Function to update error text
        })

    }, []) // Empty dependency array means this runs once on mount






    return (

        <div id={Style.Winner_loser_mainDiv}>

            <Header
                headerText={"Total Countries"}
                headerInfo={"Here’s an information on all Countries"}
            />


            <div id={Style.Winner_loser_wrapperDiv}>

                <div id={Style.searchDiv}>

                    <img src={search} alt="" />
                    <InputField
                        placeholder={"Search Countries"} />

                </div>


                <div id={Style.Winner_loser_wrapper}>
                    <div id={Style.Winner_loser_tableDiv}>
                        <table>
                            <thead>
                                <tr id={Style.headerTable}>
                                    <th>S/N</th>
                                    <th>Countries</th>
                                    <th>Users</th>
                                    <th>Flag</th>
                                    <th>Action</th>
                                </tr>
                            </thead>

                            <tbody>

                                {
                                    countries.map((obj, index) => {

                                        return (

                                            <tr>
                                                <td className={Style.number}>{index + 1}</td>
                                                <td>{obj.name}</td>
                                                <td>{obj.users}</td>
                                                <td><img src={obj.flag} alt="" /></td>
                                                <td>
                                                    <Link to={"/countryUsers"}>
                                                        <Button
                                                            text={"View Users"} />
                                                    </Link>
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
        </div>
    )
}

export default Countries