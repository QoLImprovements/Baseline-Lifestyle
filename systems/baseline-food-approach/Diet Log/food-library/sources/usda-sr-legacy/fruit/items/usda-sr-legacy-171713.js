/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "cup-unthawed",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-171713",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 132.0,
      "key": "cup-unthawed",
      "kind": "unit",
      "label": "cup, unthawed"
    },
    {
      "gramsPerUnit": 284.0,
      "key": "package-10-oz",
      "kind": "unit",
      "label": "package (10 oz)"
    }
  ],
  "name": "Boysenberries, frozen, unsweetened",
  "nutritionPerBasis": {
    "calcium_mg": 27.0,
    "carbs_g": 12.2,
    "energy_kcal": 209.0,
    "fat_g": 0.26,
    "fibre_g": 5.3,
    "folate_ug": 63.0,
    "iron_mg": 0.85,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 27.0,
    "potassium_mg": 139.0,
    "protein_g": 1.1,
    "salt_g": 0.0025,
    "sat_fat_g": 0.009,
    "sodium_mg": 1.0,
    "sugar_g": 6.89,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 3.1,
    "vitamin_e_mg": 0.87,
    "vitamin_k_ug": 7.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171713",
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
