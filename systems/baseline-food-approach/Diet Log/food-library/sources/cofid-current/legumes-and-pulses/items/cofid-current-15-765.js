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
  "id": "cofid-current-15-765",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Curry, lentil, whole/masoor, Gujerati, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 17.0,
    "energy_kcal": 137.0,
    "fat_g": 5.3,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 2.26,
    "magnesium_mg": 27.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 94.0,
    "potassium_mg": 290.0,
    "protein_g": 6.5,
    "salt_g": 0.14,
    "sat_fat_g": 3.63,
    "sodium_mg": 56.0,
    "sugar_g": 3.1,
    "vitamin_a_ug": 83.0,
    "vitamin_c_mg": 3.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-765",
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
