var hist = 0;
var index = 0

function insert(num){
	 document.getElementById("textbox").value =  document.getElementById("textbox").value + num
} 

function equal(){
	var expr = document.getElementById("textbox").value;

	if(expr){
		if(localStorage.length == 0){
			localStorage.setItem(localStorage.length, document.getElementById("textbox").value+"="+eval(document.getElementById("textbox").value));

			//hist[hist.length] = document.getElementById("textbox").value
			document.getElementById("textbox").value = eval(document.getElementById("textbox").value)
		}
		else{
			localStorage.setItem(localStorage.length, document.getElementById("textbox").value+"="+eval(document.getElementById("textbox").value));	
			document.getElementById("textbox").value = eval(document.getElementById("textbox").value)
		}

	}
	else{
		document.getElementById("textbox").value = "Error!!!"
	}
	index = localStorage.length;
	console.log("index = "+index)

}

function clean(){
	document.getElementById("textbox").value = ""
}

function del(){
	var exp = document.getElementById("textbox").value;
	document.getElementById("textbox").value = exp.substring(0, exp.length-1)
}

function history(){
	var i;
	for (i = 0; i < localStorage	.length; i++){
		//document.getElementById("historylist").value = hist[i];
		//localStorage.setItem(i, hist[i]);

		const key = localStorage.key(i);
		document.getElementById("historylist").value = localStorage.getItem(key)
	}
	index = localStorage.length;
	}

function previous(){
	if(index == 0){
		index = localStorage.length;
		key = localStorage.key(index-1);
		document.getElementById("historylist").value = localStorage.getItem(key);
		//index = index - 1;
	}
	else{
		key = localStorage.key(index-2);
		document.getElementById("historylist").value = localStorage.getItem(key);
		index = index - 1;
	}
}

function delHistory(){
	localStorage.clear();
	document.getElementById("historylist").value = "History cleared."
} 