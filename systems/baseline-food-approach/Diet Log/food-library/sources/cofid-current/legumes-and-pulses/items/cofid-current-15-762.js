/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "g",
  "description": "Recipe, thick consistency",
  "id": "cofid-current-15-762",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Curry, lentil, red/masoor dahl, Punjabi, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 33.0,
    "carbs_g": 19.3,
    "energy_kcal": 141.0,
    "fat_g": 4.6,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 2.42,
    "magnesium_mg": 28.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 102.0,
    "potassium_mg": 285.0,
    "protein_g": 7.2,
    "salt_g": 0.1375,
    "sat_fat_g": 0.35,
    "sodium_mg": 55.0,
    "sugar_g": 3.9,
    "vitamin_a_ug": 36.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-762",
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
