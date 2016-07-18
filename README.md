# Simple AngularJS Hello World web application

<a href='https://travis-ci.org/iancollington/angular-hello-world/builds'><img src='https://travis-ci.org/iancollington/angular-hello-world.svg?branch=master'></a>

This is a very simple AngularJS web application made up of two modules; service and ui.

The Docker Compose file deploys the service module as a web application to Tomcat and the UI files to a NGINX instance that also serves as a reverse proxy to Tomcat for REST requests.

For more information on running NGINX as a reverse proxy see the blog post: http://www.iancollington.com/nginx-as-a-reverse-proxy-in-docker/

To run this stack:

```
$ git clone https://github.com/iancollington/angular-hello-world.git
$ cd angular-hello-world
$ docker-compose up
```
