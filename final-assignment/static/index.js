const fetchData = async (url) => {
    const response = await fetch(url)
    const data = await response.json()
    return data
}

const filterDataFromKey = (data, key) => {
    return data.map(result => result[key])
}

const getData = (url, key) => {
    return fetchData(url).then(data => {
        if (key) {
            return filterDataFromKey(data, key)
        } else {
            return data
        }
    })
}

getData('https://opendata.rdw.nl/resource/t5pc-eb34.json', 'areaid').then(result => {
    console.log(result)
})

getData('https://opendata.rdw.nl/resource/t5pc-eb34.json').then(result => {
    console.log(result)
})