/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "cup-1-nlea-serving",
  "description": "Breakfast Cereals",
  "id": "usda-sr-legacy-174645",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 33.0,
      "key": "cup-1-nlea-serving",
      "kind": "unit",
      "label": "cup (1 NLEA serving)"
    }
  ],
  "name": "Cereals ready-to-eat, MALT-O-MEAL, Apple ZINGS",
  "nutritionPerBasis": {
    "calcium_mg": 303.0,
    "carbs_g": 87.3,
    "energy_kcal": 390.0,
    "fat_g": 2.71,
    "fibre_g": 2.3,
    "folate_ug": 606.0,
    "iron_mg": 27.3,
    "magnesium_mg": 24.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 61.0,
    "potassium_mg": 96.0,
    "protein_g": 4.51,
    "salt_g": 1.135,
    "sat_fat_g": 0.73,
    "sodium_mg": 454.0,
    "sugar_g": 44.6,
    "vitamin_a_ug": 1520.0,
    "vitamin_c_mg": 18.2,
    "vitamin_e_mg": 0.03,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174645",
  "state": "Ready-to-eat",
  "subcategory": "Breakfast Cereals",
  "tags": [
    "breakfast-cereals",
    "fruit",
    "ready-to-eat"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
