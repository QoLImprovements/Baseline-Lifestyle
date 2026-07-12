/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "package-20-oz",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-173950",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 567.0,
      "key": "package-20-oz",
      "kind": "unit",
      "label": "package (20 oz)"
    },
    {
      "gramsPerUnit": 155.0,
      "key": "cup-unthawed",
      "kind": "unit",
      "label": "cup, unthawed"
    }
  ],
  "name": "Blueberries, frozen, unsweetened (Includes foods for USDA's Food Distribution Program)",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 12.2,
    "energy_kcal": 51.0,
    "fat_g": 0.64,
    "fibre_g": 2.7,
    "folate_ug": 7.0,
    "iron_mg": 0.18,
    "magnesium_mg": 5.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 11.0,
    "potassium_mg": 54.0,
    "protein_g": 0.42,
    "salt_g": 0.0025,
    "sat_fat_g": 0.053,
    "sodium_mg": 1.0,
    "sugar_g": 8.45,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 2.5,
    "vitamin_e_mg": 0.48,
    "vitamin_k_ug": 16.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173950",
  "state": "Frozen",
  "subcategory": "Fruits and Fruit Juices",
  "tags": [
    "frozen",
    "fruit",
    "fruits-and-fruit-juices"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
