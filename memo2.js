memoSys = {
	init:function(){
		document.getElementById("tab1").subject="";
		document.getElementById("tab1").contents="";

		document.getElementById("addTab").index = 2;
		document.getElementById("addTab").addEventListener("click", memoSys.addTabFunc);
		document.getElementById("save").addEventListener("click", memoSys.saveTabFunc);

		memoSys.removeEventFunc();
		memoSys.viewEventFunc();
	},
	addTabFunc:function(){
		var target = document.getElementById("tabList");
		var num = document.getElementById("addTab").index;

		var li = document.createElement("li");

		var a = document.createElement("a");

		var tabName = document.createElement("span")
		var text = document.createTextNode("Tab"+ num);

		var remove = document.createElement("span")
		var x = document.createTextNode("x");

		var add = document.getElementById("addTab");

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

		memoSys.removeEventFunc();
		memoSys.viewEventFunc();
	},
	removeTabFunc:function(){
		var target = this.parentNode;
		target.parentNode.removeChild(target);
	},
	removeEventFunc:function(){
		var r = document.getElementsByClassName("removeTab");
		for(var i = 0; i< r.length; i++){
			r[i].addEventListener("click", memoSys.removeTabFunc);
		}
	},
	saveTabFunc:function(){
		var save = document.getElementsByClassName('active')[0];
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
	},
	viewTabFunc:function(){
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
	},
	viewEventFunc:function(){
		for(var i = 0; i< document.getElementsByClassName("tabtab").length; i++){
			document.getElementsByClassName("tabtab")[i].addEventListener("click", memoSys.viewTabFunc);
		}
	}
}


memoSys.init();