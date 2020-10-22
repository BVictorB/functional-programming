const eyeColor = (data) => {
    const
        eyeColors = getData(data, 'oogKleur')
        colorContainer = document.querySelector('.color-container')
        eyeColorsEdited = eyeColors.map(str => str.replace(/[^A-Z0-9]/ig, '').toUpperCase())
        colorTranslate = {
        'blauw': '0000FF',
        'lichtblauw': 'ADD8E6',
        'bruin': '8B4513',
        'groen': '008000',
        'rood': 'FF0000',
        'zwart': '000000',
        'geel': 'FFFF00'
        }

    const createColorTiles = (color) => {
        const
            colorBlock = document.createElement('div')
            colorText = document.createElement('p')

        setColor(color, colorBlock, colorText)
        checkContrast(color, colorText)
        
        colorContainer.appendChild(colorBlock)
        colorBlock.appendChild(colorText)
    }

    const setColor = (color, colorBlock, colorText) => {
        if (color.toLowerCase() in colorTranslate) {
            color = color.toLowerCase()
            const newColor = colorTranslate[color]
            colorText.innerHTML = '#' + newColor
            colorBlock.style.backgroundColor = '#' + newColor
            checkContrast(newColor, colorText)
        } else {
            colorText.innerHTML = '#' + color
            colorBlock.style.backgroundColor = '#' + color
        }
    }

    const checkContrast = (color, colorText) => {
        const
            r = parseInt(color.substr(0, 2), 16)
            g = parseInt(color.substr(2, 2), 16)
            b = parseInt(color.substr(4, 2), 16)
            yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000

        if (yiq <= 128) {
            colorText.style.color = 'white'
        }
    }

    eyeColorsEdited.forEach((eyeColor) => {
        createColorTiles(eyeColor)
    })
}

const debtAmount = (data) => {
    const studentDebts = getData(data, 'hoogteStudieschuld')

    const sortStudentDebts = studentDebts.reduce((obj, key) => {
        obj[key] = (obj[key] || 0) + 1 // Or '++obj[key] || 1' both would work 
        return obj
    }, {})

    for (key in sortStudentDebts) {
        console.log(key + ': ' + sortStudentDebts[key])
    }
}

const getData = (data, column) => {
    return data.map(result => result[column])
}

const useData = (data) => {
    eyeColor(data)
    debtAmount(data)
}

fetch('./data/survey-dataset.json')
    .then(res => res.json())
    .then(fetchedData => useData(fetchedData))