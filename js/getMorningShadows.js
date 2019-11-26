// JavaScript Document
var folder = "/images/portfolios/photography/MorningShadows/";

	$.ajax({
		url : folder,
		success: function (data) {
			"use strict";
			$(data).find("a").attr("href", function (i, val) {
				if( val.match(/\.(jpe?g|png|gif)$/) ) { 
					$(".masonry").append( "<div class='sketches'><img class='img-responsive' src='"+ folder + val +"'></div>" );
				} 
			});
		}
	});
