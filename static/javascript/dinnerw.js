var list=[];

function choose() {
	document.getElementById("pasta").style.display="none";
	document.getElementById("gordon").style.display="none";
	document.getElementById("main").style.display="block";
	document.getElementById("logo").style.display="none";
}

function choose2() {
	document.getElementById("pasta").style.display="none";
	document.getElementById("gordon").style.display="none";
	document.getElementById("main").style.display="block";
	document.getElementById("meat").style.display="none";
	document.getElementById("logo").style.display="none";
}

function intofridge() {
	document.getElementById("fridge").style.display="none";
	document.getElementById("inside-fridge").style.display="block";
}

function clearout() {
	document.getElementById("form1").reset();
	list=[];
}

function transpose(p1) {
	var txt=document.getElementById(p1).value;
	list.push(txt);
	var res=document.getElementById("totallist");
	res.value=list.toString(); 
}
function adding1() {
	transpose("visa");
}
function adding2() {
	transpose("mastercard");
}
function adding3() {
	transpose("lloyds");
}
function adding4() {
	transpose("hsbc");
}
function adding5() {
	transpose("rbs");
}
function adding6() {
	transpose("cheese");
}
function adding7() {
	transpose("ham");
}
function adding8() {
	transpose("mayo");
}
function adding9() {
	transpose("bread");
}
function adding10() {
	transpose("potato");
}
function adding11() {
	transpose("spinach");
}
function adding12() {
	transpose("carrot");
}

function news() {
	document.getElementById("results").style.display="none";
	document.getElementById("startnew").style.display="block";
}
