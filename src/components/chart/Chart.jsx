import React, { useState } from 'react'
import { BarChart, YAxis, XAxis, Bar, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { LineChart, Line } from 'recharts';
import Style from '../chart/Chart.module.css'

const Chart = ({ data, line_data}) => {
  // const [state, setState] = useState(0)

  // const customTickFormatter = (tick) => {
  //   // Custom formatting logic, for example, converting a number to a string with a prefix
  //   return `${tick}`;
  // }



  return (
    <>
      <div>
        <div id={Style.Chart_mainDiv}>
          <div id={Style.PayoutsText}>Bet Placed</div>
          <ResponsiveContainer
            width="100%"
            height= "100%">
            <BarChart
              width={300}
              height={100}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: -40,
                bottom: 5,
              }}
            >

              <XAxis dataKey="name" fontSize={"0.8rem"}></XAxis>
              <YAxis fontSize={"0.7rem"}  ></YAxis>
              <Tooltip></Tooltip>
              <Bar dataKey="rank" stroke='none' stackId='a' fill='#003E79'></Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>


      </div>
      
    </>
  )
}

export default Chart