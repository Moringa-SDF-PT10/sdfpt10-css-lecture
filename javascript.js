// 1. querySelector - select the first h1 and change its text and color
// 2. querySelectorAll - select all the li and give the text color red
// 3. getElementsByTagName - select the th and increase their font size
// 4. getElementsByClassName - select the element with the class of image-container/ change the backgroundColor
// 5. getElementById - select the course outcomes and change the BG color

// 1. Inserting elements into the DOM
// let newRow = document.createElement("tr");
// let number = document.createElement("td");
// number.textContent = "3";
// newRow.append(number);
// let q1 = document.createElement('td')
// q1.textContent = "01-01-2026";
// newRow.append(q1);
// let q2 = document.createElement('td')
// q2.textContent = "01-04-2026";
// newRow.append(q2);
// let q3 = document.createElement('td')
// q3.textContent = "01-07-2026";
// newRow.append(q3);
// let q4 = document.createElement('td')
// q4.textContent = "01-10-2026";
// newRow.append(q4);

// let tableBody = document.querySelector("tbody")
// tableBody.append(newRow)


// td {
//   border: 2px solid #000000;
//   padding: 10px;
//   text-align: center;
// }



// 2. Event Listeners -
      // - Events & Callback functions


let submitBtn = document.querySelector("input[type='submit']")

submitBtn.addEventListener('click', (event) => {
    event.preventDefault()
    let email = document.querySelector("input[type='email']").value
    let tel = document.querySelector("input[type='tel']").value
    let number = document.querySelector("input[type='number']").value
    let text = document.querySelector("input[type='text']").value
    populateTable(email, tel, number, text)
})


function populateTable(emailAddress, phoneNumber, age, referrer){
  let table = document.getElementById("data-table")
  table.style.display = "table"
  let tableBody = document.querySelector("#data-table tbody")
  let newRow = document.createElement("tr")
  let emailData = document.createElement("td")
  emailData.textContent = emailAddress
  newRow.append(emailData)
  let phone = document.createElement("td")
  phone.textContent = phoneNumber
  newRow.append(phone)
  let ageData = document.createElement("td")
  ageData.textContent = age
  newRow.append(ageData)
  let referrerData = document.createElement("td")
  referrerData.textContent = referrer
  newRow.append(referrerData)
  tableBody.prepend(newRow)

  document.querySelectorAll("input").forEach(tag => {
    tag.value = ""
  })
}


// TODOs
// 1. Get all the type of events that can be used as EventListeners
// 2. Read and demonstrate your understanding of hoisting in JavaScript (what will work and what won't)
// 3. Create an Input element above the div with the class "image-container" using JavaScript
      // - Add an eventlistener to this input element that will change the text of the main h1

// 4. Add an event listener to the Submit Button
    // - Capture the email, telephone, age and referee and display them in a table
    // Extra TODO - save your data in a such a way that it does not disappear on page reload.
