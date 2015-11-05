/*
 * $Id: ResourceType.java Nov 3, 2015 tta1516$
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
@NamedQuery(name="ResourceType.findAll", query="SELECT r FROM ResourceType r")
public class ResourceType implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	private int id;

	private String description;

	private String mime;

	private String shortName;

	//bi-directional many-to-one association to Exercise
	@OneToMany(mappedBy="resourceType")
	private List<Exercise> exercises;

	public ResourceType() {
	}

	public int getId() {
		return this.id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getDescription() {
		return this.description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getMime() {
		return this.mime;
	}

	public void setMime(String mime) {
		this.mime = mime;
	}

	public String getShortName() {
		return this.shortName;
	}

	public void setShortName(String shortName) {
		this.shortName = shortName;
	}

	public List<Exercise> getExercises() {
		return this.exercises;
	}

	public void setExercises(List<Exercise> exercises) {
		this.exercises = exercises;
	}

	public Exercise addExercis(Exercise exercis) {
		getExercises().add(exercis);
		exercis.setResourceType(this);

		return exercis;
	}

	public Exercise removeExercis(Exercise exercis) {
		getExercises().remove(exercis);
		exercis.setResourceType(null);

		return exercis;
	}

}