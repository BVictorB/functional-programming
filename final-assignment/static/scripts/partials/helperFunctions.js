export const roundToTwoDecimals = (number) => {
    return Math.round((number.amountfarepart / number.stepsizefarepart * 60) * 100) / 100
}

export const filterDataFromKey = (data, key) => {
    return data.map(result => result[key])
}