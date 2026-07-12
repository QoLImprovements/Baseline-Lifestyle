/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "g",
  "description": "Recipe. Gujerati dish. Split mung beans",
  "id": "cofid-current-15-767",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Curry, mung bean dahl and spinach, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 144.0,
    "carbs_g": 12.3,
    "energy_kcal": 102.0,
    "fat_g": 2.9,
    "fibre_g": 0.0,
    "folate_ug": 59.0,
    "iron_mg": 3.14,
    "magnesium_mg": 71.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 120.0,
    "potassium_mg": 684.0,
    "protein_g": 7.8,
    "salt_g": 0.3825,
    "sat_fat_g": 0.3,
    "sodium_mg": 153.0,
    "sugar_g": 3.0,
    "vitamin_a_ug": 189.0,
    "vitamin_c_mg": 11.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-767",
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
