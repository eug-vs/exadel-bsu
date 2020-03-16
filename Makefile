PROJECT_NAME=bsu

SOURCE_DIR=src
SOURCE_CLASSES_DIR=$(SOURCE_DIR)/classes

BUILD_DIR=build
BUILD_CLASSES_DIR=$(BUILD_DIR)/classes

DEPLOY_DIR=$(CATALINA_HOME)/webapps/$(PROJECT_NAME)/WEB-INF

ALL_SOURCES=$(notdir $(basename $(wildcard $(SOURCE_CLASSES_DIR)/*.java)))
ALL_TARGETS=$(addsuffix .class, $(addprefix $(BUILD_CLASSES_DIR)/, $(ALL_SOURCES)))

run: deploy
	@echo "Restarting tomcat..."
	@$(CATALINA_HOME)/bin/shutdown.sh > /dev/null
	@$(CATALINA_HOME)/bin/startup.sh
	@echo "Server is running at http://localhost:8080/$(PROJECT_NAME)"

deploy: $(BUILD_DIR)/web.xml $(ALL_TARGETS) | $(DEPLOY_DIR) $(BUILD_DIR)
	cp $(BUILD_DIR)/. $(DEPLOY_DIR) -r

$(BUILD_DIR)/web.xml: $(SOURCE_DIR)/web.xml | $(BUILD_DIR)
	cp $< $(BUILD_DIR)

$(BUILD_CLASSES_DIR)/%.class: $(SOURCE_CLASSES_DIR)/%.java | $(BUILD_CLASSES_DIR)
	javac -d $(BUILD_DIR)/classes $<

$(BUILD_DIR):
	mkdir $@

$(BUILD_CLASSES_DIR): $(BUILD_DIR)
	mkdir $@

$(DEPLOY_DIR):
	mkdir $@ -p

clean:
	rm -rf $(BUILD_DIR)

clean_deploy:
	rm -rf $(DEPLOY_DIR)

