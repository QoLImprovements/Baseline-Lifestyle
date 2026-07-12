/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "g",
  "description": "Recipe. Potato, tomato and spices",
  "id": "cofid-current-15-739",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Curry, Bombay potato, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 13.8,
    "energy_kcal": 118.0,
    "fat_g": 6.7,
    "fibre_g": 1.9,
    "folate_ug": 8.0,
    "iron_mg": 0.96,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 39.0,
    "potassium_mg": 417.0,
    "protein_g": 1.8,
    "salt_g": 0.04,
    "sat_fat_g": 0.48,
    "sodium_mg": 16.0,
    "sugar_g": 1.2,
    "vitamin_a_ug": 24.0,
    "vitamin_c_mg": 8.0,
    "vitamin_e_mg": 1.55,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-739",
  "state": "Unspecified",
  "subcategory": "DR",
  "tags": [
    "dr",
    "potatoes-and-starchy-vegetables",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
