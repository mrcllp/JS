var button = document.getElementById("enter");
var input = document.getElementById("user input");
var ul = document.querySelector("ul");
var deleteBtns = document.getElementsByClassName("delete");
var items = ul.getElementsByTagName("li");


// add event listener to first 6 btns in html file 
for(var i = 0; i < deleteBtns.length; i++){
    deleteBtns[i].addEventListener("click",removeParent,false);
}

//from StackOverflow:
function removeParent(evt) {
    evt.target.removeEventListener("click", removeParent, false);
    evt.target.parentNode.remove();
  }

//click on a list item and it strikethroughs the text
function lineThrough(event){
	var a=event.target;
	
	if(count==0)
	{
		
	    a.classList.add("done");
	}
	else
	{
		a.classList.toggle("done");
	}
	count++;
}
ul.onclick = function(event){
	var target = getEventTarget(event);
	target.classList.toggle("done");
}

//adding new item

function inputLength() {
    return input.value.length;
}

function createListElement () {
        var deleteBtns = document.getElementsByClassName("delete");
        var li = document.createElement("li"); 
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value="";
 }

function addListAfterClick() {
   
        if (inputLength() > 0) {
           createListElement();
        }
}

function addListAfterKeyPress(event) {
        if (inputLength() > 0 && event.keyCode === 13) {
            createListElement();
        }
}




function deleteListElement(element) {
	if (element.target.className === "delClass"){
		element.target.parentElement.remove();
	}
}

button.addEventListener("click", addListAfterClick)

input.addEventListener("keypress", addListAfterKeyPress)
 