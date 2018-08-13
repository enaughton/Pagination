
var students = document.querySelectorAll('.student-item');
var details = document.querySelectorAll('.student-details');
var pageNum = 1;

//function that takes a pageNumber and displays all the students, 10 per page
function showPage(pageNum, students) {
	const upper = (pageNum * 10) - 1;
	const lower = (pageNum * 10) - 10;
	
	for (let i = 0; i < students.length; i++) {
		students[i].style.display = 'none';
		if (i >= lower && i <= upper) {
			students[i].style.display = 'block';
		}
	}
}

	// then loop through all students in list in our student list argument
	// if student should be on this page number
	// show the student

	var div = document.createElement('div');
	
	document.body.appendChild(div);
	div.className = 'pagination';

	
	//li.innerHTML ='<a href="#">' + pageNum + '</a>';


	
	

function createPageLinks(pageNum) {
	
	let ul = document.createElement('ul');
	let li = document.createElement('li');

	
	div.appendChild(ul);
	li.innerHTML = '<a href="#">' + pageNum + '</a>';
	ul.appendChild(li);
	li.className= 'pagination li';
	

}

function appendPageLinks(students) {
let page = Math.ceil(students.length/10);


for(let i = 0 ; i < page; i++){
	createPageLinks(pageNum)
	pageNum += 1;
}


}

 	
document.addEventListener("click", function(){

  		showPage(2, students);
  		
  
});



// determine how many pages for this student list
// create a page link section	
// "for" every page
// add a page link to the page link section
// remove the old page link section from the site
// append our new page link section to the site
// define what happens when you click a link (event listener)
// Use showPage to display the page for the link clicked
// mark that link as "active


//document.getElementsByTagName('li').addEventListener('click', showPage(pageNum));

showPage(pageNum, students);
appendPageLinks(students);
//createPageLinks(pageNum);

