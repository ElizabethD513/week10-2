/*Coding Steps:
•	Using HTML, Bootstrap, and JavaScript create a single page website that contains the following:
•	A Bootstrap styled table representing your choice of data.
•	A Bootstrap styled form that allows a user to add a new row to the table when clicking on submit.*/                                         

  
   

 let itemForm = document.getElementById("itemForm"); //the document is the webpage which has a function called getElementById which takes a parameter, "itemForm"
  

itemForm.addEventListener("submit", (e) => {//itemForm is an html element which has a function called addEventListener, which has two parameters, the first 
                                       //being the event the computer is listening for, the second is a function to execute when the form emits a submit event
  e.preventDefault(); //stops the data from being submitted to the server (e=event)
  let item = document.getElementById("item");
  

  if (item.value == "") {  //whatever is input into the form element 
    alert("Ensure you input a grocery item!");
  } else {
    // Find a <table> element with id="myItem":
    var foodTable = document.getElementById("myItem");

    // Create an empty <tr> element and add it after the last row of the table:
    var row = foodTable.getElementsByTagName("tbody")[0].insertRow(-1); //getElementsByTagName returns an array of elements with a tag name of "tbody" 
                                                                        //adding a row to the table because the index parameter is -1

    // Insert new cell in the newly created row
    var cell1 = row.insertCell(0); //the cell is the <td> element and is being added to the row

    // Add some text to the new cell:
    cell1.innerHTML = item.value; //allows me to write in the cell
   
       
    item.value = ""; //this resets the input value for the food item to an empty string
      
  }
})

    
   