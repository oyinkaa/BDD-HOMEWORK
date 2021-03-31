$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Open_Account.feature");
formatter.feature({
  "line": 2,
  "name": "Open a new account using scenario outline",
  "description": "",
  "id": "open-a-new-account-using-scenario-outline",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@NewAccount"
    },
    {
      "line": 1,
      "name": "@Smoke"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "User should be able to open a new account",
  "description": "",
  "id": "open-a-new-account-using-scenario-outline;user-should-be-able-to-open-a-new-account",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User clicks on SignIn button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User click on Bank and Cash",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User clicks on new Account",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User enters new Account details \"\u003caccountTitle\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User enters additional Account details \"\u003cdescription\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User enters initial balance \"\u003cinitial balance\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User enters account number \"\u003caccount number\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User enters contact person \"\u003ccontact person\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "User enters phone \"\u003cphone\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User enters url \"\u003curl\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "user clicks submit button",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "open-a-new-account-using-scenario-outline;user-should-be-able-to-open-a-new-account;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "accountTitle",
        "description",
        "initial balance",
        "account number",
        "contact person",
        "phone",
        "url"
      ],
      "line": 19,
      "id": "open-a-new-account-using-scenario-outline;user-should-be-able-to-open-a-new-account;;1"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123",
        "checkings",
        "for grocery",
        "459",
        "09998769",
        "Mr Yinkaa",
        "7809578686",
        "www.bmo.com"
      ],
      "line": 20,
      "id": "open-a-new-account-using-scenario-outline;user-should-be-able-to-open-a-new-account;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4355303116,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "User should be able to open a new account",
  "description": "",
  "id": "open-a-new-account-using-scenario-outline;user-should-be-able-to-open-a-new-account;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Smoke"
    },
    {
      "line": 1,
      "name": "@NewAccount"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User enters \"demo@techfios.com\" and \"abc123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User clicks on SignIn button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User click on Bank and Cash",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User clicks on new Account",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User enters new Account details \"checkings\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User enters additional Account details \"for grocery\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User enters initial balance \"459\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User enters account number \"09998769\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User enters contact person \"Mr Yinkaa\"",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "User enters phone \"7809578686\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User enters url \"www.bmo.com\"",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "user clicks submit button",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 13
    },
    {
      "val": "abc123",
      "offset": 37
    }
  ],
  "location": "LoginStepDefinitios.User_enters_and(String,String)"
});
formatter.result({
  "duration": 359376668,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitios.user_clicks_on_SignIn_button()"
});
formatter.result({
  "duration": 1732555961,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitios.user_should_land_on_Dashboard_page()"
});
formatter.result({
  "duration": 16376,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitios.user_click_on_Bank_and_Cash()"
});
formatter.result({
  "duration": 2302312273,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitios.user_clicks_on_new_Account()"
});
formatter.result({
  "duration": 598464397,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "checkings",
      "offset": 33
    }
  ],
  "location": "LoginStepDefinitios.user_enters_additional_Account_details(String)"
});
formatter.result({
  "duration": 704365426,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "for grocery",
      "offset": 40
    }
  ],
  "location": "LoginStepDefinitios.user_enters_description(String)"
});
formatter.result({
  "duration": 84873418,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "459",
      "offset": 29
    }
  ],
  "location": "LoginStepDefinitios.user_enters_initial_balance(String)"
});
formatter.result({
  "duration": 134564842,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "09998769",
      "offset": 28
    }
  ],
  "location": "LoginStepDefinitios.user_enters_account_number(String)"
});
formatter.result({
  "duration": 123811880,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mr Yinkaa",
      "offset": 28
    }
  ],
  "location": "LoginStepDefinitios.user_enters_contact_person(String)"
});
formatter.result({
  "duration": 83973271,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7809578686",
      "offset": 19
    }
  ],
  "location": "LoginStepDefinitios.user_enters_phone(String)"
});
formatter.result({
  "duration": 75735453,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "www.bmo.com",
      "offset": 17
    }
  ],
  "location": "LoginStepDefinitios.user_enters_url(String)"
});
formatter.result({
  "duration": 90688264,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitios.user_clicks_submit_button(String)"
});
formatter.result({
  "duration": 299961,
  "error_message": "cucumber.runtime.CucumberException: Arity mismatch: Step Definition \u0027steps.LoginStepDefinitios.user_clicks_submit_button(String) in file:/Users/olayinkaogunbanwo/eclipse-workspace%20NEW1/BDD/target/test-classes/\u0027 with pattern [^user clicks submit button$] is declared with 1 parameters. However, the gherkin step has 0 arguments []. \nStep: Then user clicks submit button\n\tat cucumber.runtime.StepDefinitionMatch.arityMismatch(StepDefinitionMatch.java:102)\n\tat cucumber.runtime.StepDefinitionMatch.transformedArgs(StepDefinitionMatch.java:60)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:542)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:770)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:464)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\n",
  "status": "failed"
});
});