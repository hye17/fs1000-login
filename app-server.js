
	"use strict";

	// Basic express setup:

	const PORT          = 8080;
	const express       = require("express");
	const app           = express();


	app.use(express.static("public"));



	app.get( "/login" ,  function ( req , res ) {

		res.send( "index.html");
	});

	app.listen(PORT, function ( ) {

		console.log("App server istening on port " + PORT);

	});