import { delegate } from "./utils.js";

const table = document.querySelector('table')

for(let rowIndex = 0; rowIndex < 50; rowIndex++){
    const newTR = document.createElement('tr')
    for(let colIndex = 0; colIndex < 50; colIndex++){
        const newTD = document.createElement('td')
        newTD.dataset.rowIndex = rowIndex
        newTD.dataset.colIndex = colIndex
        newTR.appendChild(newTD)
    }
    table.appendChild(newTR)
}

function makeColor(event, element){
    element.style.backgroundColor = 'red';
    console.log(`Row: ${element.dataset.rowIndex}, Col: ${element.dataset.colIndex}`)

    let nextToTD = table.querySelector(`td[data-rowIndex="${element.dataset.rowIndex}"][data-colIndex="${element.dataset.colIndex}"]`)
    console.log(nextToTD);
    // nextToTD.style.backgroundColor = 'red'



    // table.querySelectorAll('td') = element.parentNode.parentNode.querySelectorAll('td')
    element.parentNode.parentNode.querySelectorAll('td').forEach(td => {
        let selectedCol = parseInt(td.dataset.colIndex);
        let selectedRow = parseInt(td.dataset.rowIndex);
        if( selectedCol == parseInt(element.dataset.colIndex) || selectedRow == parseInt(element.dataset.rowIndex)){
            td.style.backgroundColor = 'red'
        }
    })
}

delegate(table, 'td', 'click', makeColor)