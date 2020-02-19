/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Add global variable that store the DOM elements I will 
// need to reference and manipulate. 

const studentList = document.getElementsByClassName("student-item");
 const pageItems = 10;

// Create the `showPage` function with two parameter to hide all of 
// the items in the student list except for the ten I want to show.

const showPage = (studentList,page)=> {

// Create two variables inside the ShowPage function to store the start 
// index and the end index of the list items to be displayed on the page. 
// To make this function dynamic and work with a list of any length. 

   let firstPage = (page * pageItems)-pageItems;
   let lastPage = page * pageItems;

// Loop over the list parameter.
   for (let i=0; i < studentList.length; i+=1){

// Display studentlist with an index that is greater than or equal to 
// the start index variable and less than the end index variable to show 
// the first page only not the whole student list.

       if (i>=firstPage && i<lastPage){ 
         studentList[i].style.display = '';
      }else{
         studentList[i].style.display = 'none';
      }
   }
};
// Call the showPage function.
showPage(studentList,1);

// Create the `appendPageLinks function` 
// to create pagination buttons and add functionality to it.

const appendPageLinks = (studentList) => {
   let numOfPages = Math.ceil(studentList.length/pageItems);
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
   for(let i=0; i<aLinks.length; i++) {
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

// Call the appendPageLinks function.
      appendPageLinks(studentList);

   
  


