/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "g",
  "description": "Punjabi dish. Recipe from dietary survey records. Split mung beans",
  "id": "cofid-current-15-132",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Curry, mung bean dahl and tomato, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 11.2,
    "energy_kcal": 95.0,
    "fat_g": 3.6,
    "fibre_g": 0.0,
    "folate_ug": 25.0,
    "iron_mg": 1.0,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 53.0,
    "potassium_mg": 230.0,
    "protein_g": 5.6,
    "salt_g": 0.0,
    "sat_fat_g": 0.4,
    "sodium_mg": 0.0,
    "sugar_g": 0.8,
    "vitamin_a_ug": 28.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.89,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-132",
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
