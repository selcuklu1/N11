$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LoginProfile.feature");
formatter.feature({
  "line": 2,
  "name": "Login Profile",
  "description": "As an employee of the company\r\nI want to login my employee profile using my credentials\r\nIn order to collaborate with my colleagues",
  "id": "login-profile",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@LoginProfile"
    }
  ]
});
formatter.background({
  "line": 7,
  "name": "User navigates to Company home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I am on the \"Company home\" page on URL \"www.mycomany.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I should see \"Log In as Employee\" message",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 11,
  "name": "Successful login",
  "description": "",
  "id": "login-profile;successful-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "I fill in \"Username\" with \"Test\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I fill in \"Password\" with \"123\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on the \"Log In\" button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I am on the \"My profile\" page on URL \"www.mycompany.com/myprofile\"",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I should see \"Welcome to your profile\" message",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see the \"Log out\" button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenarioOutline({
  "line": 19,
  "name": "Failed login using wrong credentials",
  "description": "",
  "id": "login-profile;failed-login-using-wrong-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "I fill in \"Username\" with \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I fill in \"Password\" with \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on the \"Login\" button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I should see \"\u003cwarning\u003e\" message",
  "keyword": "And "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "login-profile;failed-login-using-wrong-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "warning"
      ],
      "line": 25,
      "id": "login-profile;failed-login-using-wrong-credentials;;1"
    },
    {
      "cells": [
        "Test",
        "!23",
        "Incorrect credentials. Try again!"
      ],
      "line": 26,
      "id": "login-profile;failed-login-using-wrong-credentials;;2"
    },
    {
      "cells": [
        "Tset",
        "123",
        "Incorrect credentials. Try again!"
      ],
      "line": 27,
      "id": "login-profile;failed-login-using-wrong-credentials;;3"
    },
    {
      "cells": [
        "Tset",
        "!23",
        "Incorrect credentials. Try again!"
      ],
      "line": 28,
      "id": "login-profile;failed-login-using-wrong-credentials;;4"
    },
    {
      "cells": [
        "Test",
        "",
        "Please enter password."
      ],
      "line": 29,
      "id": "login-profile;failed-login-using-wrong-credentials;;5"
    },
    {
      "cells": [
        "",
        "123",
        "Please enter username."
      ],
      "line": 30,
      "id": "login-profile;failed-login-using-wrong-credentials;;6"
    },
    {
      "cells": [
        "",
        "",
        "Please enter your credentials."
      ],
      "line": 31,
      "id": "login-profile;failed-login-using-wrong-credentials;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 7,
  "name": "User navigates to Company home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I am on the \"Company home\" page on URL \"www.mycomany.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I should see \"Log In as Employee\" message",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 26,
  "name": "Failed login using wrong credentials",
  "description": "",
  "id": "login-profile;failed-login-using-wrong-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@LoginProfile"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I fill in \"Username\" with \"Test\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I fill in \"Password\" with \"!23\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on the \"Login\" button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I should see \"Incorrect credentials. Try again!\" message",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "line": 7,
  "name": "User navigates to Company home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I am on the \"Company home\" page on URL \"www.mycomany.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I should see \"Log In as Employee\" message",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 27,
  "name": "Failed login using wrong credentials",
  "description": "",
  "id": "login-profile;failed-login-using-wrong-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@LoginProfile"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I fill in \"Username\" with \"Tset\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I fill in \"Password\" with \"123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on the \"Login\" button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I should see \"Incorrect credentials. Try again!\" message",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "line": 7,
  "name": "User navigates to Company home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I am on the \"Company home\" page on URL \"www.mycomany.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I should see \"Log In as Employee\" message",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 28,
  "name": "Failed login using wrong credentials",
  "description": "",
  "id": "login-profile;failed-login-using-wrong-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@LoginProfile"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I fill in \"Username\" with \"Tset\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I fill in \"Password\" with \"!23\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on the \"Login\" button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I should see \"Incorrect credentials. Try again!\" message",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "line": 7,
  "name": "User navigates to Company home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I am on the \"Company home\" page on URL \"www.mycomany.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I should see \"Log In as Employee\" message",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 29,
  "name": "Failed login using wrong credentials",
  "description": "",
  "id": "login-profile;failed-login-using-wrong-credentials;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@LoginProfile"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I fill in \"Username\" with \"Test\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I fill in \"Password\" with \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on the \"Login\" button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I should see \"Please enter password.\" message",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "line": 7,
  "name": "User navigates to Company home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I am on the \"Company home\" page on URL \"www.mycomany.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I should see \"Log In as Employee\" message",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 30,
  "name": "Failed login using wrong credentials",
  "description": "",
  "id": "login-profile;failed-login-using-wrong-credentials;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@LoginProfile"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I fill in \"Username\" with \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I fill in \"Password\" with \"123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on the \"Login\" button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I should see \"Please enter username.\" message",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "line": 7,
  "name": "User navigates to Company home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I am on the \"Company home\" page on URL \"www.mycomany.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I should see \"Log In as Employee\" message",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 31,
  "name": "Failed login using wrong credentials",
  "description": "",
  "id": "login-profile;failed-login-using-wrong-credentials;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@LoginProfile"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I fill in \"Username\" with \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I fill in \"Password\" with \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on the \"Login\" button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I should see \"Please enter your credentials.\" message",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("UpdateProfile.feature");
formatter.feature({
  "line": 2,
  "name": "Update Profile",
  "description": "As an employee of the company\r\nI want to be able to update my name, projects, email, and phone numbers on my profile\r\nIn order to share my contact information with my colleagues",
  "id": "update-profile",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@UpdateProfile"
    }
  ]
});
formatter.background({
  "line": 7,
  "name": "User logs in to profile",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I am on the \"Company home\" page on URL \"www.mycomany.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I fill in \"Username\" with \"Test\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I fill in \"Password\" with \"123\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on the \"Log In\" button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I am on the \"My profile\" page on URL \"www.mycompany.com/myprofile\"",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I should see \"Welcome to your profile\" message",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the \"Log out\" button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 16,
  "name": "Update name",
  "description": "",
  "id": "update-profile;update-name",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "I click on the \"Edit Personal Info\" button",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I fill in \"Your name\" with \"Thilina Ashen Gamage\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on the \"Save Changes\" button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I should see \"Your personal info has been successfully updated\" message",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenarioOutline({
  "line": 22,
  "name": "Add new projects",
  "description": "",
  "id": "update-profile;add-new-projects",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "I click on the \"Add Project\" button",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I fill in \"Project Name\" with \"\u003cproject\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I fill in \"Duration\" with \"\u003cduration\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I fill in \"Description\" with \"\u003cdescription\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on the \"Save Changes\" button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I should see \"Your personal info has been successfully updated\" message",
  "keyword": "Then "
});
formatter.examples({
  "line": 29,
  "name": "",
  "description": "",
  "id": "update-profile;add-new-projects;",
  "rows": [
    {
      "cells": [
        "project",
        "duration",
        "description"
      ],
      "line": 30,
      "id": "update-profile;add-new-projects;;1"
    },
    {
      "cells": [
        "Z-Mob",
        "3 months",
        "QA"
      ],
      "line": 31,
      "id": "update-profile;add-new-projects;;2"
    },
    {
      "cells": [
        "WJ5-Web UI",
        "1 month",
        "UI Testing"
      ],
      "line": 32,
      "id": "update-profile;add-new-projects;;3"
    },
    {
      "cells": [
        "Q-Med",
        "5 months",
        "UI Testing"
      ],
      "line": 33,
      "id": "update-profile;add-new-projects;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 7,
  "name": "User logs in to profile",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I am on the \"Company home\" page on URL \"www.mycomany.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I fill in \"Username\" with \"Test\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I fill in \"Password\" with \"123\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on the \"Log In\" button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I am on the \"My profile\" page on URL \"www.mycompany.com/myprofile\"",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I should see \"Welcome to your profile\" message",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the \"Log out\" button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 31,
  "name": "Add new projects",
  "description": "",
  "id": "update-profile;add-new-projects;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@UpdateProfile"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "I click on the \"Add Project\" button",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I fill in \"Project Name\" with \"Z-Mob\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I fill in \"Duration\" with \"3 months\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I fill in \"Description\" with \"QA\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on the \"Save Changes\" button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I should see \"Your personal info has been successfully updated\" message",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "line": 7,
  "name": "User logs in to profile",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I am on the \"Company home\" page on URL \"www.mycomany.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I fill in \"Username\" with \"Test\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I fill in \"Password\" with \"123\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on the \"Log In\" button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I am on the \"My profile\" page on URL \"www.mycompany.com/myprofile\"",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I should see \"Welcome to your profile\" message",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the \"Log out\" button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 32,
  "name": "Add new projects",
  "description": "",
  "id": "update-profile;add-new-projects;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@UpdateProfile"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "I click on the \"Add Project\" button",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I fill in \"Project Name\" with \"WJ5-Web UI\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I fill in \"Duration\" with \"1 month\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I fill in \"Description\" with \"UI Testing\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on the \"Save Changes\" button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I should see \"Your personal info has been successfully updated\" message",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "line": 7,
  "name": "User logs in to profile",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I am on the \"Company home\" page on URL \"www.mycomany.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I fill in \"Username\" with \"Test\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I fill in \"Password\" with \"123\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on the \"Log In\" button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I am on the \"My profile\" page on URL \"www.mycompany.com/myprofile\"",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I should see \"Welcome to your profile\" message",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the \"Log out\" button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 33,
  "name": "Add new projects",
  "description": "",
  "id": "update-profile;add-new-projects;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@UpdateProfile"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "I click on the \"Add Project\" button",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I fill in \"Project Name\" with \"Q-Med\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I fill in \"Duration\" with \"5 months\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I fill in \"Description\" with \"UI Testing\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on the \"Save Changes\" button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I should see \"Your personal info has been successfully updated\" message",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});