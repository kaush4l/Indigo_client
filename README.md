# _**Indigo Client**_

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

> _**View → Integrated Termial or use shortcut (ctrl+shift+`)**_ 

and it should open a terminal from the reactjs location

OR

go to root folder and open command window.
Then run

>	npm start 

This is build the project and open the react project in localhost:3000 

 ## Running locally through command line
 ~~~
 npm install
 npm run start
 ~~~

 ## Runnning using Docker container

Docker should be installed and the should be running already
Use 'sudo' if required

~~~
$ docker build -t indigo_client . // builds the docker image with the tag name indigo:latest
$ docker run -p 3000:3000 -t indigo_client //Deploys the image in a docker container
~~~
Sharing data from indigo container
$ docker run -it --volumes-from indigo --rm -p 3000:3000 --name indigo_client indigo_client bin/bash
Maps the 3000 port in docker container to 8080 port in the DockerHost or the fromt end


## Learning goals:
  - RESTful call(or calls between containers)
  - Hot reloading in docker.
  - Frontend testing
