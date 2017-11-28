//Funktion löst alle Events aus
$( document ).ready(function() {

	updateLectures();

	//change, keyup und mousup lassen sich nicht kombinieren???
 	//deshalb die Blöcke nun doppelt
	$('input[id="vorlesungsnummer"]').on('mouseup', function()
	{
		updateLectures();
	});


	$('input[id="vorlesungsnummer"]').on('mousedown', function()
	{
		updateLectures();
	});

	$('input[id="vorlesungsnummer"]').on('change', function() 
	{
		updateLectures();
	});


	$('input[name="Author1"], input[name="Author2"]').on('change', function() 
	{
		updateLectures();
	});

});




/*
 * Gibt eine Tabelle auf dem Bildschirm aus, die auflistet, welcher Autor welche der Vorlesungen mitgeschrieben hat.
 */
function createTable()
{

	var vorlesungenPatzig = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62];
	var vorlesungenHufeland = [1,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
	var vorlesungenLibelt = [23,24,25,26,27,28,29,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62];
	var vorlesungenAutor4NN = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62];
	var vorlesungenAutor5NN = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62];
	var vorlesungenAutor6NN = [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
	var vorlesungenAutor7NN = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62];
	var vorlesungenParthey = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62];
	var vorlesungenWillisen = [3,4,5,49];



	for (i = 1; i<=62; i++)
	{
		document.write("<tr>");
		document.write('<th scope="row">' + i + '</th>');
		document.write('<td>03.11.1827 </td>');
		
		if (vorlesungenPatzig.indexOf(i) >= 0)
		{
			document.write("<td>yes</td>");
		}
		else 
		{
			document.write("<td></td>");
		}


		if (vorlesungenLibelt.indexOf(i) >= 0)
		{
			document.write("<td>yes</td>");
		}
		else 
		{
			document.write("<td></td>");
		}

		if (vorlesungenAutor4NN.indexOf(i) >= 0)
		{
			document.write("<td>yes</td>");
		}
		else 
		{
			document.write("<td></td>");
		}

		if (vorlesungenAutor5NN.indexOf(i) >= 0)
		{
			//document.write('Patzig war in Vorlesung:' + i);
			document.write("<td>yes</td>");
		}
		else 
		{
			document.write("<td></td>");
		}

		
		if (vorlesungenAutor7NN.indexOf(i) >= 0)
		{
			//document.write('Patzig war in Vorlesung:' + i);
			document.write("<td>yes</td>");
		}
		else 
		{
			document.write("<td></td>");
		}

		if (vorlesungenParthey.indexOf(i) >= 0)
		{
			//document.write('Patzig war in Vorlesung:' + i);
			document.write("<td>yes</td>");
		}
		else 
		{
			document.write("<td></td>");
		}

		if (vorlesungenWillisen.indexOf(i) >= 0)
		{
			//document.write('Patzig war in Vorlesung:' + i);
			document.write("<td>yes</td>");
		}
		else 
		{
			document.write("<td></td>");
		}


		if (vorlesungenHufeland.indexOf(i) >= 0)
		{
			//document.write('Patzig war in Vorlesung:' + i);
			document.write("<td>yes</td>");
		}
		else 
		{
			document.write("<td></td>");
		}


		if (vorlesungenAutor6NN.indexOf(i) >= 0)
		{
			//document.write('Patzig war in Vorlesung:' + i);
			document.write("<td>yes</td>");
		}
		else 
		{
			document.write("<td></td>");
		}

		document.write("</tr>");
	}
}




function updateLectures()
{

	var lectureNumber = document.getElementById("vorlesungsnummer").value

	//Werte aus dem Web-Formular auslesen
	var author1 = radioWert(document.ChoiceAuthor1.Author1);
	var author2 = radioWert(document.ChoiceAuthor2.Author2);


	//Mitschrift vom 1. Autor auslesen
	var xhttp = new XMLHttpRequest();

	xhttp.onreadystatechange = function() 
	{
	    if (this.readyState == 4 && this.status == 200) {
	        getLecture(this, lectureNumber, "field1");
	    }
	};


	switch(author1)
	{
		case "patzig": 
			xhttp.open("GET", "xml/patzig.xml", true);
			break;
		case "libelt":
			xhttp.open("GET", "xml/libelt.xml", true);
			break;
		case "willisen":
			xhttp.open("GET", "xml/willisen.xml", true);
			break;
		case "author4nn":
			xhttp.open("GET", "xml/autor-nn-4.xml", true);
			break;
		default: 
			console.log ("can't find XML document for choosen author");
	}


	//load XML file
	//xhttp.open("GET", "xml/autor-nn-4.xml", true);
	xhttp.send();



	//###########################################################################################

	//Mitschrift vom 2. Autor auslesen

	var xhttp = new XMLHttpRequest();

	xhttp.onreadystatechange = function() 
	{
	    if (this.readyState == 4 && this.status == 200) {
	        getLecture(this, lectureNumber, "field2");
	    }
	};


	switch(author2)
	{
		case "patzig": 
			xhttp.open("GET", "xml/patzig.xml", true);
			break;
		case "libelt":
			xhttp.open("GET", "xml/libelt.xml", true);
			break;
		case "willisen":
			xhttp.open("GET", "xml/willisen.xml", true);
			break;
		case "author4nn":
			xhttp.open("GET", "xml/autor-nn-4.xml", true);
			break;
		default: 
			console.log ("can't find XML document for choosen author");
	}

	//load XML file
	//xhttp.open("GET", "xml/willisen.xml", true);
	xhttp.send();


}





//Funktion liefert den Text einer bestimmten Vorlesung eines gegeben Autors zurück
//Input-Paramter: Autor, Vorlesungsnummer, wo der Text ausgegeben werden soll
function getLecture(xml, vorlesungsnummer, ausgabefeld) 
{

	var xmlData = xml.responseXML;	    			
	var output ="";

	var anzahlAnsätze = xmlData.getElementsByTagName("vorlesungen")[0].getElementsByTagName("vorlesung")[vorlesungsnummer-1].getElementsByTagName("p").length;


	for (i = 0; i<anzahlAnsätze; i++)
	{

		//console.log(xmlData.getElementsByTagName("vorlesungen")[0].getElementsByTagName("vorlesung")[vorlesungsnummer].getElementsByTagName("p")[i].childNodes[0].nodeValue);

		output = output + "<p>" + xmlData.getElementsByTagName("vorlesungen")[0].getElementsByTagName("vorlesung")[vorlesungsnummer-1].getElementsByTagName("p")[i].childNodes[0].nodeValue + "</p>";

	}

	if (output.length == 0)
	{
		output = "<i>[leider keine Nachschrift vorhanden]</i>";
	}

	document.getElementById(ausgabefeld).innerHTML = output;
}





function radioWert(rObj) {

	for (var i=0; i<rObj.length; i++) if (rObj[i].checked) return rObj[i].value;
	return false;
}

 	