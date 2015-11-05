/*
 * $Id: Solution.java Nov 3, 2015 tta1516$
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

package data;

import java.io.Serializable;
import javax.persistence.*;

@Entity
@NamedQueries({
	@NamedQuery(name="Solution.findAll", query="SELECT e FROM Solution e"),
	@NamedQuery(name="Solution.findAllLessonLogin", query="SELECT e FROM Solution e WHERE e.exerciseBean.lessonBean.id= :lessonId AND e.studentBean.login= :login"),
	@NamedQuery(name="Solution.findExerciseCodeLogin", query="SELECT e FROM Solution e WHERE e.exerciseBean.exerciseCode= :exerciseCode AND e.studentBean.login= :login")
})
public class Solution implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	private int id;

	private String answer;

	private String calification;

	//bi-directional many-to-one association to Student
	@ManyToOne
	@JoinColumn(name="student")
	private Student studentBean;

	//bi-directional many-to-one association to Exercise
	@ManyToOne
	@JoinColumn(name="exercise")
	private Exercise exerciseBean;

	public Solution() {
	}

	public int getId() {
		return this.id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getAnswer() {
		return this.answer;
	}

	public void setAnswer(String answer) {
		this.answer = answer;
	}

	public String getCalification() {
		return this.calification;
	}

	public void setCalification(String calification) {
		this.calification = calification;
	}

	public Student getStudentBean() {
		return this.studentBean;
	}

	public void setStudentBean(Student studentBean) {
		this.studentBean = studentBean;
	}

	public Exercise getExerciseBean() {
		return this.exerciseBean;
	}

	public void setExerciseBean(Exercise exerciseBean) {
		this.exerciseBean = exerciseBean;
	}
}