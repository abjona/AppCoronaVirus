import axios from "axios";

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