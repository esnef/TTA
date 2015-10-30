/*
 * $Id: index.js Oct 13, 2015 3:08:23 PM tta1516$
 * 
 * Copyright (C) 2015 Maider Huarte Arrayago
 * 
 * This file is part of TTA1516_LS-EX_08v6_www.zip.
 * 
 * TTA1516_LS-EX_08v6_www.zip is based on templates by Eclipse.org - Thym and it is intended
 * for learning purposes only.
 * 
 * TTA1516_LS-EX_08v6_www.zip is free software: you can redistribute it and/or modify it under
 * the terms of the GNU General Public License as published by the Free Software
 * Foundation, either version 3 of the License, or (at your option) any later
 * version.
 * 
 * TTA1516_LS-EX_08v6_www.zip is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details
 * <http://www.gnu.org/licenses/>.
 */

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {

    	page.load(0);//The best way to avoid page-0 as background
		
    	var pageDiv;
    	for(var i=1;i<tests.total;i++) {
    		pageDiv=page.create(i);
    		$("body").append(pageDiv);
    		page.load(i);
    	}

     	$("#prev-0").remove();
     	$("#next-"+(tests.total-1)).attr("href","#page-0");
		
    	fitImg(); //Adjust img sizes
     	
		$("body").enhanceWithin();//To apply styles
		
    	$(window).bind('resize',fitImg); //Bind imgFit function to resize event

    }
};

app.initialize();

function fitImg() {
	var screenWidth=$(window).width()-16*2;
	var screenHeight=$(window).height()-16*2;
	$("img").each(
		function () {
			$(this).css({"max-width":screenWidth, "max-height":screenHeight});
		}
	);	
}
