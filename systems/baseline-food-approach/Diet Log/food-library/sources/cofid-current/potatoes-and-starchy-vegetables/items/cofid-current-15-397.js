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
  "id": "cofid-current-15-397",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Bhaji, cabbage and potato, with rapeseed oil, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 47.0,
    "carbs_g": 9.1,
    "energy_kcal": 106.0,
    "fat_g": 7.0,
    "fibre_g": 0.0,
    "folate_ug": 36.0,
    "iron_mg": 0.79,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 52.0,
    "potassium_mg": 359.0,
    "protein_g": 2.2,
    "salt_g": 0.0175,
    "sat_fat_g": 0.86,
    "sodium_mg": 7.0,
    "sugar_g": 4.7,
    "vitamin_a_ug": 60.0,
    "vitamin_c_mg": 23.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-397",
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
