/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "item",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170335",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 248.0,
      "key": "item",
      "kind": "unit",
      "label": "item"
    }
  ],
  "name": "TACO BELL, BURRITO SUPREME with steak",
  "nutritionPerBasis": {
    "calcium_mg": 101.0,
    "carbs_g": 20.3,
    "energy_kcal": 767.0,
    "fat_g": 7.27,
    "fibre_g": 2.4,
    "folate_ug": 39.0,
    "iron_mg": 2.0,
    "magnesium_mg": 27.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 131.0,
    "potassium_mg": 228.0,
    "protein_g": 9.13,
    "salt_g": 1.335,
    "sat_fat_g": 2.67,
    "sodium_mg": 534.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.38,
    "vitamin_k_ug": 6.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170335",
  "state": "Unspecified",
  "subcategory": "Fast Foods",
  "tags": [
    "fast-foods",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
