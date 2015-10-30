/*
 * $Id: functions.js Oct 9, 2015 9:37:17 AM tta1516$
 * 
 * Copyright (C) 2015 Maider Huarte Arrayago
 * 
 * This file is part of TTA1516_LS-EX_08v2_www.zip.
 * 
 * TTA1516_LS-EX_08v2_www.zip is based on templates by Eclipse.org - Thym and it is intended
 * for learning purposes only.
 * 
 * TTA1516_LS-EX_08v2_www.zip is free software: you can redistribute it and/or modify it under
 * the terms of the GNU General Public License as published by the Free Software
 * Foundation, either version 3 of the License, or (at your option) any later
 * version.
 * 
 * TTA1516_LS-EX_08v2_www.zip is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details
 * <http://www.gnu.org/licenses/>.
 */

function check() {
//	alert("check 1");
	
	results.answered++;
	
	var answer=$("input[name='radio-choice-1']:checked").val();
	
	if(answer==test.correct) {
		alert("CORRECT");
		results.corrects++;
	}
	else
		alert("WRONG");
	
	$("#res1").text(""+results.corrects+"/"+results.answered);
	$("#res2").text(""+(results.corrects*100/results.answered).toFixed(2)+"%");
	
	
	$("label[id|='label-radio-choice']").each(
			function(index/*marca con cual de los QUE MARCA EL SELECTOR SE ESTA USANDO EN CADA MOMENTO*/){
				if(index!=test.correct){
					//Lo que hace es que por cada componente del selector si son diferentes se visualiza en rojo
					$(this).css("color","red");
				}else{
					$(this).css({"color":"white","background-color":"green","font-size":"24px"});
				}
			}
	);
	//A cada elemento con un id que comience por label-radio-choice, cambiarle el estilo según si es correcto (letra blanca, fondo verde, tamaño de letra 24) o no (color de letra rojo)
		

//	alert("check 7");
}
