//Variables 
var students = document.querySelectorAll('.student-item');
var details = document.querySelectorAll('.student-details');
var pageNum = 1;

//showPage takes a pageNumber and displays the students, 10 per page
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

	
//The section below adds page links based on how many students are in the list.
	var div = document.createElement('div');
	var ul = document.createElement('ul');
	
	document.body.appendChild(div);
	div.className = 'pagination';
	div.appendChild(ul);

	
	
//createPageLinks takes the variable pageNum and dispays the correct number of pages 
function createPageLinks(pageNum) {
	
	let li = document.createElement('li');
	
	li.innerHTML = '<a href="#">' + pageNum + '</a>';
	ul.appendChild(li);

	let links = ul.lastChild;

	//the eventListener adds/removes the class of action to the correct anchor tag
	links.addEventListener('click', () =>{
		
		showPage(pageNum, students)	
		const anchors = document.querySelectorAll("a");
      
    	for (let i = 0; i < anchors.length; i++) {
        	anchors[i].classList.remove("active");
        	event.target.classList.add("active");
        }	
	})
}


//appendPageLinks takes in studets as an argument, 
function appendPageLinks(students){

	let pages = Math.ceil(students.length/10);
	
	for(let i = 0 ; i < pages; i++){

		createPageLinks(pageNum)
		pageNum += 1;
	}


}

showPage(pageNum, students);
appendPageLinks(students);





  





	
