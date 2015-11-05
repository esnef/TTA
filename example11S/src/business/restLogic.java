/*
 * $Id: restLogic.java Nov 3, 2015 tta1516$
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
package business;

import java.util.ArrayList;
import java.util.List;

import javax.ejb.Singleton;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.jboss.resteasy.plugins.providers.multipart.MultipartFormDataInput;

import business.json.ExerciseJSON;
import business.json.SolutionJSON;
import business.json.SolutionsJSON;
import business.json.ExercisesJSON;
import business.json.InitialDataJSON;
import business.json.LessonJSON;
import business.json.LessonsJSON;
import business.json.StudentJSON;
import data.Exercise;
import data.Solution;
import data.Lesson;
import data.Student;
//import eus.ehu.INTEL901_504021.TTA1516.utils.FileUtils;

@Singleton//Anotación de EJB compatible con Web Service
@Path("/School")
public class restLogic {
    @Context
    private javax.servlet.http.HttpServletRequest hsr;
    
    @PersistenceContext
    EntityManager em;
	
	public restLogic() {
	}
/*	
	@POST
    @Consumes("multipart/form-data")
	@Path("/uploadFile")
    public Response uploadFile(MultipartFormDataInput input) {
		System.out.println("uploadFile: "+hsr.getRemoteAddr());

		String destFolder=//ubicación dentro del sistema de ficheros del servidor
		Response httpResponse=//Recoger el fichero recibido como contenido multipart y escribirlo en la ubicación destFolder
				
		return httpResponse;		
    }
*/	
	@SuppressWarnings("unchecked")
	@GET
	@Produces(MediaType.TEXT_PLAIN)//indicamos que produce un codigo de texto plano
    @Path("/requestCalification")
	public Response requestCalification(@QueryParam("solutionName") String solutionName) {//solutionName nombre de la solucion que quiere consultar el usuario
		System.out.println("requestCalification: "+hsr.getRemoteAddr());
		Response response;
		String exerciseCode=solutionName.substring(solutionName.indexOf("E"),solutionName.indexOf("_"));
		String login=solutionName.substring(solutionName.indexOf("_")+1);
		
		List<Solution> solutionList=(List<Solution>)em.createNamedQuery("Solution.findExerciseCodeLogin").setParameter("exerciseCode", exerciseCode).setParameter("login",login).getResultList();//Consultar la lista de soluciones calificadas con código de ejercicio=exerciseCode y login=login
		if(solutionList.size()==1){//Si la lista es de 1 elemento (sólo puede haber un registro así en la tabla)
			response=Response.status(200).entity(solutionList.get(0).getCalification()).build();
		}else{//si no
			response=Response.status(200).entity("NONE").build();//Construir HTTP-RESPONSE con contenido "NONE"
		}	
		return response;
	}	
	
	@SuppressWarnings("unchecked")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/requestLessons")	
	public LessonsJSON requestLessons() {
		System.out.println("requestLessons: "+hsr.getRemoteAddr());
		
		LessonsJSON lessonsJSON=new LessonsJSON();
		List<LessonJSON> lessonJSONList=new ArrayList<LessonJSON>();
		
		List<Lesson> lessonsList=(List<Lesson>)em.createNamedQuery("Lesson.findAll").getResultList();//Consultar la lista de todas las lecciones
			
		for(int i=0;i<lessonsList.size();i++){//Para cada lección de la lista
			Lesson l=lessonsList.get(i);
			LessonJSON lJSON=new LessonJSON(l.getLessonCode(),l.getTitle());//Crear objeto LessonJSON, copiando lessonCode y title
			lessonJSONList.add(lJSON);//Añadir objeto LessonJSON creado a la lista lessonJSONList
		}
		lessonsJSON.setLessons(lessonJSONList);//Meter la lista lessonJSONList en el objeto lessonsJSON

		return lessonsJSON;
	}

/*
	@SuppressWarnings("unchecked")
	@GET
	@Produces(MediaType.APPLICATION_JSON)	
	@Path("/requestInitialData")
	public InitialDataJSON requestInitialData(@QueryParam("login") String login, @QueryParam("lessonCode") String lessonCode) {
		System.out.println("requestInitialData: "+hsr.getRemoteAddr());
		
		InitialDataJSON initialDataJSON=new InitialDataJSON();
		
		List<Student> students=//Consultar la lista de estudiantes con login=login

		if(students.size()==1) {
			ExercisesJSON exercisesJSON=new ExercisesJSON(login,lessonCode);
			SolutionsJSON solutionsJSON=new SolutionsJSON(login,lessonCode);

			List<Exercise> exerciseList=//Consultar la lista de ejercicios con lessonCode=lessonCode (ejercicios de una lección concreta)
		
			List<ExerciseJSON> exerciseJSONList=new ArrayList<ExerciseJSON>();
			List<SolutionJSON> solutionJSONList=new ArrayList<SolutionJSON>();
			
			{//Para cada ejercicio de la lista
				Exercise e=exerciseList.get(i);
				//Crear objeto ExerciseJSON, copiando exerciseCode, wording y shortName de resourceType
				//Añadir objeto ExerciseJSON creado a la lista exerciseJSONList
			
				List<Solution> solutionList=//Consultar la lista de soluciones con exerciseCode=exerciseCode y login=login
			
				SolutionJSON sJSON;
				//Si la lista es de 1 elemento (sólo puede haber un registro así en la tabla)
					//Crear objeto sJSON, con la URL completa de la resolución en el servidor y su calificación
				//Si no
					//Crear objeto sJSON, sin URL y calificación "NONE"
				//Añadir objeto sJSON creado a la lista solutionJSONList

			}
			//Meter la lista exerciseJSONList en el objeto exercisesJSON
			//Ajustar el atributo total de exercisesJSON según el tamaño de la lista exerciseJSONList

			//Meter la lista solutionJSONList en el objeto solutionsJSON
			//Ajustar el atributo total de solutionsJSON según el tamaño de la lista solutionJSONList
		
			//Meter el objeto exercisesJSON en el objeto initialDataJSON
			//Meter el objeto solutionsJSON en el objeto initialDataJSON
		}

		return initialDataJSON;
	}	
*/
/*
	@SuppressWarnings("unchecked")
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.TEXT_PLAIN)	
	@Path("/addStudent")	
	public Response addStudent(StudentJSON studentJSON) {
		System.out.println("addStudent: "+hsr.getRemoteAddr());
		Response response;
		
		List<Student> rolledStudentList=(List<Student>)em.createNamedQuery("Student.findDni");//Consultar la lista de estudiantes con dni=dni de studentJSON
		if(rolledStudentList.size()==0) {
			
			String loginPrefix=studentJSON.getName().substring(0,1).toLowerCase()+studentJSON.getSurname().substring(0,1).toLowerCase();
			
			List<Student> students=//Consultar la lista de estudiantes cuyo login comience por loginPrefix
			
			Student student=new Student();
			student.setDni(studentJSON.getDni());
			student.setLogin(loginPrefix+students.size());
			student.setName(studentJSON.getName());
			student.setSurname(studentJSON.getSurname());
			
			//Persistir objeto student en el Contexto de Persistencia
			
			response=Response.status(200).entity(/*nuevo login).build();
		}
		else
			response=Response.status(200).entity(/*login del usuario).build();
		
		return response;
	}*/
}
