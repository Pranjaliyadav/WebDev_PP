let topRow = document.querySelector(".top-row");
let leftCol = document.querySelector(".left-col");
let topLeftCell = document.querySelector(".top-left-cell");
let allCells = document.querySelector(".cell");
let addressInput = document.querySelector("#address");
let formulaInput = document.querySelector("#formula");
let lastSelectedCell;

//scrolling code

cellsContentDiv.addEventListener("scroll" , function(e){

    let top = e.target.scrollTop; //scrollTop is a property of the target
    let left = e.target.scrollLeft;
    //console.log(top,left);
    topRow.style.top = top + "px"; //the value will be stored in px
    topLeftCell.style.top = top + "px";
    topLeftCell.style.left = left + "px";
    leftCol.style.left = left + "px";  
})

//address of the cell we click on
for(let i = 0; i < allCells.length; i++){
    allCells[i].addEventListener("click",function(e){

        let rowId = Number(e.target.getAttribute("rowid"));   //converts the string fetched to Number
        let colId = Number(e.target.getAttribute("colid"));//rowId ColId are previous defined attributes from html
        let cellObject = db[rowId][colId]; //getting the cell object from database
        let address = String.fromCharCode(65+colId)+(rowId+1)+"";  //eg. A1 B4 G23
        addressInput.value = address;
        formulaInput.value = cellObject.formula;
    })

    //blur when the focus is off
    allCells[i].addEventListener("blur" , function(e){
        lastSelectedCell = e.target; //gets the last selected cell
        let cellValue = e.target.textContent; //gets the text content there
        let rowId = e.target.getAttribute("rowId"); //rowId of the current target
        let colId = e.target.getAttribute("colid");
        let cellObject = db[rowId][colId];  //now getting the cellObject of that location,it has a previous value stored of that place,it can be empty too 
        if(cellObject.value == cellValue){
            //if the cellobject value and the current value is same then return
            return;
        }
        //if not same or empty update and store  the now entered value in cellObject value too
        cellObject.value = cellValue;
    })

}

formulaInput.addEventListener("blur",function(e){

    let formula = e.target.value; //formula we just wrote
    if(formula){ 
        let{rowId , coldId} = getRowIdColIdFromElement(lastSelectedCell); //function that will get us rowId and ColId
        let cellObject = db[rowId][coldId]; //get the cellObject
        let computedValue = solveFormula(formula); //function that solves the formula
        //formula update
        cellObject.formula = formula;  //update the formula in cellObject 
        //cellObject value update
        cellObject.value = computedValue; //update the value of that cellobject cell too
        //ui update
        lastSelectedCell.textContent = computedValue; //update on ui using lastSelectedCell by computedValue
    }
})

