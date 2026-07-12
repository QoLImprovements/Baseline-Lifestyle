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
  "id": "cofid-current-15-757",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Curry, lentil, red/masoor dahl and mung bean dahl, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 10.1,
    "energy_kcal": 116.0,
    "fat_g": 6.7,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 1.6,
    "magnesium_mg": 23.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 70.0,
    "potassium_mg": 212.0,
    "protein_g": 4.8,
    "salt_g": 0.045,
    "sat_fat_g": 0.48,
    "sodium_mg": 18.0,
    "sugar_g": 0.9,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-757",
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
