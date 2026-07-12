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
  "id": "usda-sr-legacy-168173",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 149.0,
      "key": "cup-unthawed",
      "kind": "unit",
      "label": "cup, unthawed"
    },
    {
      "gramsPerUnit": 221.0,
      "key": "cup-thawed",
      "kind": "unit",
      "label": "cup, thawed"
    },
    {
      "gramsPerUnit": 10.6,
      "key": "berry",
      "kind": "unit",
      "label": "berry"
    },
    {
      "gramsPerUnit": 567.0,
      "key": "package-20-oz",
      "kind": "unit",
      "label": "package (20 oz)"
    }
  ],
  "name": "Strawberries, frozen, unsweetened (Includes foods for USDA's Food Distribution Program)",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 9.13,
    "energy_kcal": 146.0,
    "fat_g": 0.11,
    "fibre_g": 2.1,
    "folate_ug": 17.0,
    "iron_mg": 0.75,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 13.0,
    "potassium_mg": 148.0,
    "protein_g": 0.43,
    "salt_g": 0.005,
    "sat_fat_g": 0.006,
    "sodium_mg": 2.0,
    "sugar_g": 4.56,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 41.2,
    "vitamin_e_mg": 0.29,
    "vitamin_k_ug": 2.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168173",
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
