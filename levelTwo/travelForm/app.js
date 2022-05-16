const form = document.form
const formSubmitButton = document.getElementById("submitButton")

const firstNameInput = form.firstName
const lastNameInput = form.lastName
const usersAge = form.age
const userGender = form.gender

const tampaLocationCheckBox = document.getElementById("tampa")
const jacksonvilleLocationCheckBox = document.getElementById("jacksonville")



function test(event) {
    event.preventDefault()
    let checkedLocation = []

    for (let i = 0; i < form.location.length; i++) {

        const location = form.location[i];

        if (location.checked) {
            // console.log(location.value)
            checkedLocation.push(location.value)

        }
       
        

    }
 console.log(jacksonvilleLocationCheckBox.checked)
        console.log(tampaLocationCheckBox.checked)
    alert(
        `First Name:${ firstNameInput.value}--
    Last Name: ${lastNameInput.value}--
    Age: ${usersAge.value}--
    Gender: ${userGender.value}--
    Places to Visit: ${checkedLocation}--`)
}

formSubmitButton.addEventListener("click", test)






























// You should collect the following information from the user:

// - First name (text input)
// - Last name (text input)
// - Age (number input)
// - Gender (radio buttons with 2 or more options)
// - Location they're traveling to (select box with at least 3 options. You're an airline that doesn't fly to many places...)
// - Whether they have any dietary restrictions (check boxes for vegetarian, kosher, lactose free, etc. Include at least 3 options)

// Each element of the form should be given a `
//attribute so you can access the data in JavaScript and do stuff with it.

// There should also be a button at the end of the form to submit it. Upon pressing the button, an alert should pop up that looks like this: