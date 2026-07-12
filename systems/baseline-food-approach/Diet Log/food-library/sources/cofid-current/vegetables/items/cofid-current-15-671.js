/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "Recipe adapted from literature sources",
  "id": "cofid-current-15-671",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Bhaji, cabbage, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 62.0,
    "carbs_g": 6.8,
    "energy_kcal": 77.0,
    "fat_g": 4.5,
    "fibre_g": 4.4,
    "folate_ug": 23.0,
    "iron_mg": 0.66,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 47.0,
    "potassium_mg": 341.0,
    "protein_g": 2.8,
    "salt_g": 0.02,
    "sat_fat_g": 0.32,
    "sodium_mg": 8.0,
    "sugar_g": 5.9,
    "vitamin_a_ug": 99.0,
    "vitamin_c_mg": 32.0,
    "vitamin_e_mg": 1.1,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-671",
  "state": "Unspecified",
  "subcategory": "DR",
  "tags": [
    "dr",
    "unspecified",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
