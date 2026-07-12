/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "g",
  "description": "Recipe, thin consistency",
  "id": "cofid-current-15-759",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Curry, lentil, red/masoor dahl and tomato, with butter, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 10.6,
    "energy_kcal": 104.0,
    "fat_g": 5.3,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 1.63,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 62.0,
    "potassium_mg": 164.0,
    "protein_g": 4.3,
    "salt_g": 0.1425,
    "sat_fat_g": 3.18,
    "sodium_mg": 57.0,
    "sugar_g": 1.1,
    "vitamin_a_ug": 74.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-759",
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
