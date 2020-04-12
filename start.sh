#!/bin/bash

PROJECT_NAME=exadel-bsu

mkdir -p log
LOGFILE=log/$(date +%Y-%m-%d_%H:%M:%S).log

mvn install
cp target/*.war $CATALINA_HOME/webapps
$CATALINA_HOME/bin/shutdown.sh 2> /dev/null
sleep 1.5
CATALINA_OUT=$LOGFILE $CATALINA_HOME/bin/startup.sh
echo "Server is running at http://localhost:8080/$PROJECT_NAME"
sleep 1.5
echo "" > $LOGFILE
tail -f $LOGFILE

