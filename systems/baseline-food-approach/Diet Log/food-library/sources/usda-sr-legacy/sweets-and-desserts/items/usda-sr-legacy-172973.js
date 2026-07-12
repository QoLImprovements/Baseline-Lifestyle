/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "cup",
  "description": "Breakfast Cereals",
  "id": "usda-sr-legacy-172973",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Cereals ready-to-eat, chocolate-flavored frosted puffed corn",
  "nutritionPerBasis": {
    "calcium_mg": 70.0,
    "carbs_g": 87.2,
    "energy_kcal": 1700.0,
    "fat_g": 3.5,
    "fibre_g": 3.8,
    "folate_ug": 353.0,
    "iron_mg": 15.9,
    "magnesium_mg": 36.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 141.0,
    "potassium_mg": 176.0,
    "protein_g": 3.34,
    "salt_g": 1.335,
    "sat_fat_g": 0.961,
    "sodium_mg": 534.0,
    "sugar_g": 43.7,
    "vitamin_a_ug": 1320.0,
    "vitamin_c_mg": 52.9,
    "vitamin_e_mg": 0.11,
    "vitamin_k_ug": 0.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172973",
  "state": "Ready-to-eat",
  "subcategory": "Breakfast Cereals",
  "tags": [
    "breakfast-cereals",
    "ready-to-eat",
    "sweets-and-desserts"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
