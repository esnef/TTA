/*
 * $Id: businessREST.java Oct 22, 2015 tta1516$
 * 
 * Copyright (C) 2015 Maider Huarte Arrayago
 * 
 * This file is part of TTA1516_LS-EX_09S.zip.
 * 
 * TTA1516_LS-EX_09S.zip is based on templates by Eclipse.org and it is
 * intended for learning purpouses only.
 * 
 * TTA1516_LS-EX_09S.zip is free software: you can redistribute it and/or
 * modify it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or (at your
 * option) any later version.
 * 
 * TTA1516_LS-EX_09S.zip is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 * FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more
 * details <http://www.gnu.org/licenses/>.
 */

package business;

//imports necesarios

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.Response;

import org.jboss.resteasy.plugins.providers.multipart.MultipartFormDataInput;

import eus.ehu.INTEL901_504021.TTA1516.utils.FileUtils;

@Path("/School")//Anotación de clase para REST
public class businessREST {
	
	public businessREST() {
	}
	
    @Context private javax.servlet.http.HttpServletRequest hsr;
    
	@Path("/uploadFile")//Anotación de método para REST
    @POST//Anotación de tipo de mensaje HTTP-req
    @Consumes("multipart/form-data")//Indica que tipos de datos se consume por este metodo.
    public Response uploadFile(MultipartFormDataInput input) {
System.out.println("uploadFile: "+hsr.getRemoteAddr());

		String destFolder="/home/alumno/Escritorio/504021/workspace/example9S/WebContent";//ubicación dentro del sistema de ficheros del servidor
		Response httpResponse=FileUtils.uploadFile(input, destFolder);//Recoger el fichero recibido como contenido multipart y escribirlo en la ubicación destFolder
		
		return httpResponse;		
    }
}
