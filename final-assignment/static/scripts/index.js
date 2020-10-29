import { getData } from './partials/getData'
import { roundToTwoDecimals, filterDataFromKey } from './partials/helperFunctions'

getData('https://opendata.rdw.nl/resource/534e-5vdg.json?$limit=10000').then(result => {
    const pricePerHour = []
    result.forEach(item => {
        pricePerHour.push({
            areamanagerid: item.areamanagerid,
            price: roundToTwoDecimals(item.amountfarepart / item.stepsizefarepart * 60)
            })
    })
    // console.log(filterDataFromKey(result, 'areamanagerid'))
    console.log(pricePerHour)
})

getData('https://opendata.rdw.nl/resource/b3us-f26s.json?$limit=10000').then(result => {
    console.log(result)
})