import express from 'express';
import bodyParser from 'body-parser';
import routing from './routes/index.js';
import swaggerUI from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
const app = express();

// Config Swagger
const swaggerOptions = {
	definition: {
		openapi: "3.0.3",
		info: {
			title: "SwaggerUI",
			version: "1.0.0",
			description: "A simple Express Library API",
		},
		servers: [
			{
				url: "http://localhost:5000",
			},
		],
	},
	apis: ["**/*.yaml"]
};
const swaggerSpecs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpecs));


app.use(express.json());
app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({ extended: true }))

//Hello World
app.get('/',(req,res) => {
    res.send('Hello World!');
})

routing(app);


const PORT = 5000;
  
app.listen(PORT,() => {
    console.log(`Running at http://localhost:${PORT}/`);
    console.log(`Swagger at http://localhost:${PORT}/api-docs`);
})