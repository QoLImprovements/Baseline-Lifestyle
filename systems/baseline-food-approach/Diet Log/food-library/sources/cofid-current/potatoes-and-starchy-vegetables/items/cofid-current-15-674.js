/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "g",
  "description": "Punjabi dish. Recipe from dietary survey records",
  "id": "cofid-current-15-674",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Bhaji, cabbage and potato, with butter, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 53.0,
    "carbs_g": 9.7,
    "energy_kcal": 98.0,
    "fat_g": 5.6,
    "fibre_g": 4.1,
    "folate_ug": 21.0,
    "iron_mg": 0.6,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 48.0,
    "potassium_mg": 385.0,
    "protein_g": 2.7,
    "salt_g": 0.1375,
    "sat_fat_g": 3.48,
    "sodium_mg": 55.0,
    "sugar_g": 4.9,
    "vitamin_a_ug": 135.0,
    "vitamin_c_mg": 23.0,
    "vitamin_e_mg": 0.3,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-674",
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
