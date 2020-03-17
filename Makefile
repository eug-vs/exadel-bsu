# Makefile to build and deploy Java Web App to Apache Tomcat server
PROJECT_NAME=bsu

# Directories
SOURCE_DIR=src
WEB_DIR=web
BUILD_DIR=build
CLASSES_DIR=$(BUILD_DIR)/WEB-INF/classes
DEPLOY_DIR=$(CATALINA_HOME)/webapps

# Targets
ALL_SOURCES=$(notdir $(basename $(wildcard $(SOURCE_DIR)/*.java)))
ALL_TARGETS=$(addsuffix .class, $(addprefix $(CLASSES_DIR)/, $(ALL_SOURCES)))
HTML=$(addprefix $(BUILD_DIR)/, $(notdir $(wildcard $(WEB_DIR)/*.html)))
CSS=$(addprefix $(BUILD_DIR)/css/, $(notdir $(wildcard $(WEB_DIR)/css/*.css)))
JS=$(addprefix $(BUILD_DIR)/js/, $(notdir $(wildcard $(WEB_DIR)/js/*.js)))
ASSETS=$(addprefix $(BUILD_DIR)/assets/, $(notdir $(wildcard $(WEB_DIR)/assets/*)))
ALL_STATIC=$(HTML) $(CSS) $(JS) $(ASSETS)

.PHONY: clean clean_deploy stop reset

run: deploy
	@echo "Restarting tomcat..."
	@$(CATALINA_HOME)/bin/shutdown.sh > /dev/null 2>&1
	@sleep 1.5
	@$(CATALINA_HOME)/bin/startup.sh
	@echo "Server is running at http://localhost:8080/$(PROJECT_NAME)"

deploy: assemble | $(DEPLOY_DIR) $(BUILD_DIR)
	@cd $(BUILD_DIR) && jar -cf $(DEPLOY_DIR)/$(PROJECT_NAME).war .
	@echo Project deployed to Tomcat: $(DEPLOY_DIR)/$(PROJECT_NAME).war

assemble: $(ALL_STATIC) $(BUILD_DIR)/WEB-INF/web.xml $(ALL_TARGETS)

$(BUILD_DIR)/%.html: $(WEB_DIR)/%.html | $(BUILD_DIR)
	cp $< $(BUILD_DIR)

$(BUILD_DIR)/css/%.css: $(WEB_DIR)/css/%.css | $(BUILD_DIR)
	cp $< $(BUILD_DIR)/css

$(BUILD_DIR)/js/%.js: $(WEB_DIR)/js/%.js | $(BUILD_DIR)
	cp $< $(BUILD_DIR)/js

$(BUILD_DIR)/assets/%: $(WEB_DIR)/assets/% | $(BUILD_DIR)
	cp $< $(BUILD_DIR)/assets

$(BUILD_DIR)/WEB-INF/web.xml: $(WEB_DIR)/WEB-INF/web.xml | $(BUILD_DIR)
	cp $< $(BUILD_DIR)/WEB-INF/

$(CLASSES_DIR)/%.class: $(SOURCE_DIR)/%.java | $(BUILD_DIR)
	javac -d $(CLASSES_DIR) $<

$(BUILD_DIR):
	mkdir $(BUILD_DIR)/WEB-INF/classes/ -p
	mkdir $(BUILD_DIR)/css
	mkdir $(BUILD_DIR)/js
	mkdir $(BUILD_DIR)/assets

$(DEPLOY_DIR):
	mkdir $@ -p

stop:
	@$(CATALINA_HOME)/bin/shutdown.sh 2> /dev/null
	@echo "Tomcat server is stopped."

clean:
	rm -rf $(BUILD_DIR)

clean_deploy: stop
	rm -rf $(DEPLOY_DIR)/$(PROJECT_NAME)
	rm -f $(DEPLOY_DIR)/$(PROJECT_NAME).war

reset: clean clean_deploy

