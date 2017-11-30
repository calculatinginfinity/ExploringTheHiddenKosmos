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


	$('input[id="whichacademy"]').on('change', function() 
	{
		createTable();
		console.log(radioWert(document.academy.lectureplace));
	});


	$('.selectpicker').change(function () 
	{
		//var slecteditem= $(this).find("option:selected").val();    
		//alert(slecteditem);

		updateLectures();
	});



});



/*
 * Gibt eine Tabelle auf dem Bildschirm aus, die auflistet, welcher Autor welche der Vorlesungen mitgeschrieben hat.
 */
function createTable()
{


	//

	console.log("createTable");
	

	var isUniversity = (radioWert(document.academy.lectureplace) == 'true');


	if (isUniversity)
	{
		//$( ".table-scrollable" ).remove();
		$( ".ueberelement" ).remove();
		createTableUniversity();
		//$( ".testdiv" ).append("<h3>DAS IST EIN TEST</h3>");

	}
	else
	{
		//$( ".table table-striped" ).remove();
		//$( ".row mar-bot40" ).append("div class='table-scrollable'></div>");
		//$( ".table-scrollable" ).remove();
		//createTableSingAcademy();
		
$( ".ueberelement" ).remove();
createTableSingAcademy();

	}


	
	
}




function createTableUniversity()
{


	console.log("createTableUniversity");

	//Kopfzeile der Tabelle aufsetzen:
     
    var tableHeadString = "";

    tableHeadString = tableHeadString + '<div class="ueberelement">';
    tableHeadString = tableHeadString + '<table class="table table-striped">';
    tableHeadString = tableHeadString + '<thead>';
    tableHeadString = tableHeadString + '<tr>';
    tableHeadString = tableHeadString + '<th scope="col">Vorlesungsnummer</th>';
    tableHeadString = tableHeadString + '<th scope="col">Datum</th>';
    tableHeadString = tableHeadString + '<th scope="col"><a href="http://www.deutschestextarchiv.de/book/show/patzig_msgermfol841842_1828" target="_blank">Gotthilf Patzig</a>  </th>';
    tableHeadString = tableHeadString + '<th scope="col"><a href="http://www.deutschestextarchiv.de/book/show/libelt_hs6623ii_1828" target="_blank">Karol Libelt</a>  </th>';
	tableHeadString = tableHeadString + '<th scope="col"><a href="http://www.deutschestextarchiv.de/book/show/nn_msgermqu2345_1827" target="_blank">Author #4 (N. N.)</a>  </th>';
    tableHeadString = tableHeadString + '<th scope="col"><a href="http://www.deutschestextarchiv.de/book/show/nn_oktavgfeo79_1828" target="_blank">Author #5 (N. N.)</a>  </th>';
    tableHeadString = tableHeadString + '<th scope="col"><a href="http://www.deutschestextarchiv.de/book/show/nn_n0171w1_1828" target="_blank">Author #7 (N. N.)</a>  </th>';
    tableHeadString = tableHeadString + '<th scope="col"><a href="http://www.deutschestextarchiv.de/book/show/parthey_msgermqu1711_1828" target="_blank">Gustav Parthey</a>  </th>';
    tableHeadString = tableHeadString + '<th scope="col"><a href="http://www.deutschestextarchiv.de/book/show/willisen_humboldt_1827" target="_blank">Friedrich Adolf von Willisen</a></th>';
    tableHeadString = tableHeadString + '</tr>';
    tableHeadString = tableHeadString + '</thead>';

    var tableBodyString = "";
    var tableBodyString = "<tbody>";
    


	console.log("Table2")

	//University
	var vorlesungenPatzig = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62];
	var vorlesungenLibelt = [23,24,25,26,27,28,29,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62];
	var vorlesungenAutor4NN = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62];
	var vorlesungenAutor5NN = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62];
	var vorlesungenAutor7NN = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62];
	var vorlesungenParthey = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62];
	var vorlesungenWillisen = [3,4,5,49];

	var lectureDates = ["03.11.1827", "07.11.1827", "10.11.1827", "14.11.1827", "17.11.1827", "21.11.1827", "24.11.1827", "28.11.1827", "01.12.1827", "05.12.1827", "08.12.1827", "12.12.1827", "15.12.1827", "20.12.1827", "22.12.1827", "29.12.1827", "02.01.1828", "05.01.1828", "09.10.1828", "12.01.1828", "16.01.1828", "19.01.1828", "23.01.1828", "26.01.1828", "30.01.1828", "01.02.1828", "06.02.1828", "09.02.1828", "13.02.1828", "16.02.1828", "20.02.1828", "23.02.1828", "27.02.1828", "01.03.1828", "05.03.1828", "08.03.1828", "12.03.1828", "15.03.1828", "19.03.1828", "22.03.1828", "24.03.1828", "25.03.1828", "26.03.1828", "28.03.1828", "29.03.1828", "31.03.1828", "01.04.1828", "02.04.1828", "09.04.1828", "10.04.1828", "11.04.1828", "14.04.1828", "15.04.1828", "16.04.1828", "17.04.1828", "19.04.1828", "21.04.1828", "22.04.1828", "23.04.1828", "24.04.1828", "25.04.1828", "26.04.1828"];

	//Sing-Acadeky
	var vorlesungenHufeland = [1,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
	var vorlesungenAutor6NN = [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

	//console.log(radioWert(document.academy.lectureplace));


	var outputString = "";

	var isTrueSet = (radioWert(document.academy.lectureplace) == 'true');


	for (i = 1; i<=62; i++)
	{

		outputString = outputString + '<tr> <th scope="row">' + i + '</th> <td>' + lectureDates[i-1] + '</td>';
		
		if (vorlesungenPatzig.indexOf(i) >= 0)
		{
			outputString = outputString + "<td>X</td>";
		}
		else 
		{
			outputString = outputString + "<td></td>";
		}


		if (vorlesungenLibelt.indexOf(i) >= 0)
		{
			outputString = outputString + "<td>X</td>";
		}
		else 
		{
			outputString = outputString + "<td></td>";
		}

		if (vorlesungenAutor4NN.indexOf(i) >= 0)
		{
			outputString = outputString + "<td>X</td>";
		}
		else 
		{
			outputString = outputString + "<td></td>";
		}

		if (vorlesungenAutor5NN.indexOf(i) >= 0)
		{
			outputString = outputString + "<td>X</td>";
		}
		else 
		{
			outputString = outputString + "<td></td>";
		}

		
		if (vorlesungenAutor7NN.indexOf(i) >= 0)
		{
			outputString = outputString + "<td>X</td>";
		}
		else 
		{
			outputString = outputString + "<td></td>";
		}

		if (vorlesungenParthey.indexOf(i) >= 0)
		{
			outputString = outputString + "<td>X</td>";
		}
		else 
		{
			outputString = outputString + "<td></td>";
		}

		if (vorlesungenWillisen.indexOf(i) >= 0)
		{
			outputString = outputString + "<td>X</td>";
		}
		else 
		{
			outputString = outputString + "<td></td>";
		}

	}

		outputString = outputString + "</tr>";

/*		
		document.write(tableHeadString);
		document.write(tableBodyString);
		document.write(outputString);
		document.write("</tbody></table>");
 */       
	
		$( ".table-scrollable" ).append(tableHeadString + tableBodyString + outputString + "</tbody></table></div>" );

	
}



function createTableSingAcademy()
{


	//Kopfzeile der Tabelle aufsetzen:
     
    var tableHeadString = "";

    tableHeadString = tableHeadString + '<div class="ueberelement">';
    tableHeadString = tableHeadString + '<table class="table table-striped">';
    tableHeadString = tableHeadString + '<thead>';
    tableHeadString = tableHeadString + '<tr>';
    tableHeadString = tableHeadString + '<th scope="col">Vorlesungsnummer</th>';
    tableHeadString = tableHeadString + '<th scope="col">Datum</th>';
    tableHeadString = tableHeadString + '<th scope="col"><a href="http://www.deutschestextarchiv.de/book/show/parthey_msgermqu1711_1828" target="_blank">Otto Hufeland</a>  </th>';
    tableHeadString = tableHeadString + '<th scope="col"><a href="http://www.deutschestextarchiv.de/book/show/willisen_humboldt_1827" target="_blank">Author #6 (N.N.)</a></th>';
    tableHeadString = tableHeadString + '</tr>';
    tableHeadString = tableHeadString + '</thead>';

    var tableBodyString = "";
    var tableBodyString = "<tbody>";
    


	console.log("Table2")

	//University
	var vorlesungenPatzig = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62];
	var vorlesungenLibelt = [23,24,25,26,27,28,29,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62];
	var vorlesungenAutor4NN = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62];
	var vorlesungenAutor5NN = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62];
	var vorlesungenAutor7NN = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62];
	var vorlesungenParthey = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62];
	var vorlesungenWillisen = [3,4,5,49];

	var lectureDates = ["03.11.1827", "07.11.1827", "10.11.1827", "14.11.1827", "17.11.1827", "21.11.1827", "24.11.1827", "28.11.1827", "01.12.1827", "05.12.1827", "08.12.1827", "12.12.1827", "15.12.1827", "20.12.1827", "22.12.1827", "29.12.1827", "02.01.1828", "05.01.1828", "09.10.1828", "12.01.1828", "16.01.1828", "19.01.1828", "23.01.1828", "26.01.1828", "30.01.1828", "01.02.1828", "06.02.1828", "09.02.1828", "13.02.1828", "16.02.1828", "20.02.1828", "23.02.1828", "27.02.1828", "01.03.1828", "05.03.1828", "08.03.1828", "12.03.1828", "15.03.1828", "19.03.1828", "22.03.1828", "24.03.1828", "25.03.1828", "26.03.1828", "28.03.1828", "29.03.1828", "31.03.1828", "01.04.1828", "02.04.1828", "09.04.1828", "10.04.1828", "11.04.1828", "14.04.1828", "15.04.1828", "16.04.1828", "17.04.1828", "19.04.1828", "21.04.1828", "22.04.1828", "23.04.1828", "24.04.1828", "25.04.1828", "26.04.1828"];

	//Sing-Acadeky
	var vorlesungenHufeland = [1,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
	var vorlesungenAutor6NN = [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

	//console.log(radioWert(document.academy.lectureplace));


	var outputString = "";

	var isTrueSet = (radioWert(document.academy.lectureplace) == 'true');


	for (i = 1; i<=16; i++)
	{

		outputString = outputString + '<tr> <th scope="row">' + i + '</th> <td>' + "???" + '</td>';
	


		if (vorlesungenHufeland.indexOf(i) >= 0)
		{
			outputString = outputString + "<td>X</td>";
		}
		else 
		{
			outputString = outputString + "<td></td>";
		}


		if (vorlesungenAutor6NN.indexOf(i) >= 0)
		{
			outputString = outputString + "<td>X</td>";
		}
		else 
		{
			outputString = outputString + "<td></td>";
		}
	}
	
		outputString = outputString + "</tr>";

/*		
		document.write(tableHeadString);
		document.write(tableBodyString);
		document.write(outputString);
		document.write("</tbody></table>");
 */       
	
		$( ".table-scrollable" ).append(tableHeadString + tableBodyString + outputString + "</tbody></table></div>" );

	
}







function updateLectures()
{

	var lectureNumber = document.getElementById("vorlesungsnummer").value

	//Werte aus dem Web-Formular auslesen
	//var author1 = radioWert(document.ChoiceAuthor1.Author1);
	//var author2 = radioWert(document.ChoiceAuthor2.Author2);

	var author1 = $('.selectpicker[id="1"]').find("option:selected").val();   
	var author2 = $('.selectpicker[id="2"]').find("option:selected").val();   


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
			xhttp.send();
			break;
		case "libelt":
			xhttp.open("GET", "xml/libelt.xml", true);
			xhttp.send();
			break;
		case "willisen":
			xhttp.open("GET", "xml/willisen.xml", true);
			xhttp.send();
			break;
		case "author4nn":
			xhttp.open("GET", "xml/autor-nn-4.xml", true);
			xhttp.send();
			break;
		default: 
			console.log ("can't find XML document for choosen author");
	}






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
			xhttp.send();
			break;
		case "libelt":
			xhttp.open("GET", "xml/libelt.xml", true);
			xhttp.send();
			break;
		case "willisen":
			xhttp.open("GET", "xml/willisen.xml", true);
			xhttp.send();
			break;
		case "author4nn":
			xhttp.open("GET", "xml/autor-nn-4.xml", true);
			xhttp.send();
			break;
		default: 
			console.log ("can't find XML document for choosen author");
	}




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

 	