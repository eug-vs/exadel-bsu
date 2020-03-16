# exadel-bsu
Project guided by Exadel team - a simple twitter-like **SPA**.

# Gettind started
## Prerequisites
 - **Java 8**
 - **Apache Tomcat**
 - **GNU Make**

## Environmental variables
 - `JAVA_HOME` - has to point at your **JDK** installation
 - `CATALINA_HOME` - has to point at **Apache Tomcat** root directory
 - `CLASSPATH` - has to contain `$(CATALINA_HOME)/lib/servlet-api.jar`
 - `PROJECT_NAME` - *optional*, defaults to `bsu`

## Building and running
The running process is pretty simple due to [Makefile](./Makefile), simply execute:
```bash
$ make run
```
It will assemble the project into `build` folder, then deploy it to your **Tomcat** server and run it!

Here is the example output of `make` command:
```bash
$ make
mkdir build/WEB-INF/classes/ -p
cp src/web.xml build/WEB-INF/
cp src/index.html build
cp src/page.html build
javac -d build/WEB-INF/classes src/classes/CheckServlet.java
javac -d build/WEB-INF/classes src/classes/StatusServlet.java
javac -d build/WEB-INF/classes src/classes/NameServlet.java
mkdir /home/eug-vs/.tomcat/webapps/bsu -p
cp build/. /home/eug-vs/.tomcat/webapps/bsu -r
Restarting tomcat...
Using CATALINA_BASE:   /home/eug-vs/.tomcat
Using CATALINA_HOME:   /home/eug-vs/.tomcat
Using CATALINA_TMPDIR: /home/eug-vs/.tomcat/temp
Using JRE_HOME:        /usr/lib/jvm/java-1.8.0-openjdk-amd64
Using CLASSPATH:       /home/eug-vs/.tomcat/bin/bootstrap.jar:/home/eug-vs/.tomcat/bin/tomcat-juli.jar
Tomcat started.
Server is running at http://localhost:8080/bsu
```
You can run `make clean` to purge local build folder or `make clean_deploy` to purge deployed project from the **Tomcat**.

Here is the example of what the deployed project looks like:
```
/home/eug-vs/.tomcat/webapps/bsu
├── index.html
├── page.html
└── WEB-INF
    ├── classes
    │   ├── CheckServlet.class
    │   ├── NameServlet.class
    │   └── StatusServlet.class
    └── web.xml
```

## Troubleshooting
Note that it might not be `Intellij-IDEA`-compatible since it was not tested in any IDE.

If you run into any problems with deploying to the **Tomcat** server you can always manually copy `build` dir to the `$(CATALINA_HOME)/webapps/$(PROJECT_NAME)` and start **Tomcat** server with `$(CATALINA_HOME)/bin/startup.sh`. It will be available at `http://localhost:8080/$(PROJECT_NAME)`.

If you fail to build project locally you can always manually `javac` all the sources and then gently assemble the project with your mighty hands (**make sure to match example structure!**).
