/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "3-oz",
  "description": "Pork Products",
  "id": "usda-sr-legacy-168278",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    },
    {
      "gramsPerUnit": 340.0,
      "key": "package-12-oz",
      "kind": "unit",
      "label": "package (12 oz)"
    },
    {
      "gramsPerUnit": 68.0,
      "key": "3-slices",
      "kind": "unit",
      "label": "3 slices"
    }
  ],
  "name": "Pork, cured, breakfast strips, raw or unheated",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 0.7,
    "energy_kcal": 1620.0,
    "fat_g": 37.2,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 0.94,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 137.0,
    "potassium_mg": 204.0,
    "protein_g": 11.7,
    "salt_g": 2.4675,
    "sat_fat_g": 12.9,
    "sodium_mg": 987.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 27.2,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168278",
  "state": "Raw",
  "subcategory": "Pork Products",
  "tags": [
    "meat-and-poultry",
    "pork-products",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
