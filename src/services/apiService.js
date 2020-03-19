import axios from "axios";
import { APIKEY } from 'react-native-dotenv';

export const getCasesBr = async() => {
   return new Promise(async(resolve, rejected)=>{
    await axios.get('https://api.coronaanalytic.com/brazil')
    .then((data) => {
        resolve(data.data);
    }).catch((err) => {
        rejected(err)
    })
   })
}

export const getCasesWorld = async() => {
    return new Promise(async(resolve, rejected)=>{
        await axios.get('https://api.coronaanalytic.com/world')
        .then((data) => {
            resolve(data.data);
        }).catch((err) => {
            rejected(err)
        })
    })
}

export const notice = async(date)=>{
    return new Promise(async(resolve, rejected)=>{
        await axios.get('http://newsapi.org/v2/everything?q=coronavirus&language=pt&from='+date+'&to='+date+'&apiKey='+APIKEY)
        .then((data)=>{
            resolve(data.data);
        }).catch((err)=>{
            rejected(err);
        })
    })
}