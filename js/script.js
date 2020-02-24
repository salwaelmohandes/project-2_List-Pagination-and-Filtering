/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Create and append a search bar and a search button.
// Create a new student list variable based on the search matches and the Html.  
// Use it as an argument when calling the existing functions
// Paginate the search results and add 'No match' message. 

const search = document.createElement("div");
search.classList.add("student-search")

const input = document.createElement("input");
input.setAttribute("placeholder","search for student...");

const button = document.createElement("button");
button.textContent = "search";

// Append the search bar and button to the header of the page.
const pageHeader = document.getElementsByClassName("page-header");
pageHeader[0].appendChild(search).appendChild(input);
   search.appendChild(button);

// Add keyup event listener to improve user experience.
input.addEventListener('keyup',() =>{
   searchForStudents(); 
});

button.addEventListener('click', (event) => {
   event.preventDefault();
   searchForStudents();
}); 

// Create search function and store the results in an array as a new list.
const searchForStudents = ()=> {
   const newList = [];

// Remove no results message if it already exists 
   let noResults = document.getElementsByClassName("no-results")
   if(noResults.length > 0) {
      noResults[0].remove();
   }
// if there's no search input, show all students first page.
   if(input.value === "") {
      showPage(studentList, 1);
      appendPageLinks(studentList); 
   } else{
// loop through all students to find matches 
      for (let i=0; i<studentList.length; i+=1){
         const studentName = studentList[i].getElementsByTagName("h3");
            studentList[i].style.display= "none";
      if (input.value.length !== 0 && 
      studentName[0].textContent.toLowerCase().includes(input.value.toLowerCase())){
            newList.push(studentList[i]);
         }
      }
      
// Add 'No result' message if no search matches were found.
      if(newList.length == 0) {
         let noMatches = document.createElement("h2");
         noMatches.textContent = "No results, please try again";
         noMatches.classList.add("no-results");
         document.getElementsByClassName("page")[0].appendChild(noMatches);
      }
// Call the two functions with the new list of student.
      showPage(newList, 1);
      appendPageLinks(newList); 
   }
}
// Add global variable to store the DOM elements to reference and manipulate.
const studentList = document.getElementsByClassName("student-item");
const pageItems = 10;

// Create the showPage function with two parameter to hide all of 
// the items in the student list except for first ten.

const showPage = (students,page)=> {
       
// Create two variables to store the start and end index of each page.  
// Make this function dynamic and work with a list of any length. 
   let startIndex = (page * pageItems)-pageItems;
   let endIndex = page * pageItems;

// Loop over the list parameter.
// Hide students list and show the first page only when user load it.
   for (let i=0; i<students.length; i+=1){
      if (i>=startIndex && i<endIndex){ 
         students[i].style.display = '';
      } else {
         students[i].style.display = 'none';
      }
   } 
};
// Create appendPageLinks function.
const appendPageLinks = (studentList) => {
   let numOfPages = Math.ceil(studentList.length/pageItems);

// create pagination links and add functionality to it.
   const pagination = document.getElementsByClassName("pagination");
// check if the pagination links have already been created then remove it.
   if (pagination.length > 0) {
      pagination[0].remove();
   } 
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
         showPage(studentList,i+1);
      });
   }
// add the ul to the div and the div to the page.
   page[0].appendChild(div).appendChild(ul);
};
// Call showPage and appendPageLinks functions with initial list of students.
showPage(studentList,1);
appendPageLinks(studentList);
