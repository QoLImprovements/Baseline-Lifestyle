/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "1-bar",
  "description": "Nutrition bars",
  "id": "usda-fndds-2708126",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "1-bar",
      "kind": "unit",
      "label": "1 bar"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "1-snack-size-bar",
      "kind": "unit",
      "label": "1 snack size bar"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Nutrition bar (Zone Perfect Classic Crunch)",
  "nutritionPerBasis": {
    "calcium_mg": 200.0,
    "carbs_g": 45.0,
    "energy_kcal": 426.0,
    "fat_g": 14.0,
    "fibre_g": 2.0,
    "folate_ug": 160.0,
    "iron_mg": 3.6,
    "magnesium_mg": 80.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 300.0,
    "potassium_mg": 250.0,
    "protein_g": 30.0,
    "salt_g": 1.11,
    "sat_fat_g": 4.5,
    "sodium_mg": 444.0,
    "sugar_g": 27.0,
    "vitamin_a_ug": 1050.0,
    "vitamin_c_mg": 120.0,
    "vitamin_e_mg": 24.0,
    "vitamin_k_ug": 1.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708126",
  "state": "Unspecified",
  "subcategory": "Nutrition bars",
  "tags": [
    "nutrition-bars",
    "nuts-and-seeds",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
