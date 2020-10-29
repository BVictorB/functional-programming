import { getData } from './partials/getData'
import { roundToTwoDecimals, filterDataFromKey } from './partials/helperFunctions'

getData('https://opendata.rdw.nl/resource/534e-5vdg.json?$limit=10000').then(result => {
    result.forEach(item => {
        console.log(roundToTwoDecimals(item))
    })
    console.log(filterDataFromKey(result, 'areamanagerid'))
})