import axios from 'axios';

const url = " http://disease.sh/v3/covid-19/all";

export const fetchData = async () => {
    try {
        const response = await axios.get(url);
        return response
    } catch (err) {
        console.log(err)
    }
}