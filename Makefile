PROJECT_NAME=bsu

SOURCE_DIR=src
SOURCE_CLASSES_DIR=$(SOURCE_DIR)/classes

BUILD_DIR=build
BUILD_CLASSES_DIR=$(BUILD_DIR)/WEB-INF/classes

DEPLOY_DIR=$(CATALINA_HOME)/webapps/$(PROJECT_NAME)

ALL_SOURCES=$(notdir $(basename $(wildcard $(SOURCE_CLASSES_DIR)/*.java)))
ALL_TARGETS=$(addsuffix .class, $(addprefix $(BUILD_CLASSES_DIR)/, $(ALL_SOURCES)))
ALL_STATIC=$(addprefix $(BUILD_DIR)/, $(notdir $(wildcard $(SOURCE_DIR)/*.html)))

run: deploy
	@echo "Restarting tomcat..."
	@$(CATALINA_HOME)/bin/shutdown.sh > /dev/null
	@sleep 1.5
	@$(CATALINA_HOME)/bin/startup.sh
	@echo "Server is running at http://localhost:8080/$(PROJECT_NAME)"

deploy: $(BUILD_DIR)/WEB-INF/web.xml $(ALL_STATIC) $(ALL_TARGETS) | $(DEPLOY_DIR) $(BUILD_DIR)
	cp $(BUILD_DIR)/. $(DEPLOY_DIR) -r

$(BUILD_DIR)/WEB-INF/web.xml: $(SOURCE_DIR)/web.xml | $(BUILD_DIR)
	cp $< $(BUILD_DIR)/WEB-INF/

$(BUILD_DIR)/%.html: $(SOURCE_DIR)/%.html | $(BUILD_DIR)
	cp $< $(BUILD_DIR)

$(BUILD_CLASSES_DIR)/%.class: $(SOURCE_CLASSES_DIR)/%.java | $(BUILD_DIR)
	javac -d $(BUILD_CLASSES_DIR) $<

$(BUILD_DIR):
	mkdir $(BUILD_DIR)/WEB-INF/classes/ -p

$(BUILD_CLASSES_DIR): $(BUILD_DIR)

$(DEPLOY_DIR):
	mkdir $@ -p

clean:
	rm -rf $(BUILD_DIR)

clean_deploy:
	rm -rf $(DEPLOY_DIR)

