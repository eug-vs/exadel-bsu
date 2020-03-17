# Makefile to build and deploy Java Web App to Apache Tomcat server
PROJECT_NAME=bsu

# Directories
SOURCE_DIR=src
WEB_DIR=web
BUILD_DIR=build
CLASSES_DIR=$(BUILD_DIR)/WEB-INF/classes
DEPLOY_DIR=$(CATALINA_HOME)/webapps/$(PROJECT_NAME)

# Targets
ALL_SOURCES=$(notdir $(basename $(wildcard $(SOURCE_DIR)/*.java)))
ALL_TARGETS=$(addsuffix .class, $(addprefix $(CLASSES_DIR)/, $(ALL_SOURCES)))
ALL_STATIC=$(addprefix $(BUILD_DIR)/, $(notdir $(wildcard $(WEB_DIR)/*.html)))


.PHONY: clean clean_deploy stop reset

run: deploy
	@echo "Restarting tomcat..."
	@$(CATALINA_HOME)/bin/shutdown.sh > /dev/null 2>&1
	@sleep 1.5
	@$(CATALINA_HOME)/bin/startup.sh
	@echo "Server is running at http://localhost:8080/$(PROJECT_NAME)"

deploy: assemble | $(DEPLOY_DIR) $(BUILD_DIR)
	cp $(BUILD_DIR)/. $(DEPLOY_DIR) -r

assemble: $(ALL_STATIC) $(BUILD_DIR)/WEB-INF/web.xml $(ALL_TARGETS)

$(BUILD_DIR)/%.html: $(WEB_DIR)/%.html | $(BUILD_DIR)
	cp $< $(BUILD_DIR)

$(BUILD_DIR)/WEB-INF/web.xml: $(WEB_DIR)/WEB-INF/web.xml | $(BUILD_DIR)
	cp $< $(BUILD_DIR)/WEB-INF/

$(CLASSES_DIR)/%.class: $(SOURCE_DIR)/%.java | $(BUILD_DIR)
	javac -d $(CLASSES_DIR) $<

$(BUILD_DIR):
	mkdir $(BUILD_DIR)/WEB-INF/classes/ -p

$(DEPLOY_DIR):
	mkdir $@ -p

stop:
	@$(CATALINA_HOME)/bin/shutdown.sh 2> /dev/null
	@echo "Tomcat server is stopped."

clean:
	rm -rf $(BUILD_DIR)

clean_deploy: stop
	rm -rf $(DEPLOY_DIR)

reset: clean stop clean_deploy

