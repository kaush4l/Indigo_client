# _**Indigo_client**_

This is the front end for the Indigo application.

## Pre-requisition Softwares:
	VisualStudio Code
		https://code.visualstudio.com/download
	And NodeJS for npm
		https://nodejs.org/en/download/
		Test if this is properly installed by typing the following command in command prompt:
			node -v
			npm -v

## Frontend (ReactJS):
Open Visual studio code.
Select New → Open Folder and select Indigo_client project

To run the program select the Integrated Termial from 

> _**View → Integrated Termial or use shortcut (ctrl+`)**_ 

and it should open a terminal from the reactjs location

OR

go to root folder and open command window.
Then run

>	npm start 

This is build the project and open the react project in localhost:3000 

 ### To start use 
 ~~~
 npm run start
 ~~~

 ### Runnning using Docker container

Docker should be installed and the should be running already
Use 'sudo' if required

~~~
$ docker build -t indigoClient . // builds the docker image with the tag name indigo:latest
$ docker run -p 8080:8080 -t indigoClient //Deploys the image in a docker container
~~~

## Learning goals:
 - axios(communication), communication between docker containers, RESTful call, Hot reloading in docker.
