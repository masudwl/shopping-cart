/*Iphone plus qty with price*/

document.getElementById("addPlus").addEventListener("click", function(){
    const currentValue = document.getElementById("currentValue").value; 
    const inputValue = parseFloat(currentValue); 
    const inputPlus = inputValue+1; 
    document.getElementById("currentValue").value = inputPlus; 
    // addPlus("currentValue");

    const totalValue = inputPlus * phonePrice; 
    document.getElementById("phoneValue").innerText = totalValue; 

    subTotalPlus("subTotal", phonePrice);
    subTotalPlus("totalValue", phonePrice);
})

/*Iphone Minus Qty with total Price*/
document.getElementById("minusBtn").addEventListener("click", function(){
    const inputValue = document.getElementById("currentValue").value;
    const inputMinus = parseFloat(inputValue);
    if(inputMinus>0){
    const minusQty = inputMinus -1; 
    document.getElementById("currentValue").value = minusQty; 

    const minusPhoneValue = phonePrice * minusQty ; 
    document.getElementById("phoneValue").innerText = minusPhoneValue; 
    }
    subTotalMinus ("subTotal", phonePrice); 
    subTotalMinus("totalValue", phonePrice);  
})
/*Iphone Price*/
const phoneValue = document.getElementById("phoneValue").innerText; 
const phonePrice = parseFloat(phoneValue); 


// function addPlus(id){
//     const currentValue = document.getElementById(id).value;
//     const currentValueNum = parseFloat(currentValue); 
//     const totalValue = currentValueNum+1; 
//     document.getElementById(id).value = totalValue; 
// }

/*Casing shopping cart - Casing qty add with total Price*/
document.getElementById("addCaseBtn").addEventListener("click", function(){
    const currentValue = document.getElementById("currentCaseValue").value; 
    const inputValue = parseFloat(currentValue); 
    const inputPlus = inputValue+1; 
    document.getElementById("currentCaseValue").value = inputPlus; 

    const totalCaseValue = inputPlus * casePrice; 
    document.getElementById("casePrice").innerText = totalCaseValue; 

    subTotalPlus("subTotal", casePrice);
    subTotalPlus("totalValue", casePrice);
})

/*Casing Price*/
const caseValue = document.getElementById("casePrice").innerText; 
const casePrice = parseFloat(caseValue); 

/*Casing Minus Qty with total Price*/
document.getElementById("caseMinusBtn").addEventListener("click", function(){
    const inputValue = document.getElementById("currentCaseValue").value;
    const inputMinus = parseFloat(inputValue);
    if(inputMinus>0){
    const minusQty = inputMinus -1; 
    document.getElementById("currentCaseValue").value = minusQty; 

    const minusCaseValue = casePrice * minusQty ; 
    document.getElementById("casePrice").innerText = minusCaseValue; 
    }
    subTotalMinus("subTotal", casePrice);
    taxValue("taxValue", taxValue);
    subTotalMinus("totalValue", casePrice);
})

/* Sub Total */
// Sub Total Plus only phone

// document.getElementById("addPlus").addEventListener("click", function(){
//     const subTotalStr = document.getElementById("subTotal").innerText; 
//     const subTotal = parseFloat(subTotalStr);
//     const subTotalAmount = subTotal + phonePrice; 
    
//     document.getElementById("subTotal").innerText = subTotalAmount; 
// })

// document.getElementById("minusBtn").addEventListener("click", function(){
//     const subTotalStr = document.getElementById("subTotal").innerText; 
//     const subTotal = parseFloat(subTotalStr);
//     const subTotalAmount = subTotal - phonePrice; 
    
//     document.getElementById("subTotal").innerText = subTotalAmount; 
// })

/* Sub Total Functon */

function subTotalPlus(id, price){
    const subTotalStr = document.getElementById(id).innerText; 
    const subTotalValue = parseFloat(subTotalStr); 
    const subTotal = subTotalValue + price; 
    document.getElementById(id).innerText = subTotal; 
}

function subTotalMinus(id, price){
    const subTotalStr = document.getElementById(id).innerText; 
    const subTotalValue = parseFloat(subTotalStr); 
    const subTotal = subTotalValue - price; 
    document.getElementById(id).innerText = subTotal; 
}

/*Tax Function*/

// function taxValue(id, tax){
//     const subTotalStr = document.getElementById(id).innerText; 
//     const subTotalValue = parseFloat(subTotalStr); 
//     const subTotal = subTotalValue * tax; 
//     document.getElementById(id).innerText = subTotal; 
// }

document.getElementById("addPlus").addEventListener("click", function(){
    const inputTax = document.getElementById("taxValue").innerText; 
    const taxValue = parseFloat(inputTax);

    const subTotalStr = document.getElementById("subTotal").innerText; 
    const subTotalValue = parseFloat(subTotalStr); 
    const subTotalPercent = subTotalValue * 5/100;
    const totalTax = subTotalPercent + taxValue; 
    document.getElementById("taxValue").innerText = totalTax;
})

// function taxAmount(id, taxValues){
//     const subTotalStr = document.getElementById(id).innerText; 
//     const subTotalValue = parseFloat(subTotalStr); 
//     const subTotalPercent = subTotalValue * 5/100;
//     const totalTax = subTotalPercent + taxValue; 
//     document.getElementById("taxValue").innerText = totalTax; 
// }
    

function taxAmount(amount) {
    const taxPayable = amount * 0.5;
    return taxPayable;
}

const checkOut = document.getElementById("checkOutBtn"); 
            checkOut.addEventListener("click", function(){
            const nextArea = document.getElementById("first-area");
            nextArea.style.display= "none";
            console.log('okkk');
            const nextSection = document.getElementById("nextSection"); 
            nextSection.style.display= "block";
        })