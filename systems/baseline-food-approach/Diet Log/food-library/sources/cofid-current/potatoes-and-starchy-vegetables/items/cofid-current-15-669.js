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
  "id": "cofid-current-15-669",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Bhaji, aubergine and potato, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 13.4,
    "energy_kcal": 135.0,
    "fat_g": 8.8,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 0.81,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 36.0,
    "potassium_mg": 372.0,
    "protein_g": 1.8,
    "salt_g": 0.015,
    "sat_fat_g": 0.61,
    "sodium_mg": 6.0,
    "sugar_g": 3.2,
    "vitamin_a_ug": 18.0,
    "vitamin_c_mg": 5.0,
    "vitamin_e_mg": 2.08,
    "vitamin_k_ug": 11.6
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-669",
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
