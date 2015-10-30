/*
 * $Id: functions.js Oct 9, 2015 9:31:47 AM tta1516$
 * 
 * Copyright (C) 2015 Maider Huarte Arrayago
 * 
 * This file is part of TTA1516_LS-EX_08v1_www.zip.
 *  
 * TTA1516_LS-EX_08v1_www.zip is based on templates by Eclipse.org - Thym and it is intended
 * for learning purpouses only.
 * 
 * TTA1516_LS-EX_08v1_www.zip is free software: you can redistribute it and/or modify it under
 * the terms of the GNU General Public License as published by the Free Software
 * Foundation, either version 3 of the License, or (at your option) any later
 * version.
 * 
 * TTA1516_LS-EX_08v1_www.zip is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details
 * <http://www.gnu.org/licenses/>.
 */

function check() {
//	alert("check 1");
	
	results.answered++;
	var amswer=$("input[name='radio-choice-1']:checked").val();
	
	//Obtener el valor del radio seleccionado por el usuario, en el conjunto de inputs de nombre'radio-choice-1' 
	
	if(answer==test.correct) {
		alert("CORRECT");
		results.corrects++;
	}
	else
		alert("WRONG");
	
	$("#res1").text(""+results.corrects+"/"+results.answered);
	//Insertar texto del porcentaje de respuestas correctas en el elemento id=res2
	$("#res2").text(""+((results.corrects*100)/results.answered)+"%");

//	alert("check 7");
}
