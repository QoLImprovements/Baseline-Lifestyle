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
  "id": "cofid-current-15-758",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Curry, lentil, red/masoor dahl and tomato, Punjabi, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 8.5,
    "energy_kcal": 93.0,
    "fat_g": 5.5,
    "fibre_g": 0.0,
    "folate_ug": 18.0,
    "iron_mg": 1.47,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 55.0,
    "potassium_mg": 237.0,
    "protein_g": 3.2,
    "salt_g": 0.045,
    "sat_fat_g": 2.41,
    "sodium_mg": 18.0,
    "sugar_g": 2.4,
    "vitamin_a_ug": 40.0,
    "vitamin_c_mg": 7.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-758",
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
