/*Coding Steps:
•	Using HTML, Bootstrap, and JavaScript create a single page website that contains the following:
•	A Bootstrap styled table representing your choice of data.
•	A Bootstrap styled form that allows a user to add a new row to the table when clicking on submit.*/                                         

  
   

 let itemForm = document.getElementById("itemForm");
  

itemForm.addEventListener("submit", (e) => {
  e.preventDefault(); //stops the data from being submitted to the server (e=event)
  let item = document.getElementById("item");
  

  if (item.value == "") {
    alert("Ensure you input a grocery item!");
  } else {
    // Find a <table> element with id="myItem":
    var food = document.getElementById("myItem");

    // Create an empty <tr> element and add it after the last row of the table:
    var row = food.insertRow(-1);

    // Insert new cell in the newly created row
    var cell1 = row.insertCell(0);

    // Add some text to the new cell:
    cell1.innerHTML = item.value;
    // perform operation with form input
       
    item.value = ""; //this resets the input value for the food item to an empty string
      
  }
})

    
   