# exadel-bsu
Project guided by Exadel team - a simple twitter-like **SPA**.

# Gettind started

## Prerequisites
 - **Java 8**
 - **Apache Tomcat**

## Environmental variables
 - `JAVA_HOME` - has to point at your **JDK** installation
 - `CATALINA_HOME` - has to point at **Apache Tomcat** root directory
 - `PROJECT_NAME` - in this documentation assumed to be `exadel-bsu` (it's here since I plan changing the name in future) 
 
## Building and running
Building is performed by maven:
```bash
$ mvn install
```
It will assemble the project into `target` folder.

In order to deploy it to **Tomcat** server and run, execute `start.sh` script.


## Project layout
```
src
└── main
    ├── java
    │   ├── Entity.java
    │   ├── GlobalServlet.java
    │   ├── LogFilter.java
    │   ├── Manager.java
    │   ├── Post.java
    │   ├── PostServlet.java
    │   ├── StatusServlet.java
    │   ├── User.java
    │   └── UserServlet.java
    └── webapp
        ├── assets
        │   ├── delete.svg
        │   ├── edit.svg
        │   ├── email.svg
        │   └── github.svg
        ├── css
        │   └── styles.css
        ├── index.html
        ├── js
        │   ├── data.js
        │   ├── index.js
        │   └── test.js
        └── WEB-INF
            └── web.xml
```

## Troubleshooting
Note that it might not be `Intellij-IDEA`-compatible since it was not tested in any IDE.

If you run into any problems with deploying to the **Tomcat** server you can always manually copy `.war` form `target/` to the `$CATALINA_HOME/webapps/$PROJECT_NAME` and start **Tomcat** server with `$CATALINA_HOME/bin/startup.sh`. It will be available at `http://localhost:8080/$PROJECT_NAME`.

# API Reference
If running locally assume **base url** to be `localhost:8080/$PROJECT_NAME`.

**Abstract** *Entity* model includes unique ID and creation date fields - they are assigned automatically on creation.
Project contains 2 types of *Entities*: `User` and `Post`.
Each entity implements all **CRUD** operations (substitute `users` or `posts` instead of `{entities}`):
 - **GET:** `/{entities}` - get all entities
 - **GET:** `/{entities}?id={id}` - get an entity with specified `id`
 - **DELETE:** `/{entities}?id={id}` - delete an entity

## Users API
 - **POST:** `/users?name={name}&surname={surname}` - create User with specified `name` and `surname`
 - **PUT:** `/users?id={id}&name={name}` - update `name` field for User with specified `id`

## Posts API
 - **POST:** `/users?authorId={authorId}&content={content}` - create Post with specified `authorId` and `content`
 - **PUT:** `/users?id={id}&content={content}` - update `content` field for Post with specified `id`
