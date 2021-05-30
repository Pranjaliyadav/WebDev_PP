function solveFormula(formula){
    // "( A1 + A2 )" => "( 10 + 20 )"
    //starting on " " split basis .if space not given in formula this wont work
    let formulaComps = formula.split(" ");
    //we'll get  ["(" , "A1" , "+" , "A2" , ")"];

    //now we'll go thru these components one n=by one
    for(let i = 0 ; i < formulaComps.length; i++){
        let formComp = formulaComps[i]; 
        //checking and getting only the frst alphabet like A from A2
        if(formComp[0] >= "A" && formComp[0] <= "Z"){
            //A1==> Z100
            let {rowId , colId} = getRowIdColIdFromAddress(formComp);
            //getting the rowId colId from the formComp we just got from above
            let cellObject = db[rowId][colId];
            let value = cellObject.value;
            formula = formula.replace(formComp,value);
            //this .replace() function is an inbuilt js method .this will be replacing the formComp with the value we just got using the rowcolIds from cellObject
        }

    }
    //stack infix evaluation can be done here but for now using the eval() inbuild method by js
    let computedValue = eval(formula); //takes a string and compute the answer using the equation string given
    return computedValue;
}

function getRowIdColIdFromElement(element){
    let rowId = element.getAttribute("rowid");
    let colId = element.getAttribute("colid");
    return {
        rowId , colId
    }
}

function getRowIdColIdFromAddress(address){
    // B22 => colid,rowId
    // B => 1
    let rowId = Number(address.substring(1)) - 1;
    let colId = address.charCodeAt(0) - 65;
    return {
        rowId , colId
    }
} 