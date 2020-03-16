SOURCE_DIR=src
SOURCE_CLASSES=$(SOURCE_DIR)/classes

BUILD_DIR=build
BUILD_CLASSES=$(BUILD_DIR)/classes

DEPLOY_DIR=$(CATALINA_HOME)/webapps/bsu/WEB-INF

ALL_SOURCES=$(notdir $(basename $(wildcard $(SOURCE_CLASSES)/*.java)))
ALL_TARGETS=$(addsuffix .class, $(addprefix $(BUILD_CLASSES)/, $(ALL_SOURCES)))

run: deploy
	$(CATALINA_HOME)/bin/shutdown.sh
	$(CATALINA_HOME)/bin/startup.sh

deploy: $(BUILD_DIR)/web.xml $(ALL_TARGETS) | $(DEPLOY_DIR) $(BUILD_DIR)
	cp $(BUILD_DIR)/. $(DEPLOY_DIR) -r

$(BUILD_DIR)/web.xml: $(SOURCE_DIR)/web.xml | $(BUILD_DIR)
	cp $< $(BUILD_DIR)

$(BUILD_CLASSES)/%.class: $(SOURCE_CLASSES)/%.java | $(BUILD_CLASSES)
	javac -d $(BUILD_DIR)/classes $<

$(BUILD_DIR):
	mkdir $@

$(BUILD_CLASSES): $(BUILD_DIR)
	mkdir $@

$(DEPLOY_DIR):
	mkdir $@ -p

clean:
	rm -rf $(BUILD_DIR)

