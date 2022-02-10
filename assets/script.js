// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Jacob Lara" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 //Gingerbread
let cc = 0 //Chocolate Chip
let sugar = 0 //Sugar Sprinkle

// selecting the element with an id of credit
const credit = document.querySelector('#credit')
// selecting the element with an id of add-gb
const gbPlusBtn = document.querySelector('#add-gb')
const gbMinusBtn = document.querySelector('#minus-gb')
const ccPlusBtn = document.querySelector('#add-cc')
const ccMinusBtn = document.querySelector('#minus-cc')
const sugarPlusBtn = document.querySelector('#add-sugar')
const sugarMinusBtn = document.querySelector('#minus-sugar')
// Code to update name display
credit.textContent = `Created by ${yourName}`


function updateGbqty(displayQuantity) {
    let quantity = document.querySelector("#qty-gb");
    console.log(quantity.textContent, displayQuantity, 'line 26')
    quantity.textContent = displayQuantity;
    console.log(quantity.textContent, 'line 28')
    let total=gb+cc+sugar
    let quantitytotal = document.querySelector("#qty-total");
    quantitytotal.textContent = total 
}

// Event listener for clicks on the "+" button for Gingerbread cookies
gbPlusBtn.addEventListener('click', function() {
// HINT: You can delete this console.log after you no longer need it!
    console.log('Gingerbread + button was clicked!')
    
    gb++;
    console.log(gb, 'line 37')
    updateGbqty(gb);
    
// TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
})
gbMinusBtn.addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
        console.log('Gingerbread + button was clicked!')
        if(gb > 0){
            gb--; 
        }
        
        //console.log(gb)
        updateGbqty(`Gb: ${gb}`);
        
    // TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
    })

    function updateCcqty(displayQuantity) {
        let quantity = document.querySelector("#qty-cc");
        console.log(quantity.textContent, displayQuantity)
        quantity.textContent = displayQuantity;
        console.log(quantity.textContent)
        let total=gb+cc+sugar
        let quantitytotal = document.querySelector("#qty-total");
        quantitytotal.textContent = total 
    }
    
    
    // Event listener for clicks on the "+" button for Gingerbread cookies
    ccPlusBtn.addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
        console.log('chocolate chip + button was clicked!')
        
        cc++;
        //console.log(gb)
        updateCcqty(cc);
        
    // TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
    })
    ccMinusBtn.addEventListener('click', function() {
        // HINT: You can delete this console.log after you no longer need it!
            console.log('Chocolatechip + button was clicked!')
            if(cc > 0){
                cc--; 
            }
            
            //console.log(gb)
            updateCcqty(cc);
            
        // TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
        }) 
        function updateSugarqty (displayQuantity) {
            let quantity = document.querySelector("#qty-sugar");
            console.log(quantity.textContent, displayQuantity)
            quantity.textContent = displayQuantity;
            console.log(quantity.textContent)
            let total=gb+cc+sugar
            let quantitytotal = document.querySelector("#qty-total");
            quantitytotal.textContent = total 
        }
        
        // Event listener for clicks on the "+" button for Gingerbread cookies
        sugarPlusBtn.addEventListener('click', function() {
        // HINT: You can delete this console.log after you no longer need it!
            console.log('Sugar + button was clicked!')
            
            sugar++;
        
            updateSugarqty(sugar);

            
        // TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
        })
        sugarMinusBtn.addEventListener('click', function() {
            // HINT: You can delete this console.log after you no longer need it!
                console.log('Sugar + button was clicked!')
                if(sugar > 0){
                    sugar--; 
                }
                
                //console.log(gb)
                updateSugarqty(sugar); 
                
            // TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
            })
        
    

// TODO: Hook up event listeners for the rest of the buttons