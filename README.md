# Simple AngularJS Hello World Web Application

<a href='https://travis-ci.org/iancollington/angular-hello-world/builds'><img src='https://travis-ci.org/iancollington/angular-hello-world.svg?branch=master'></a>

This is a very simple AngularJS web application made up of two modules; angular-hello-world-service and angular-hello-world-ui.

The Docker Compose file deploys the service module as a web application to Tomcat and the UI files to a NGINX instance that also serves as a reverse proxy to Tomcat for REST requests.

For more information on running NGINX as a reverse proxy see the blog post: http://www.iancollington.com/nginx-as-a-reverse-proxy-in-docker/

## Run from source

To run this stack from source:

```
$ git clone https://github.com/iancollington/angular-hello-world.git
$ cd angular-hello-world
$ mvn package
$ docker-compose -f docker-compose-dev.yml up
```

## Run from binaries

To run this stack from the prebuilt Docker images from Docker Hub:

```
$ git clone https://github.com/iancollington/angular-hello-world.git
$ cd angular-hello-world
$ docker-compose up
```

View the app at http://localhost:8080/
