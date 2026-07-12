/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "piece",
  "description": "Restaurant Foods",
  "id": "usda-sr-legacy-168077",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "piece",
      "kind": "unit",
      "label": "piece"
    },
    {
      "gramsPerUnit": 100.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "DENNY'S, golden fried shrimp",
  "nutritionPerBasis": {
    "calcium_mg": 47.0,
    "carbs_g": 20.9,
    "energy_kcal": 319.0,
    "fat_g": 20.0,
    "fibre_g": 1.5,
    "folate_ug": 54.0,
    "iron_mg": 1.54,
    "magnesium_mg": 26.0,
    "omega3_g": 0.927,
    "phosphorus_mg": 498.0,
    "potassium_mg": 128.0,
    "protein_g": 13.9,
    "salt_g": 3.5,
    "sat_fat_g": 3.52,
    "sodium_mg": 1400.0,
    "sugar_g": 0.75,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.61,
    "vitamin_k_ug": 35.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168077",
  "state": "Fried",
  "subcategory": "Restaurant Foods",
  "tags": [
    "fish-and-seafood",
    "fried",
    "restaurant-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
