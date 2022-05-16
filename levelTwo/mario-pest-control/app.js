const goombaForm = document["goomba-form"]
const bobombForm = document["bobomb-form"]
const cheepCheepForm = document["cheepCheep-form"]
const submitButton = document.getElementById("button")
const countOutput = document.getElementById("output")



submitButton.addEventListener("click", function() {
   
    let total = parseInt(goombaForm.goombaCount.value) + parseInt(bobombForm.bobombCount.value) + parseInt(cheepCheepForm.cheepCheepCount.value)
    console.log(total)

    let newH1 = document.createElement("h1")
    
    newH1.innerHTML = total

    countOutput.appendChild(newH1)
    goombaForm.goombaCount.value = ""
    bobombForm.bobombCount.value = ""
    cheepCheepForm.cheepCheepCount.value = ""
}) 















// ### 

// The website must contain the following:

// - A list displaying each baddie by type. Each list item must:
// - Have baddie image --
// - Have baddie name -- 
// - Show price of that baddie --- 
// - Have an input box to enter the total caught of that type ---
// - A total price at the bottom that adds sums the total cost of baddies caught --- 
// - *(must use Javascript for this math - no hard coded values)*
// - A footer showing:
// - Mario's email address
// - Mario's company website url
// - Mario's physical address
// - A large title at the top of the page entitled "Mario Pest Control"