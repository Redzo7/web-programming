/* EZT A FÁJLT NE MÓDOSÍTSD */
const months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"]
const tbodyElem = document.querySelector("tbody");

function createTdElement(text, isHead, color = "black") {
    const tdElem = document.createElement(`t${isHead ? "h" : "d"}`);
    tdElem.innerText = text;
    tdElem.style.color = color;
    return tdElem;
}

function createTableRowElem(headElemText, array, isHead) {
    const rowElem = document.createElement(`tr`);
    rowElem.appendChild( createTdElement(headElemText) );

    array.forEach( elem => {
        rowElem.appendChild( createTdElement(elem) );
    });

    return rowElem;
}

// fill header
const headerRow = createTableRowElem("###", months, true);
document.querySelector("#avg_header").appendChild(headerRow);

/// Task 1
// min values
const minRow = createTableRowElem("min", mins, false);
document.querySelector("#avg_body").appendChild(minRow);

// min values
const maxRow = createTableRowElem("max", maxes, false);
document.querySelector("#avg_body").appendChild(maxRow);

// min values
const avgRow = createTableRowElem("avg", avgs, false);
document.querySelector("#avg_body").appendChild(avgRow);

/// Task 2
const minSpan = document.querySelector("#year_min");
minSpan.innerText = yearly_min;

const maxSpan = document.querySelector("#year_max");
maxSpan.innerText = yearly_max;

const avgSpan = document.querySelector("#year_avg");
avgSpan.innerText = yearly_avg;

/// Task 3
document.querySelector("#above_230").innerText = months_above_230;
document.querySelector("#above_input").innerText = months_above_input;

/// Task 4
const classificationHeadRow = createTableRowElem("###", [...Array(31)].map((_, i) => i+1), true);
document.querySelector("#classification thead").appendChild(classificationHeadRow);

water_levels_classified.forEach(( monthly_data, index ) => {
    const month_row = document.createElement("tr");

    const monthNameTd = document.createElement("td");
    monthNameTd.innerText = months[index];
    month_row.appendChild(monthNameTd);

    monthly_data.forEach((data, index) => {
        const dailyDataTd = document.createElement("td");
        dailyDataTd.innerText = data.water_level;
        dailyDataTd.style.backgroundColor = data.warning;

        month_row.appendChild(dailyDataTd);
    })

    document.querySelector("#classification tbody").appendChild(month_row);
});