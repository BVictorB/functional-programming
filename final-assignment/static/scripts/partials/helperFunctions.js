export const roundToTwoDecimals = (number) => {
    return Math.round(number * 100) / 100
}

export const filterDataFromKey = (data, key) => {
    return data.map(result => result[key])
}