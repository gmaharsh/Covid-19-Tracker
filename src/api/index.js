import axios from 'axios';

const url = "https://api.covidtracking.com/v1/us";

export const fetchData = async () => {
    try {
        const response = await axios.get(`${url}/current.json`);
        return response
    } catch (err) {
        console.log(err)
    }
}

export const fetchDailyDate = async () => {
    try {
        const { data } = await axios.get(`${url}/daily.json`);
        
        // const modifiedData = data.map((dailyData) => ({
        //     postive: dailyData.postiveIncrease.total,
        //     deaths: dailyData.deaths.total,
        //     recovered: dailyData.negativeIncrease.total,
        //     date: (dailyData.dateChecked).split('T')
        // }))
        return data
    } catch (err) {
        
    }
}