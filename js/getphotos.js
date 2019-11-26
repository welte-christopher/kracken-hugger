// JavaScript Document

var folder = "../images/portfolios/photography/";

$.ajax({
	url : folder,
	success: function (data) {
		"use strict";
		$(data).find("a").attr("href", function (i, val) {
			if( val.match(/\.(jpe?g|png|gif)$/) ) { 
				$(".photo-bucket").append( "<div class='col-md-4 col-sm-6 photo-block'><img class='img-responsive' src='"+ folder + val +"'></div>" );
			} 
		});
	}
});