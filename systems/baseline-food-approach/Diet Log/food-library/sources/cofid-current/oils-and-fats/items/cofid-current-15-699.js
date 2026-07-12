/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "g",
  "description": "Recipe from literature sources. Mixed vegetables",
  "id": "cofid-current-15-699",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Bhaji, vegetable, with rapeseed oil, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 27.0,
    "carbs_g": 10.1,
    "energy_kcal": 213.0,
    "fat_g": 18.5,
    "fibre_g": 0.0,
    "folate_ug": 13.0,
    "iron_mg": 0.79,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 38.0,
    "potassium_mg": 341.0,
    "protein_g": 1.8,
    "salt_g": 0.04,
    "sat_fat_g": 1.64,
    "sodium_mg": 16.0,
    "sugar_g": 4.6,
    "vitamin_a_ug": 547.0,
    "vitamin_c_mg": 10.0,
    "vitamin_e_mg": 4.06,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-699",
  "state": "Unspecified",
  "subcategory": "DR",
  "tags": [
    "dr",
    "oils-and-fats",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
