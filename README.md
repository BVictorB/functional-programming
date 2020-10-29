# Functional programming
This repo is for the functional programming course assignments of the Information Design Tech Track. In this course we will learn about functional programming in JavaScript, how to clean data so you can use it for data visualizations and how to filter/sort data so we can combine/compare datasets and learn more about the subject.
***
## Debriefing
The newspaper 'De Volkskrant' wants to get interesting insights on connections in the RDW datasets. It is our job to find interesting information in the datasets, and make a data visualization about that information/subject. De Volkskrant can that see if they can use the information shown to write an interesting article.
They gave us the option to use the datasets from the RDW, but we can also look for other interesting datasets as long as it has to do with 'the car in the city'.

![De Volkskrant](https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Volkskrant.svg/1200px-Volkskrant.svg.png)
_(https://nl.wikipedia.org/wiki/Bestand:Volkskrant.svg)_
***
## Assignment
Retrieve JSON data and practice on cleaning and/or filtering this data so you can use it in your DOM. Use functional programming methods and patterns to clean the data. Write smart functions that are dynamic, so you can reuse them whenever you need them. Create a logical structure in your code, and/or split up files to make everything cleaner.

There are two main folders in this repo: 'survey-assignment' and 'final-assignment'. The first one contains the code that I have written to practice with data cleaning and fetching. The second one (final-assignment) is the folder that contains the beginning of our final deliverable, this contains code to clean/filter the RDW data so I can use it in the following courses.
***
## Concept
My idea for this project is to retrieve data from the [RDW datasets](https://opendata.rdw.nl/browse) and from the [datasets of the city of Amsterdam](https://data.amsterdam.nl/) to make an interactive map. I want to plot out different parking areas on the map, with the different prices that are being used. If I can get the data of the history of these parking prices, I want to be able to scroll through time and see how the prices have changed. I also want to plot all the parking garages in Amsterdam on the map, and see when they opened and compare this to the changes in parking prices. And if I have the data for it, I would also like to compare the prices of the parking garages to the prices of parking on the street (also going back in history).

### Research question(s)
I have created a few research questions to support my research. There is a main research question that I find most important in my assignment, I will mostly focus on this one. But I will also try to implement answering assets/features for the other research questions.
### **_Is there a connection between the increasing parking prices and the opening of new parking garages in Amsterdam?_**
- _**Is it cheaper to park in a parking garage or on the street (for each district)?**_
- _**Is the parking garage accessible for disabled people?**_
- _**Are there any benefits in the parking garages that are more expensive? (location, electric charging, accessibility)**_
- _**Is it free to park at night in the parking garages compared to on the street?**_

### Required datasets
I will need a few datasets to retrieve all the data that I will need for the assignment. Most of the data that I will need is available in the RDW datasets. But I also need some data that is not available (the history of parking prices in Amsterdam). I am going to get in contact with the people from 'Data and Information Amsterdam' to ask them for the data.  
These datasets are already useful for my assignment:
- [GEO Parkeer Garages](https://opendata.rdw.nl/Parkeren/GEO-Parkeer-Garages/t5pc-eb34) (RDW):
    * GEO data of parking garages
    * Short description about the parking garage
    * Opening date of parking garage
    * AreaId (to combine with other datasets)
    * AreaMangerId (to combine with other datasets)

- [Tariefdeel](https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-TARIEFDEEL/534e-5vdg) (RDW):
    * Pricing per 'step'
    * Amount of minutes in each 'step'
    * Start date of this pricing
    * Identification code of the pricing-kind
    * AreaMangerId (to combine with other datasets)

- [Specificaties Parkeergebied](https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-SPECIFICATIES-PARKEERGEBIED/b3us-f26s) (RDW):
    * The capacity of the parking garage
    * How accessible the parking garage is for disabled people
    * Charging point capacity for electric vehicles
    * AreaId (to combine with other datasets)
    * AreaMangerId (to combine with other datasets)

- [Tariefberekening](https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-TARIEFBEREKENING/nfzq-8g7y) (RDW):
    * Fare calculation code
    * Fare calculation description
    * AreaMangerId (to combine with other datasets)

- [Parkeertariefgebieden, Parkeergarages en Parkeerautomaten](https://data.amsterdam.nl/datasets/vhPVaBEEW6vbCA/parkeertariefgebieden-parkeergarages-en-parkeerautomaten/) (Data and Information Amsterdam):
    * Parking prices
    * Different prices in different parking areas
    * Location and shape of different parking areas
    * Parking garage locations & information
    * Parking ticket machine locations & information
***
## Features
***
## Installing
- Clone this repo
```
git clone https://github.com/BVictorB/functional-programming.git .
```
- Install all NPM packages (run this command in both main folders where the package.json file is located)
```
npm i
```
- Execute the parcel script to compile everything and start a local static server (http://localhost:1234/)
```
npm run dev
```
***
## Sources
