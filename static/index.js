const colors = (data) => {
    const
        favoriteColors = getData(data, 'lievelingskleur') // Creates an array of colors that users filled in
        eyeColors = getData(data, 'oogKleur')
        favoriteColorsContainer = document.querySelector('.favorite')
        eyeColorContainer = document.querySelector('.eye')
        colorTranslate = {
        'blauw': '0000FF',
        'lichtblauw': 'ADD8E6',
        'bruin': '8B4513',
        'groen': '008000',
        'rood': 'FF0000',
        'zwart': '000000',
        'geel': 'FFFF00',
        'legergroen': '4B5320',
        'staal': '808080',
        'grijs': '666666'
        } // Object for changing users their incorrect entries to HEX color codes

        // eyeColorEdited = eyeColor.map(str => str.replace(/[^A-Z0-9]/ig, '').toUpperCase()) // Removes all special characters, spaces etc. from the array and makes all letters caps

    // Function that runs all functions to create the colored tiles
    const colorTiles = (color, container) => {
        const
            colorBlock = document.createElement('div')
            colorText = document.createElement('p')

        setColor(color, colorBlock, colorText, container)
        checkContrast(color, colorText)
    }

    // Function that checks the color, matches it with key in object, or just uses the color given by the user
    const setColor = (color, colorBlock, colorText, container) => {
        let newColor

        if (color.toLowerCase() in colorTranslate) {
            newColor = colorTranslate[color.toLowerCase()]
            checkContrast(newColor, colorText)
        } else if (color.length === 6) {
            newColor = color
        } else {
            return
        }
        createColorTiles(newColor, colorBlock, colorText, container)
    }

    // Function that translates the HEX color code to RGB, and then to YIQ. We use YIQ to check if we need to change the text color to white for better contrast
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

    // Function that finally creates all the colored tiles (puts them in the DOM)
    const createColorTiles = (newColor, colorBlock, colorText, container) => {
        colorText.innerHTML = '#' + newColor
        colorBlock.style.backgroundColor = '#' + newColor
        colorBlock.classList.add('color-block')
        colorBlock.dataset.color = newColor
        container.appendChild(colorBlock)
        colorBlock.appendChild(colorText)
    }

    // This forEach method loops trough all the formatted colors in the array and runs the createColorTiles function passing trough the filled in color
    eyeColors.forEach((eyeColor) => {
        eyeColorEdited = eyeColor.replace(/[^A-Z0-9]/ig, '').toUpperCase()
        colorTiles(eyeColorEdited, eyeColorContainer)
    })

    favoriteColors.forEach((favoriteColor) => {
        favoriteColorEdited = favoriteColor.replace(/[^A-Z0-9]/ig, '').toUpperCase()
        colorTiles(favoriteColorEdited, favoriteColorsContainer)
    })


    // This is the code for copying the color code to the clipboard of the user
    const colorBlocks = document.querySelectorAll('.color-block')

    colorBlocks.forEach((colorBlock) => {
        colorBlock.addEventListener('click', (e) => {
            colorBlock.classList.remove('copied')
            copyColor(e.target.dataset.color)
            giveFeedback(e.target)
        })
    })

    // Copies the color to the clipboard
    const copyColor = (color) => {
        const colorText = document.createElement('textarea')
        document.body.appendChild(colorText)
        colorText.innerHTML = color
        colorText.select()
        colorText.focus()
        document.execCommand('copy')
        document.body.removeChild(colorText)
    }

    // Adds a css class to give the user feedback
    const giveFeedback = (el) => {
        el.classList.add('copied')
    }
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

// Code that executes functions and passes the data after retrieving json data
const useData = (data) => {
    colors(data)
    debtAmount(data)
}

// Code for fetching the json data
fetch('./data/survey-dataset.json')
    .then(res => res.json())
    .then(fetchedData => useData(fetchedData))


const options = document.querySelectorAll('.option')
const container = document.querySelector('.data-container')
const containerChildren = container.querySelectorAll(":scope > div")

options.forEach((option) => {
    option.addEventListener('click', (e) => {
        containerChildren.forEach((containerChild) => {
            containerChild.classList.remove('visible')
        })
        document.querySelector(e.target.dataset.container).classList.add('visible')

        options.forEach((option) => {
            option.classList.remove('active')
        })
        e.target.classList.add('active')
    })
})