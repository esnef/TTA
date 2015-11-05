/*
 * $Id: Student.java Nov 3, 2015 tta1516$
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
	@NamedQuery(name="Student.findAll", query="SELECT s FROM Student s"),
	@NamedQuery(name="Student.findLogin", query="SELECT s FROM Student s WHERE s.login= :login"),
	@NamedQuery(name="Student.findDni", query="SELECT s FROM Student s WHERE s.dni= :dni"),	
	@NamedQuery(name="Student.findAllLoginPrefix", query="SELECT s FROM Student s WHERE s.login LIKE :loginPrefix")	
})
public class Student implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	private int id;

	private String dni;

	private String login;

	private String name;

	private String surname;

	//bi-directional many-to-one association to Solution
	@OneToMany(mappedBy="studentBean")
	private List<Solution> solutions;

	public Student() {
	}

	public int getId() {
		return this.id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getDni() {
		return this.dni;
	}

	public void setDni(String dni) {
		this.dni = dni;
	}

	public String getLogin() {
		return this.login;
	}

	public void setLogin(String login) {
		this.login = login;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getSurname() {
		return this.surname;
	}

	public void setSurname(String surname) {
		this.surname = surname;
	}

	public List<Solution> getSolutions() {
		return this.solutions;
	}

	public void setSolutions(List<Solution> solutions) {
		this.solutions = solutions;
	}

	public Solution addSolution(Solution solution) {
		getSolutions().add(solution);
		solution.setStudentBean(this);

		return solution;
	}

	public Solution removeSolution(Solution solution) {
		getSolutions().remove(solution);
		solution.setStudentBean(null);

		return solution;
	}

}