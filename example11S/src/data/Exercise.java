/*
 * $Id: Exercise.java Nov 3, 2015 tta1516$
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
import java.util.List;

@Entity
@NamedQueries({
	@NamedQuery(name="Exercise.findAll", query="SELECT e FROM Exercise e"),
	@NamedQuery(name="Exercise.findAllLessonCode", query="SELECT e FROM Exercise e WHERE e.lessonBean.lessonCode= :lessonCode")
})
public class Exercise implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	private int id;

	private String exerciseCode;

	private String wording;

	//bi-directional many-to-one association to Lesson
	@ManyToOne
	@JoinColumn(name="lesson")
	private Lesson lessonBean;

	//bi-directional many-to-one association to ResourceType
	@ManyToOne
	@JoinColumn(name="type")
	private ResourceType resourceType;

	//bi-directional many-to-one association to Solution
	@OneToMany(mappedBy="exerciseBean")
	private List<Solution> solutions;

	public Exercise() {
	}

	public int getId() {
		return this.id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getExerciseCode() {
		return this.exerciseCode;
	}

	public void setExerciseCode(String exerciseCode) {
		this.exerciseCode = exerciseCode;
	}

	public String getWording() {
		return this.wording;
	}

	public void setWording(String wording) {
		this.wording = wording;
	}

	public Lesson getLessonBean() {
		return this.lessonBean;
	}

	public void setLessonBean(Lesson lessonBean) {
		this.lessonBean = lessonBean;
	}

	public ResourceType getResourceType() {
		return this.resourceType;
	}

	public void setResourceType(ResourceType resourceType) {
		this.resourceType = resourceType;
	}

	public List<Solution> getSolutions() {
		return this.solutions;
	}

	public void setSolutions(List<Solution> solutions) {
		this.solutions = solutions;
	}

	public Solution addSolution(Solution solution) {
		getSolutions().add(solution);
		solution.setExerciseBean(this);

		return solution;
	}

	public Solution removeSolution(Solution solution) {
		getSolutions().remove(solution);
		solution.setExerciseBean(null);

		return solution;
	}

}