import React from 'react'
import Style from '../winner/Winner_loser.module.css'
import filter_img from '../../../../assets/svg/Complete_filter_img.svg'
import download from '../../../../assets/svg/download_img.svg'
import search from '../../../../assets/svg/Search.svg'
import arrow_down from '../../../../assets/svg/arrow_down-dark.svg'
import InputField from '../../../../components/input/InputField'
import Header from '../../../../components/header/Header'


const Winner_loser = () => {
    return (
        <div id={Style.Winner_loser_mainDiv}>
            <Header
                headerText={"Winners"}
                headerInfo={"Here’s an information on all Winners"} />

            <div id={Style.Winner_loser_wrapperDiv}>
                <div id={Style.input_FilterDiv}>
                    <p>3rd July, 2024 <img src={arrow_down} alt="" /></p>
                    <div id={Style.searchDiv}>
                        <img src={search} alt="" />
                        <InputField
                            placeholder={"Search tickets"} />
                    </div>

                    <div id={Style.InputField_images}>
                        <img src={filter_img} alt="" />
                        <img src={download} alt="" />
                    </div>
                </div>

                <div id={Style.Winner_loser_wrapper}>
                    <div id={Style.Winner_loser_tableDiv}>
                        <table>
                            <tr id={Style.headerTable}>
                                <th>S/N</th>
                                <th>User ID</th>
                                <th>Ticket ID</th>
                                <th id={Style.amount_TableText}>Amount Staked</th>
                                <th>Amount Won</th>
                                <th>Status</th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>SA 123476689</td>
                                <td>8012345678</td>
                                <td>₦100.00</td>
                                <td>400.00</td>
                                <td>
                                    <div id={Style.statusText}>Won</div>
                                </td>
                            </tr>

                            <tr>
                                <td>2</td>
                                <td>SA 123476689</td>
                                <td>8012345678</td>
                                <td>₦100.00</td>
                                <td>400.00</td>
                                <td>
                                    <div id={Style.action_field}>
                                        <div id={Style.statusText}>Won</div>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>3</td>
                                <td>SA 123476689</td>
                                <td>8012345678</td>
                                <td>₦100.00</td>
                                <td></td>
                                <td>
                                    <div id={Style.action_field}>
                                        <div id={Style.statusText}>Won</div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>SA 123476689</td>
                                <td>8012345678</td>
                                <td>₦100.00</td>
                                <td></td>
                                <td>
                                    <div id={Style.action_field}>
                                        <div id={Style.statusText}>Won</div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>SA 123476689</td>
                                <td>8012345678</td>
                                <td>₦100.00</td>
                                <td></td>
                                <td>
                                    <div id={Style.action_field}>
                                        <div id={Style.statusText}>Won</div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>SA 123476689</td>
                                <td>8012345678</td>
                                <td>₦100.00</td>
                                <td></td>
                                <td>
                                    <div id={Style.action_field}>
                                        <div id={Style.statusText}>Won</div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>SA 123476689</td>
                                <td>8012345678</td>
                                <td>₦100.00</td>
                                <td></td>
                                <td>
                                    <div id={Style.action_field}>
                                        <div id={Style.statusText}>Won</div>
                                    </div>
                                </td>
                            </tr>
                            <tr id={Style.lastline}>
                                <td>8</td>
                                <td>SA 123476689</td>
                                <td>8012345678</td>
                                <td>₦100.00</td>
                                <td></td>
                                <td>
                                    <div id={Style.action_field}>
                                        <div id={Style.statusText}>Won</div>
                                    </div>
                                </td>
                            </tr>

                        </table>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Winner_loser