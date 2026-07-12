/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "0-75-cup-1-nlea-serving",
  "description": "Breakfast Cereals",
  "id": "usda-sr-legacy-174653",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 52.0,
      "key": "0-75-cup-1-nlea-serving",
      "kind": "unit",
      "label": "0.75 cup (1 NLEA serving)"
    }
  ],
  "name": "Cereals ready-to-eat, POST SELECTS Maple Pecan Crunch",
  "nutritionPerBasis": {
    "calcium_mg": 39.0,
    "carbs_g": 77.4,
    "energy_kcal": 1730.0,
    "fat_g": 8.7,
    "fibre_g": 7.4,
    "folate_ug": 192.0,
    "iron_mg": 3.5,
    "magnesium_mg": 85.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 259.0,
    "potassium_mg": 274.0,
    "protein_g": 8.5,
    "salt_g": 0.5975,
    "sat_fat_g": 1.0,
    "sodium_mg": 239.0,
    "sugar_g": 22.5,
    "vitamin_a_ug": 431.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.99,
    "vitamin_k_ug": 3.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174653",
  "state": "Ready-to-eat",
  "subcategory": "Breakfast Cereals",
  "tags": [
    "breakfast-cereals",
    "nuts-and-seeds",
    "ready-to-eat"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
