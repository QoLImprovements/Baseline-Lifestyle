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
  "id": "usda-sr-legacy-171710",
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
      "gramsPerUnit": 151.0,
      "key": "cup-unthawed",
      "kind": "unit",
      "label": "cup, unthawed"
    }
  ],
  "name": "Blackberries, frozen, unsweetened",
  "nutritionPerBasis": {
    "calcium_mg": 29.0,
    "carbs_g": 15.7,
    "energy_kcal": 64.0,
    "fat_g": 0.43,
    "fibre_g": 5.0,
    "folate_ug": 34.0,
    "iron_mg": 0.8,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 30.0,
    "potassium_mg": 140.0,
    "protein_g": 1.18,
    "salt_g": 0.0025,
    "sat_fat_g": 0.015,
    "sodium_mg": 1.0,
    "sugar_g": 10.7,
    "vitamin_a_ug": 6.0,
    "vitamin_c_mg": 3.1,
    "vitamin_e_mg": 1.17,
    "vitamin_k_ug": 19.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171710",
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
