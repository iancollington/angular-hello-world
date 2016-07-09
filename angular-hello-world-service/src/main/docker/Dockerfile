FROM tomcat:8.5
EXPOSE 8080
ADD target/angular-hello-world-service.war /usr/local/tomcat/webapps/ROOT.WAR
ENV JAVA_OPTS -Djava.security.egd=file:/dev/urandom
