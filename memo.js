function initValue() {
	document.getElementById("tab1").subject="";
	document.getElementById("tab1").contents="";
	console.log(document.getElementById("tab1").subject);
}

initValue();

function addTabFunc(){
	var target = document.getElementById("tabList");
	var num = document.getElementById("addTab").index;

	var li = document.createElement("li");

	var a = document.createElement("a");

	var tabName = document.createElement("span")
	var text = document.createTextNode("Tab"+ num);

	var remove = document.createElement("span")
	var x = document.createTextNode("x");

	var add = document.getElementById("addTab")

	tabName.id="tab"+num;
	tabName.subject="";
	tabName.contents="";
	document.getElementById("addTab").index++;
	tabName.appendChild(text);

	remove.className="removeTab";
	remove.appendChild(x);

	a.href="#top";
	a.className="tabtab";
	a.appendChild(tabName);

	li.appendChild(a);
	li.appendChild(remove);

	target.insertBefore(li, add);

	removeEventFunc();
	viewEventFunc();
}

document.getElementById("addTab").index = 2;


document.getElementById("addTab").addEventListener("click", addTabFunc);


function removeTabFunc(){
	var target = this.parentNode;
	target.parentNode.removeChild(target);
}


function removeEventFunc() {
	for(var i = 0; i< document.getElementsByClassName("removeTab").length; i++){
		document.getElementsByClassName("removeTab")[i].addEventListener("click", removeTabFunc);
	}
}


removeEventFunc();


function saveTabFunc(){
	var save = document.getElementsByClassName('active')[0];
	console.log(save);
	if(document.getElementsByClassName('active').length ==0){
		alert("Add Tab");
	}
	else if(save.childNodes[1].className==="tabtab"){
		save.childNodes[1].childNodes[1].subject = document.getElementById("subject").value;
		save.childNodes[1].childNodes[1].contents = document.getElementById("contents").value;
		save.childNodes[1].childNodes[1].innerHTML = save.childNodes[1].childNodes[1].subject;
	}
	else {
		save.childNodes[0].childNodes[0].subject = document.getElementById("subject").value;
		save.childNodes[0].childNodes[0].contents = document.getElementById("contents").value;
		save.childNodes[0].childNodes[0].innerHTML = save.childNodes[0].childNodes[0].subject;
	}
}

document.getElementById("save").addEventListener("click", saveTabFunc);

function viewTabFunc(){
	for(var i = 0; i <document.getElementsByTagName("li").length; i++){
		document.getElementsByTagName("li")[i].className = "";
	}

	this.parentNode.className="active";

	if(this.childNodes[1]!==undefined){
		document.getElementById("subject").value=this.childNodes[1].subject;
		document.getElementById("contents").value=this.childNodes[1].contents;
	}
	else{
		document.getElementById("subject").value=this.childNodes[0].subject;
		document.getElementById("contents").value=this.childNodes[0].contents;
	}
}


function viewEventFunc() {
	for(var i = 0; i< document.getElementsByClassName("tabtab").length; i++){
		document.getElementsByClassName("tabtab")[i].addEventListener("click", viewTabFunc);
	}
}

viewEventFunc();

