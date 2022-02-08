$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("uni/fmi/apply/apply.feature");
formatter.feature({
  "line": 1,
  "name": "Kindergarten application",
  "description": "",
  "id": "kindergarten-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Kindergarten application",
  "description": "",
  "id": "kindergarten-application;kindergarten-application",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Kid applies for kindergarten",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Entered kids name: \"\u003cKid name\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Has working parents: \"\u003cWorking parents\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "has disability: \"\u003cHas disability\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "has twin: \"\u003cHas twin\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "has sibling: \"\u003cHas sibling\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "clicks on the application button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "a message pops up: \"\u003cMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "kindergarten-application;kindergarten-application;",
  "rows": [
    {
      "cells": [
        "Kid name",
        "Working parents",
        "Has disability",
        "Has twin",
        "Has sibling",
        "Message"
      ],
      "line": 14,
      "id": "kindergarten-application;kindergarten-application;;1"
    },
    {
      "cells": [
        "Gencho",
        "2",
        "true",
        "true",
        "true",
        "Applied successfuly! Advantage points: 6"
      ],
      "line": 15,
      "id": "kindergarten-application;kindergarten-application;;2"
    },
    {
      "cells": [
        "Gencho",
        "1",
        "true",
        "true",
        "true",
        "Applied successfuly! Advantage points: 5"
      ],
      "line": 16,
      "id": "kindergarten-application;kindergarten-application;;3"
    },
    {
      "cells": [
        "Gencho",
        "0",
        "true",
        "true",
        "true",
        "Applied successfuly! Advantage points: 4"
      ],
      "line": 17,
      "id": "kindergarten-application;kindergarten-application;;4"
    },
    {
      "cells": [
        "",
        "2",
        "true",
        "true",
        "true",
        "Please enter name!"
      ],
      "line": 18,
      "id": "kindergarten-application;kindergarten-application;;5"
    },
    {
      "cells": [
        "Gencho",
        "1",
        "false",
        "true",
        "true",
        "Applied successfuly! Advantage points: 3"
      ],
      "line": 19,
      "id": "kindergarten-application;kindergarten-application;;6"
    },
    {
      "cells": [
        "Gencho",
        "0",
        "false",
        "false",
        "true",
        "Applied successfuly! Advantage points: 1"
      ],
      "line": 20,
      "id": "kindergarten-application;kindergarten-application;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "Kindergarten application",
  "description": "",
  "id": "kindergarten-application;kindergarten-application;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Kid applies for kindergarten",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Entered kids name: \"Gencho\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Has working parents: \"2\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "has disability: \"true\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "has twin: \"true\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "has sibling: \"true\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "clicks on the application button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "a message pops up: \"Applied successfuly! Advantage points: 6\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ApplySteps.applicationScreen()"
});
formatter.result({
  "duration": 161785400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gencho",
      "offset": 20
    }
  ],
  "location": "ApplySteps.addKidName(String)"
});
formatter.result({
  "duration": 1950400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 22
    }
  ],
  "location": "ApplySteps.addHasWorkingParents(int)"
});
formatter.result({
  "duration": 543900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 17
    }
  ],
  "location": "ApplySteps.addHasDisability(boolean)"
});
formatter.result({
  "duration": 162000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 11
    }
  ],
  "location": "ApplySteps.addHasTwin(boolean)"
});
formatter.result({
  "duration": 55800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 14
    }
  ],
  "location": "ApplySteps.addHasSibling(boolean)"
});
formatter.result({
  "duration": 207800,
  "status": "passed"
});
formatter.match({
  "location": "ApplySteps.clickApplicationButton()"
});
formatter.result({
  "duration": 1610800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Applied successfuly! Advantage points: 6",
      "offset": 20
    }
  ],
  "location": "ApplySteps.messagePopsUp(String)"
});
formatter.result({
  "duration": 2342000,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Kindergarten application",
  "description": "",
  "id": "kindergarten-application;kindergarten-application;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Kid applies for kindergarten",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Entered kids name: \"Gencho\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Has working parents: \"1\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "has disability: \"true\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "has twin: \"true\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "has sibling: \"true\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "clicks on the application button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "a message pops up: \"Applied successfuly! Advantage points: 5\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ApplySteps.applicationScreen()"
});
formatter.result({
  "duration": 98100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gencho",
      "offset": 20
    }
  ],
  "location": "ApplySteps.addKidName(String)"
});
formatter.result({
  "duration": 61300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 22
    }
  ],
  "location": "ApplySteps.addHasWorkingParents(int)"
});
formatter.result({
  "duration": 78000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 17
    }
  ],
  "location": "ApplySteps.addHasDisability(boolean)"
});
formatter.result({
  "duration": 67600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 11
    }
  ],
  "location": "ApplySteps.addHasTwin(boolean)"
});
formatter.result({
  "duration": 74900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 14
    }
  ],
  "location": "ApplySteps.addHasSibling(boolean)"
});
formatter.result({
  "duration": 75800,
  "status": "passed"
});
formatter.match({
  "location": "ApplySteps.clickApplicationButton()"
});
formatter.result({
  "duration": 119300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Applied successfuly! Advantage points: 5",
      "offset": 20
    }
  ],
  "location": "ApplySteps.messagePopsUp(String)"
});
formatter.result({
  "duration": 85000,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Kindergarten application",
  "description": "",
  "id": "kindergarten-application;kindergarten-application;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Kid applies for kindergarten",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Entered kids name: \"Gencho\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Has working parents: \"0\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "has disability: \"true\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "has twin: \"true\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "has sibling: \"true\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "clicks on the application button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "a message pops up: \"Applied successfuly! Advantage points: 4\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ApplySteps.applicationScreen()"
});
formatter.result({
  "duration": 63200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gencho",
      "offset": 20
    }
  ],
  "location": "ApplySteps.addKidName(String)"
});
formatter.result({
  "duration": 51200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 22
    }
  ],
  "location": "ApplySteps.addHasWorkingParents(int)"
});
formatter.result({
  "duration": 51500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 17
    }
  ],
  "location": "ApplySteps.addHasDisability(boolean)"
});
formatter.result({
  "duration": 50100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 11
    }
  ],
  "location": "ApplySteps.addHasTwin(boolean)"
});
formatter.result({
  "duration": 38900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 14
    }
  ],
  "location": "ApplySteps.addHasSibling(boolean)"
});
formatter.result({
  "duration": 33400,
  "status": "passed"
});
formatter.match({
  "location": "ApplySteps.clickApplicationButton()"
});
formatter.result({
  "duration": 25300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Applied successfuly! Advantage points: 4",
      "offset": 20
    }
  ],
  "location": "ApplySteps.messagePopsUp(String)"
});
formatter.result({
  "duration": 38800,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Kindergarten application",
  "description": "",
  "id": "kindergarten-application;kindergarten-application;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Kid applies for kindergarten",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Entered kids name: \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Has working parents: \"2\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "has disability: \"true\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "has twin: \"true\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "has sibling: \"true\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "clicks on the application button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "a message pops up: \"Please enter name!\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ApplySteps.applicationScreen()"
});
formatter.result({
  "duration": 59800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 20
    }
  ],
  "location": "ApplySteps.addKidName(String)"
});
formatter.result({
  "duration": 42100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 22
    }
  ],
  "location": "ApplySteps.addHasWorkingParents(int)"
});
formatter.result({
  "duration": 52300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 17
    }
  ],
  "location": "ApplySteps.addHasDisability(boolean)"
});
formatter.result({
  "duration": 49600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 11
    }
  ],
  "location": "ApplySteps.addHasTwin(boolean)"
});
formatter.result({
  "duration": 39500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 14
    }
  ],
  "location": "ApplySteps.addHasSibling(boolean)"
});
formatter.result({
  "duration": 31300,
  "status": "passed"
});
formatter.match({
  "location": "ApplySteps.clickApplicationButton()"
});
formatter.result({
  "duration": 21300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please enter name!",
      "offset": 20
    }
  ],
  "location": "ApplySteps.messagePopsUp(String)"
});
formatter.result({
  "duration": 32700,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Kindergarten application",
  "description": "",
  "id": "kindergarten-application;kindergarten-application;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Kid applies for kindergarten",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Entered kids name: \"Gencho\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Has working parents: \"1\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "has disability: \"false\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "has twin: \"true\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "has sibling: \"true\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "clicks on the application button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "a message pops up: \"Applied successfuly! Advantage points: 3\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ApplySteps.applicationScreen()"
});
formatter.result({
  "duration": 60900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gencho",
      "offset": 20
    }
  ],
  "location": "ApplySteps.addKidName(String)"
});
formatter.result({
  "duration": 37500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 22
    }
  ],
  "location": "ApplySteps.addHasWorkingParents(int)"
});
formatter.result({
  "duration": 55900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "false",
      "offset": 17
    }
  ],
  "location": "ApplySteps.addHasDisability(boolean)"
});
formatter.result({
  "duration": 38000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 11
    }
  ],
  "location": "ApplySteps.addHasTwin(boolean)"
});
formatter.result({
  "duration": 41200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 14
    }
  ],
  "location": "ApplySteps.addHasSibling(boolean)"
});
formatter.result({
  "duration": 34100,
  "status": "passed"
});
formatter.match({
  "location": "ApplySteps.clickApplicationButton()"
});
formatter.result({
  "duration": 23400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Applied successfuly! Advantage points: 3",
      "offset": 20
    }
  ],
  "location": "ApplySteps.messagePopsUp(String)"
});
formatter.result({
  "duration": 33500,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Kindergarten application",
  "description": "",
  "id": "kindergarten-application;kindergarten-application;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Kid applies for kindergarten",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Entered kids name: \"Gencho\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Has working parents: \"0\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "has disability: \"false\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "has twin: \"false\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "has sibling: \"true\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "clicks on the application button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "a message pops up: \"Applied successfuly! Advantage points: 1\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ApplySteps.applicationScreen()"
});
formatter.result({
  "duration": 85800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gencho",
      "offset": 20
    }
  ],
  "location": "ApplySteps.addKidName(String)"
});
formatter.result({
  "duration": 57200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 22
    }
  ],
  "location": "ApplySteps.addHasWorkingParents(int)"
});
formatter.result({
  "duration": 56100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "false",
      "offset": 17
    }
  ],
  "location": "ApplySteps.addHasDisability(boolean)"
});
formatter.result({
  "duration": 79900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "false",
      "offset": 11
    }
  ],
  "location": "ApplySteps.addHasTwin(boolean)"
});
formatter.result({
  "duration": 43600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 14
    }
  ],
  "location": "ApplySteps.addHasSibling(boolean)"
});
formatter.result({
  "duration": 63400,
  "status": "passed"
});
formatter.match({
  "location": "ApplySteps.clickApplicationButton()"
});
formatter.result({
  "duration": 48800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Applied successfuly! Advantage points: 1",
      "offset": 20
    }
  ],
  "location": "ApplySteps.messagePopsUp(String)"
});
formatter.result({
  "duration": 70000,
  "status": "passed"
});
});