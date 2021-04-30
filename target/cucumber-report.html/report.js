$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("result.feature");
formatter.feature({
  "line": 2,
  "name": "User able to select filtered product",
  "description": "",
  "id": "user-able-to-select-filtered-product",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@result"
    }
  ]
});
formatter.before({
  "duration": 6410517392,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User will select filtered product and verifying the added product in trolley or not",
  "description": "",
  "id": "user-able-to-select-filtered-product;user-will-select-filtered-product-and-verifying-the-added-product-in-trolley-or-not",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User is on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User selected \"women\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User selected \"Jewellery and watches\" in category",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User selected \"£10 - £15\" in price",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User selected \"Moon \u0026 Back\" in brands",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Add filtered Product to basket",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Verify the product in trolley",
  "keyword": "Then "
});
formatter.match({
  "location": "HomepageStepDef.userIsOnHomepage()"
});
formatter.result({
  "duration": 103227360,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "women",
      "offset": 15
    }
  ],
  "location": "HomepageStepDef.userSelected(String)"
});
formatter.result({
  "duration": 2124272223,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jewellery and watches",
      "offset": 15
    }
  ],
  "location": "ResultsStepDef.userSelectedInCategory(String)"
});
formatter.result({
  "duration": 4375944807,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "£10 - £15",
      "offset": 15
    }
  ],
  "location": "ResultsStepDef.userSelectedInPrice(String)"
});
formatter.result({
  "duration": 3246895555,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Moon \u0026 Back",
      "offset": 15
    }
  ],
  "location": "ResultsStepDef.userSelectedInBrands(String)"
});
formatter.result({
  "duration": 1201319446,
  "status": "passed"
});
formatter.match({
  "location": "ResultsStepDef.addFilteredProductToBasket()"
});
formatter.result({
  "duration": 15560857022,
  "status": "passed"
});
formatter.match({
  "location": "ResultsStepDef.verifyTheProductInTrolley()"
});
formatter.result({
  "duration": 237482759,
  "status": "passed"
});
formatter.after({
  "duration": 24484,
  "status": "passed"
});
});