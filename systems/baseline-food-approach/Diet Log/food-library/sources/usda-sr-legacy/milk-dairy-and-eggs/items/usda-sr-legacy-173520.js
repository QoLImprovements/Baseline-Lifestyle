/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "serving",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-173520",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 7.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "Babyfood, snack, GERBER, GRADUATES, YOGURT MELTS",
  "nutritionPerBasis": {
    "calcium_mg": 457.0,
    "carbs_g": 71.8,
    "energy_kcal": 1590.0,
    "fat_g": 4.0,
    "fibre_g": 2.3,
    "folate_ug": 55.0,
    "iron_mg": 0.0,
    "magnesium_mg": 53.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 382.0,
    "potassium_mg": 714.0,
    "protein_g": 14.3,
    "salt_g": 0.715,
    "sat_fat_g": 2.24,
    "sodium_mg": 286.0,
    "sugar_g": 57.1,
    "vitamin_a_ug": 107.0,
    "vitamin_c_mg": 57.1,
    "vitamin_e_mg": 6.43,
    "vitamin_k_ug": 12.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173520",
  "state": "Unspecified",
  "subcategory": "Baby Foods",
  "tags": [
    "baby-foods",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
