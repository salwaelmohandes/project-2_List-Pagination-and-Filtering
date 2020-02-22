/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
// create and append a search bar 
// create a new student list variable based on the search matches and the Html  
// use it as an argument when calling the existing functions
// add a class name and use it to select the matching Elements

const search = document.createElement("div");
   search.classList.add("student-search")
const pageHeader = document.getElementsByClassName("page-header");
const input = document.createElement("input");
   input.setAttribute("placeholder","search for student...");
const button = document.createElement("button");
   button.textContent = "search";
      pageHeader[0].appendChild(search).appendChild(input);
      search.appendChild(button);
const details = document.getElementsByClassName("student-details");

   button.addEventListener('click', (event) => {
   event.preventDefault();
   
const newList = [];
   for (let i=0; i<details.length; i+=1){
      studentList[i].style.display= "none";
      if (input.value.length !== 0 && 
         details[i].textContent.toLowerCase().includes(input.value.toLowerCase())) {
         newList.push(studentList[i]);
      }
   }
   showPage(newList, 1); 
});

   
// Add global variable that store the DOM elements I will 
// need to reference and manipulate. 

const studentList = document.getElementsByClassName("student-item");
const pageItems = 10;

// Create the `showPage` function with two parameter to hide all of 
// the items in the student list except for the ten I want to show.

const showPage = (students,page)=> {
   console.log(students);
       
// Create two variables inside the ShowPage function to store the start 
// index and the end index of the list items to be displayed on the page. 
// To make this function dynamic and work with a list of any length. 

   let firstPage = (page * pageItems)-pageItems;
   let lastPage = page * pageItems;

   console.log(firstPage, lastPage);

// Loop over the list parameter.
   for (let i=0; i < students.length; i+=1){

// Display studentlist with an index that is greater than or equal to 
// the start index variable and less than the end index variable to show 
// the first page only not the whole student list.

       if (i>=firstPage && i<lastPage){ 
         students[i].style.display = '';
      }else{
         students[i].style.display = 'none';
      }
   }
};
// Call the showPage function.
showPage(studentList,1);

// Create the `appendPageLinks function` 
// to create pagination buttons and add functionality to it.

const appendPageLinks = (students) => {
   let numOfPages = Math.ceil(students.length/pageItems);
// create a div and add a class to it.
   const div = document.createElement("div");
   div.classList.add ("pagination");

// create the local variable 'page'.  
   const page = document.getElementsByClassName("page");

// Add a ul to the pagination div to store a pagination links.
   const ul = document.createElement("ul")  
   
// Add 'li' and 'a' to every page with the page number text.

   for (let i=0; i<numOfPages; i+=1){
      let li = document.createElement("li");
      let a = document.createElement ("a");
      a.setAttribute("href","#")
      ul.appendChild(li).appendChild(a);
// add +1 to i because the page numbers should start with 1 not 0.
      a.textContent = i+1;
      if (i===0){
         a.classList.add("active");
      }
   }  
// get all the a links 
   const aLinks = ul.querySelectorAll('a');

// Add event listener to each 'a' link
   for(let i=0; i<aLinks.length; i+=1) {
      aLinks[i].addEventListener('click', (e) => {

// remove active from all links
      for (let j=0; j<aLinks.length; j+=1) {
            aLinks[j].classList.remove("active");
         } 
// add back "active" to clicked link
         e.target.classList.add("active");

// call the showPage function.
         showPage(students,i+1);
      });
   }
// add the ul to the div and the div to the page.
   page[0].appendChild(div).appendChild(ul);
   
};

// Call the appendPageLinks function.
// appendPageLinks(studentList);
appendPageLinks(studentList);

   