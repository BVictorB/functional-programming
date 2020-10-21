const eyeColor = (data) => {
    const eyeColors = getData(data, 'oogKleur')
    const colorContainer = document.querySelector('.color-container')
    const eyeColorsEdited = eyeColors.map(str => str.replace(/[^A-Z0-9]/ig, '').toUpperCase())

    // Add recognition of words and change them to colors
    const createColorTiles = (color) => {
        const colorBlock = document.createElement('div');
        const colorText = document.createElement('p')
        if (checkContrast(color)) {
            colorText.style.color = 'white'
        }
        colorText.innerHTML = '#' + color
        colorBlock.style.backgroundColor = '#' + color
        colorContainer.appendChild(colorBlock)
        colorBlock.appendChild(colorText)
    }

    const checkContrast = (color) => {
        const r = parseInt(color.substr(0, 2), 16);
        const g = parseInt(color.substr(2, 2), 16);
        const b = parseInt(color.substr(4, 2), 16);
        const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;

        if (yiq <= 128) {
            return true
        }
    }

    eyeColorsEdited.forEach((eyeColor) => {
        createColorTiles(eyeColor)
    })
}

const dobAmount = (data) => {
    const studentDebts = getData(data, 'hoogteStudieschuld')

    const sortStudentDebts = studentDebts.reduce((obj, b) => {
        obj[b] = ++obj[b] || 1;
        return obj;
    }, {});

    for (key in sortStudentDebts) {
        console.log(key + ': ' + sortStudentDebts[key])
    }
}

const getData = (data, column) => {
    return data.map(result => result[column])
}

const useData = (data) => {
    eyeColor(data)
    dobAmount(data)
}

fetch('./data/survey-dataset.json')
    .then(res => res.json())
    .then(fetchedData => useData(fetchedData))