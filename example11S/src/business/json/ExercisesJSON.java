/*
 * $Id: ExercisesJSON.java Nov 3, 2015 tta1516$
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

import java.util.List;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class ExercisesJSON {
	
	@XmlElement
	private String login;
	
	@XmlElement	
	private String lessonCode;
	
	@XmlElement	
	private int total;
	
	@XmlElement(name="exercise")
	private List<ExerciseJSON> exercises;
	
	public ExercisesJSON() {
	}
	
	public ExercisesJSON(String login, String lessonCode) {
		this.login=login;
		this.lessonCode=lessonCode;
	}
	
	public String getLogin() {
		return this.login;
	}

	public void setLogin(String login) {
		this.login = login;
	}
	
	public String getLessonCode() {
		return this.lessonCode;
	}

	public void setLessonCode(String lessonCode) {
		this.lessonCode = lessonCode;
	}
	
	public int getTotal() {
		return this.total;
	}

	public void setTotal(int total) {
		this.total = total;
	}
	
	public List<ExerciseJSON> getExercises() {
		return this.exercises;
	}

	public void setExercises(List<ExerciseJSON> exercises) {
		this.exercises = exercises;
	}	
}
