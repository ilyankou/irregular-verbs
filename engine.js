/**
 * Model and controller for the Irregular Verbs web app
 *
 * @author Ilya Ilyankou
 * @version 0.1
 */

var dictionarySize = 107;

// Initializing the dictionary
v = new Array();
v[1]=new Array("be","was/were","been","быть");
v[2]=new Array("beat","beat","beaten","бить");
v[3]=new Array("become","became","become","становиться");
v[4]=new Array("begin","began","begun","начинать");
v[5]=new Array("bend","bent","bent","гнуть");
v[6]=new Array("bite","bit","bitten","кусать");
v[7]=new Array("blow","blew","blown","дуть");
v[8]=new Array("break","broke","broken","ломать, разрушать");
v[9]=new Array("bring","brought","brought","приносить");
v[10]=new Array("build","built","built","строить");
v[11]=new Array("burn","burned/burnt","burned/burnt","гореть");
v[12]=new Array("burst","burst","burst","лопаться, взрываться");
v[13]=new Array("buy","bought","bought","покупать");
v[14]=new Array("catch","caught","caught","ловить");
v[15]=new Array("choose","chose","chosen","выбирать");
v[16]=new Array("come","came","come","приходить, прибывать");
v[17]=new Array("cost","cost","cost","стоить");
v[18]=new Array("cut","cut","cut","резать");
v[19]=new Array("dig","dug","dug","копать, рыть");
v[20]=new Array("do","did","done","делать");
v[21]=new Array("draw","drew","drawn","рисовать, чертить");
v[22]=new Array("dream","dreamed/dreamt","dreamed/dreamt","мечтать");
v[23]=new Array("drink","drank","drunk","пить");
v[24]=new Array("drive","drove","driven","ездить");
v[25]=new Array("eat","ate","eaten","есть, поглощать");
v[26]=new Array("fall","fell","fallen","падать");
v[27]=new Array("feed","fed","fed","кормить");
v[28]=new Array("feel","felt","felt","чувствовать");
v[29]=new Array("fight","fought","fought","драться, сражаться");
v[30]=new Array("find","found","found","находить");
v[31]=new Array("fly","flew","flown","летать");
v[32]=new Array("forget","forgot","forgotten","забывать");
v[33]=new Array("forgive","forgave","forgiven","прощать");
v[34]=new Array("freeze","froze","frozen","замерзать");
v[35]=new Array("get","got","got","получать");
v[36]=new Array("give","gave","given","давать");
v[37]=new Array("go","went","gone/been","идти");
v[38]=new Array("grow","grew","grown","расти");
v[39]=new Array("hang","hung","hanged/hung","вешать");
v[40]=new Array("have","had","had","иметь");
v[41]=new Array("hear","heard","heard","слышать");
v[42]=new Array("hide","hid","hidden","прятаться");
v[43]=new Array("hit","hit","hit","ударять");
v[44]=new Array("hold","held","held","держать");
v[45]=new Array("hurt","hurt","hurt","причинять боль");
v[46]=new Array("keep","kept","kept","держать, хранить");
v[47]=new Array("kneel","knelt","knelt","становиться на колени");
v[48]=new Array("know","knew","known","знать");
v[49]=new Array("lay","laid","laid","лежать");
v[50]=new Array("lead","led","led","вести, влиять, руководить");
v[51]=new Array("learn","learned/learnt","learned/learnt","учиться");
v[52]=new Array("leave","left","left","покидать, оставлять");
v[53]=new Array("lend","lent","lent","одалживать, давать взаймы");
v[54]=new Array("let","let","let","позволять");
v[55]=new Array("lie","lay","lain","обманывать, лгать");
v[56]=new Array("light","lit","lit","освещать");
v[57]=new Array("lose","lost","lost","терять");
v[58]=new Array("make","made","made","делать, создавать");
v[59]=new Array("mean","meant","meant","означать");
v[60]=new Array("meet","met","met","встречать");
v[61]=new Array("pay","paid","paid","платить");
v[62]=new Array("put","put","put","класть");
v[63]=new Array("read","read","read","читать");
v[64]=new Array("ride","rode","ridden","ехать верхом");
v[65]=new Array("ring","rang","rung","звонить");
v[66]=new Array("rise","rose","risen","восходить, поднимать");
v[67]=new Array("run","ran","run","бежать");
v[68]=new Array("say","said","said","говорить, произносить");
v[69]=new Array("see","saw","seen","видеть");
v[70]=new Array("sell","sold","sold","продавать");
v[71]=new Array("send","sent","sent","отправлять");
v[72]=new Array("set","set","set","устанавливать");
v[73]=new Array("shake","shook","shaken","трясти");
v[74]=new Array("shine","shone","shone","светить, озарять");
v[75]=new Array("shoot","shot","shot","стрелять");
v[76]=new Array("show","showed","shown","показывать");
v[77]=new Array("shut","shut","shut","закрывать");
v[78]=new Array("sing","sang","sung","петь");
v[79]=new Array("sink","sank","sunk","тонуть, погружаться");
v[80]=new Array("sit","sat","sat","сидеть");
v[81]=new Array("sleep","slept","slept","спать");
v[82]=new Array("slide","slid","slid","скользить");
v[83]=new Array("smell","smelled/smelt","smelled/smelt","нюхать, пахнуть");
v[84]=new Array("speak","spoke","spoken","говорить");
v[85]=new Array("spend","spent","spent","тратить");
v[86]=new Array("spill","spilled/spilt","spilled/spilt","проливать");
v[87]=new Array("spoil","spoiled/spoilt","spoiled/spoilt","портить, наносить ущерб");
v[88]=new Array("stand","stood","stood","стоять");
v[89]=new Array("steal","stole","stolen","воровать, красть");
v[90]=new Array("stick","stuck","stuck","вонзать, приклеивать");
v[91]=new Array("swim","swam","swum","плавать");
v[92]=new Array("take","took","taken","брать");
v[93]=new Array("teach","taught","taught","учить");
v[94]=new Array("tear","tore","torn","рвать");
v[95]=new Array("tell","told","told","говорить, сообщать");
v[96]=new Array("think","thought","thought","думать");
v[97]=new Array("throw","threw","thrown","бросать");
v[98]=new Array("understand","understood","understood","понимать");
v[99]=new Array("wake","woke","woken","просыпаться, бодрствовать");
v[100]=new Array("wear","wore","worn","носить");
v[101]=new Array("win","won","won","выиграть");
v[102]=new Array("write","wrote","written","писать");
v[103]=new Array("can","could","been able","мочь, уметь, быть способным");
v[104]=new Array("must","had to","had to","должен, обязан");
v[105]=new Array("bet","bet","bet","делать ставку");
v[106]=new Array("misunderstand","misunderstood","misunderstood","неправильно понимать");
v[107]=new Array("broadcast","broadcast","broadcast","вещать (по радио, ТВ)");


function generateVerb() {
	$("#correctInput").html("");
	
	var vNumber = Math.round(Math.random() * (dictionarySize - 1)) + 1;
	// Making sure the newly generated word is different from the previous one
	while (vNumber == $("#vNumber").val()) {
		Math.round(Math.random() * (dictionarySize - 1)) + 1;
	}
	var vForm = Math.round(Math.random() * 2);
	var vRussian = v[vNumber][3];

	$("#vNumber").val(vNumber);
	$("#vForm").val(vForm);
	$("#vRussian").text(vRussian);

	var inputTag = "<input type='text' id='myInput' autocomplete='off'>";

	if (vForm == 0) {
		$("#vQ0").html(inputTag);
		$("#vQ1").text(v[vNumber][1]);
		$("#vQ2").text(v[vNumber][2]);
	}
	if (vForm == 1) {
		$("#vQ0").text(v[vNumber][0]);
		$("#vQ1").html(inputTag);
		$("#vQ2").text(v[vNumber][2]);
	}
	if (vForm == 2) {
		$("#vQ0").text(v[vNumber][0]);
		$("#vQ1").text(v[vNumber][1]);
		$("#vQ2").html(inputTag);
	}

	$("#myInput").focus();
}


function checkVerb() {
	var myInput = $("#myInput").val();
	
	// Correct input according to the dictionary
	var correctInput0 = v[parseInt($("#vNumber").val())][parseInt($("#vForm").val())];

	myInput = $.trim(myInput);
	myInput = myInput.toLowerCase();
	myInput = myInput.replace(",","/").replace("-","/").replace(" /","/").replace("/ ","/");

	// For some verbs, there are multiple correct versions ("learned/learnt"). If user wrote
	// two words separated by "/", treat them as two different inputs.
	// Using dollar signs to mark the beginning and the end of each verb
	if (myInput.indexOf("/") === -1) {
		myInput1 = "$" + myInput + "$";
		myInput2 = "";
	}
	else {
		var pos = myInput.indexOf("/");
		myInput1 = "$" + myInput.slice(0, pos) + "$";
		myInput2 = "$" + myInput.slice(pos + 1) + "$";
	}

	var correctInput = "$" + correctInput0 + "$";
	var correctInput = correctInput.replace("/", "$");

	if ((correctInput.indexOf(myInput1, 0) !== -1) &&
		(correctInput.indexOf(myInput2, 0) !== -1) &&
		(myInput1 !== myInput2)) {	// correct! :D
			$("#counterRight").text(parseInt( $("#counterRight").text() ) + 1);
			$("#counterAll").text(parseInt( $("#counterAll").text() ) + 1);
			$("#myInput").css({backgroundColor: "YellowGreen"});
			t = setTimeout("generateVerb()", 1500); // generate new word in 1.5 sec
	}
	else {	// incorrect :(
			$("#counterAll").text(parseInt( $("#counterAll").text() ) + 1);
			$("#myInput").css({backgroundColor: "DarkSalmon"});
			$("#correctInput").html("&nbsp;" + correctInput0 + "&nbsp;");
			$("#verbAnswer").css({visibility: "visible"});
			var t = setTimeout("generateVerb()", 3000);	// displaying correct verb for 3 seconds, then generating new verb
	}	
}


$(document).ready(function() {
	generateVerb();

	$("#questionForm").submit(function () {
		if ($("#myInput").attr("value") == "") {return false;}
		$("#myInput").attr({disabled: "disabled"});
		checkVerb();
		return false;
	});
});