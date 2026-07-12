/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "g",
  "description": "Recipe. Rice-based dish. Recipe from review of recipe collection",
  "id": "cofid-current-15-844",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pilau, egg and potato, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 30.0,
    "carbs_g": 22.4,
    "energy_kcal": 124.0,
    "fat_g": 2.5,
    "fibre_g": 1.0,
    "folate_ug": 13.0,
    "iron_mg": 0.84,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 66.0,
    "potassium_mg": 131.0,
    "protein_g": 4.4,
    "salt_g": 0.075,
    "sat_fat_g": 0.54,
    "sodium_mg": 30.0,
    "sugar_g": 1.4,
    "vitamin_a_ug": 20.0,
    "vitamin_c_mg": 6.0,
    "vitamin_e_mg": 0.62,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-844",
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
