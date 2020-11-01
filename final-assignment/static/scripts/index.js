import { getData } from './partials/getData'
import { roundToTwoDecimals, filterDataFromKey, formatGeoData } from './partials/helperFunctions'

// getData('https://opendata.rdw.nl/resource/534e-5vdg.json?$limit=10000').then(result => {
//     const pricePerHour = []
//     result.forEach(item => {
//         pricePerHour.push({
//             areamanagerid: item.areamanagerid,
//             price: roundToTwoDecimals(item.amountfarepart / item.stepsizefarepart * 60)
//         })
//     })
//     // console.log(filterDataFromKey(result, 'areamanagerid'))
//     console.log(pricePerHour)
// })

// getData('https://opendata.rdw.nl/resource/t5pc-eb34.json').then(result => {
//     const geoLocations = []
//     result.forEach(geoData => {
//         geoLocations.push(formatGeoData(geoData.location, geoData.areadesc, geoData.areaid))
//     })
//     console.log(geoLocations)
// })

getData('https://opendata.rdw.nl/resource/mz4f-59fw.json?$limit=10000').then(result => {
    let hasTariffs = 0
    let doesNotHaveTariffs = 0
    result.forEach((areaID, index) => {
        setTimeout(() => {
            getData(`https://npropendata.rdw.nl//parkingdata/v2/static/${areaID.uuid}`).then(UUID => {
            if (UUID.parkingFacilityInformation.tariffs[0]) {
                hasTariffs++
            } else {
                doesNotHaveTariffs++
            }
            console.log(`Tariff: ${hasTariffs}, No tariff: ${doesNotHaveTariffs}`)
        })
        }, index * 10)
    })
})