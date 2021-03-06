/*
 * $Id: SolutionJSON.java Nov 3, 2015 tta1516$
 * 
 * Copyright (C) 2015 Maider Huarte Arrayago
 * 
 * This file is part of TTA1516_LS-EX_11S.zip.
 * 
 * TTA1516_LS-EX_11S.zip is based on templates by Eclipse.org and it is
 * intended for learning purposes only.
 * 
 * TTA1516_LS-EX_11S.zip is free software: you can redistribute it and/or
 * modify it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or (at your
 * option) any later version.
 * 
 * TTA1516_LS-EX_11S.zip is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 * FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more
 * details <http://www.gnu.org/licenses/>.
 */

package business.json;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class SolutionJSON {
	@XmlElement
	private String exerciseSolution;
	
	@XmlElement
	private String exerciseCalification;
	
	public SolutionJSON() {
		
	}
	
	public SolutionJSON(String exerciseSolution,String exerciseCalification) {
		this.exerciseSolution=exerciseSolution;
		this.exerciseCalification=exerciseCalification;
	}

	public String getExerciseSolution() {
		return this.exerciseSolution;
	}

	public void setExerciseSolution(String exerciseSolution) {
		this.exerciseSolution = exerciseSolution;
	}

	public String getExerciseCalification() {
		return this.exerciseCalification;
	}

	public void setExerciseCalification(String exerciseCalification) {
		this.exerciseCalification = exerciseCalification;
	}	
}
