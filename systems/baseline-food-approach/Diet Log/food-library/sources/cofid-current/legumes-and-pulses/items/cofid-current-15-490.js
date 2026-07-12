/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "g",
  "description": "Recipe, medium consistency",
  "id": "cofid-current-15-490",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Curry, mung bean, whole, Punjabi, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 8.8,
    "energy_kcal": 74.0,
    "fat_g": 2.8,
    "fibre_g": 0.0,
    "folate_ug": 13.0,
    "iron_mg": 1.17,
    "magnesium_mg": 27.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 67.0,
    "potassium_mg": 251.0,
    "protein_g": 4.2,
    "salt_g": 0.5775,
    "sat_fat_g": 1.64,
    "sodium_mg": 231.0,
    "sugar_g": 1.0,
    "vitamin_a_ug": 47.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.18,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-490",
  "state": "Unspecified",
  "subcategory": "DR",
  "tags": [
    "dr",
    "legumes-and-pulses",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
