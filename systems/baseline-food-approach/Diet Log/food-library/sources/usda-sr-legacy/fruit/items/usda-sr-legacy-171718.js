/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "package-18-oz",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-171718",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 510.0,
      "key": "package-18-oz",
      "kind": "unit",
      "label": "package (18 oz)"
    },
    {
      "gramsPerUnit": 155.0,
      "key": "cup-unthawed",
      "kind": "unit",
      "label": "cup, unthawed"
    }
  ],
  "name": "Cherries, sour, red, frozen, unsweetened (Includes foods for USDA's Food Distribution Program)",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 11.0,
    "energy_kcal": 192.0,
    "fat_g": 0.44,
    "fibre_g": 1.6,
    "folate_ug": 5.0,
    "iron_mg": 0.53,
    "magnesium_mg": 9.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 16.0,
    "potassium_mg": 124.0,
    "protein_g": 0.92,
    "salt_g": 0.0025,
    "sat_fat_g": 0.1,
    "sodium_mg": 1.0,
    "sugar_g": 9.02,
    "vitamin_a_ug": 44.0,
    "vitamin_c_mg": 1.7,
    "vitamin_e_mg": 0.05,
    "vitamin_k_ug": 1.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171718",
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
