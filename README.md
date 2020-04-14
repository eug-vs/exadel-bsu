# exadel-bsu
Project guided by Exadel team - a simple twitter-like **SPA**.

# Gettind started

## Prerequisites
 - **Java 8**
 - **Apache Tomcat**
 - **Apache Maven**

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

If you run into any problems with deploying to the **Tomcat** server you can always manually copy `.war` from `target/` to the `$CATALINA_HOME/webapps/` and start **Tomcat** server with `$CATALINA_HOME/bin/startup.sh`. It will be available at `http://localhost:8080/$PROJECT_NAME`.

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
 - **POST:** `/posts?authorId={authorId}&content={content}` - create Post with specified `authorId` and `content`
 - **PUT:** `/posts?id={id}&content={content}` - update `content` field for Post with specified `id`

## Examples
 - **GET:**
   ```
   $ curl "localhost:8080/exadel-bsu/users?id=2" -i -X GET
   HTTP/1.1 200                                
   Content-Type: application/json
   Content-Length: 89
   Date: Mon, 13 Apr 2020 09:45:36 GMT

   {"createdAt":"Mon Apr 13 12:10:32 MSK 2020","surname":"John","name":"Doe","id":2}
   ```

- **POST:**
   ```
   $ curl "localhost:8080/exadel-bsu/posts?authorId=2&content=TestContent" -i -X POST
   HTTP/1.1 201 
   Content-Type: application/json
   Content-Length: 90
   Date: Mon, 13 Apr 2020 09:47:33 GMT

   {"createdAt":"Mon Apr 13 12:47:33 MSK 2020","id":2,"authorId":2,"content":"TestContent"}
   ```

 - **PUT:**
   ```
   $ curl "localhost:8080/exadel-bsu/users?id=2&name=NEWNAME" -i -X PUT
   HTTP/1.1 200 
   Content-Type: application/json
   Content-Length: 86
   Date: Mon, 13 Apr 2020 09:48:43 GMT

   {"createdAt":"Mon Apr 13 12:47:33 MSK 2020","surname":"Doe","name":"NEWNAME","id":2}
   ```

 - **DELETE:**
   ```
   $ curl "localhost:8080/exadel-bsu/posts?id=1" -i -X DELETE    
   HTTP/1.1 204                                              
   Date: Mon, 13 Apr 2020 09:49:40 GMT
   ```
