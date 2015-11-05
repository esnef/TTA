/*
 * $Id: StudentJSON.java Nov 3, 2015 tta1516$
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
public class StudentJSON {
	@XmlElement
	private String dni;
	
	@XmlElement
	private String login;
	
	@XmlElement
	private String name;	
	
	@XmlElement
	private String surname;
	
	public StudentJSON() {
	}
	
	public StudentJSON(String dni, String login, String name, String surname) {
		this.dni=dni;
		this.login=login;
		this.name=name;
		this.surname=surname;
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
}
