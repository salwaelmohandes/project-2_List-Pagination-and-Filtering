/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Add your global variables that store the DOM elements you will 
// need to reference and/or manipulate. 

const studentList = document.getElementsByClassName("student-item");

 pageItems = 10;
// Create the `showPage` function to hide all of the items in the 
// list except for the ten you want to show.
const showPage = (studentList,page)=> {
// Create two variables to store the start index and the end index 
// of the list items to be displayed on the given page. 
// To make this function dynamic and work with a list of any length, 
// a bit of basic math can be used to determine these values.
   let firstPage = (page * pageItems)-pageItems;
   let lastPage = page * pageItems;
// Loop over the list parameter.
   for (let i=0; i < studentList.length; i+=1){
// display studentlist with an index that is greater than or equal to 
// the start index variable and less than the end index variable.
       if (i>=firstPage && i<lastPage){ 
         studentList[i].style.display = '';
      }else{
         studentList[i].style.display = 'none';
      }
   }
};
showPage(studentList,1);
// Create the `appendPageLinks function` to generate, append, and add 
// functionality to the pagination buttons.

