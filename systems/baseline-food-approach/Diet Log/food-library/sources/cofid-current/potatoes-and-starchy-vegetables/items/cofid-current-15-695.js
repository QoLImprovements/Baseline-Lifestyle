/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "g",
  "description": "Recipe from review of recipe collection",
  "id": "cofid-current-15-695",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Bhaji, spinach and potato, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 124.0,
    "carbs_g": 13.4,
    "energy_kcal": 192.0,
    "fat_g": 14.1,
    "fibre_g": 0.0,
    "folate_ug": 53.0,
    "iron_mg": 1.84,
    "magnesium_mg": 54.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 63.0,
    "potassium_mg": 683.0,
    "protein_g": 3.6,
    "salt_g": 0.255,
    "sat_fat_g": 0.98,
    "sodium_mg": 102.0,
    "sugar_g": 1.6,
    "vitamin_a_ug": 419.0,
    "vitamin_c_mg": 16.0,
    "vitamin_e_mg": 4.13,
    "vitamin_k_ug": 284.45
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-695",
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
