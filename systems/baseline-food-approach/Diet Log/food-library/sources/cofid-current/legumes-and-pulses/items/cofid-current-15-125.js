/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "g",
  "description": "Punjabi dish. Recipe from dietary survey records",
  "id": "cofid-current-15-125",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Curry, lentil, red/masoor dahl, mung bean dahl and tomato, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 9.7,
    "energy_kcal": 92.0,
    "fat_g": 4.3,
    "fibre_g": 0.0,
    "folate_ug": 11.0,
    "iron_mg": 1.1,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 51.0,
    "potassium_mg": 170.0,
    "protein_g": 4.4,
    "salt_g": 0.0,
    "sat_fat_g": 0.5,
    "sodium_mg": 0.0,
    "sugar_g": 0.8,
    "vitamin_a_ug": 9.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 1.05,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-125",
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
