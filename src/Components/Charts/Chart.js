import React, { useEffect, useState } from 'react'
import { fetchDailyDate } from '../../api';
import { Line } from 'react-chartjs-2';
import './Charts.css';

function Chart() {

    const [dailyData, setDailyData] = useState([])

    useEffect(() => {
        async function fetchingData() {
            const data = await fetchDailyDate();
            setDailyData(data);
        }

        fetchingData()
    }, [])
    
    console.log(dailyData)

    const lineChart = (
        dailyData[0] ? (
            <Line
                data={{
                    labels: dailyData.map(({date}) => date),
                    datasets: [{
                        data: dailyData.map(({positiveIncrease}) => positiveIncrease),
                        label: 'Postive Cases',
                        borderColor: 'green',
                        fill:true,
                    }, {
                        data: dailyData.map(({negativeIncrease}) => negativeIncrease),
                        label: 'Recovered Cases',
                        borderColor: 'blue',
                        fill:true,
                    }, {
                        data: dailyData.map(({deathIncrease}) => deathIncrease),
                        label: 'Deaths',
                        borderColor: 'red',
                        fill:true,
                    }],
                }}
            />) : null
    )

    // console.log("Date:-",dailyData[0].date)
    return (
        <div className="chart">
            {lineChart}
        </div>
    )
}

export default Chart;
