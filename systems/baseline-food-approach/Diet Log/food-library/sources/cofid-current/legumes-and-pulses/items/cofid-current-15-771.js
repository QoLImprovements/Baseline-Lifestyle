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
  "id": "cofid-current-15-771",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Curry, mung bean, whole, Gujerati, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 30.0,
    "carbs_g": 13.2,
    "energy_kcal": 126.0,
    "fat_g": 5.9,
    "fibre_g": 0.0,
    "folate_ug": 19.0,
    "iron_mg": 1.75,
    "magnesium_mg": 41.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 95.0,
    "potassium_mg": 392.0,
    "protein_g": 6.0,
    "salt_g": 0.015,
    "sat_fat_g": 0.45,
    "sodium_mg": 6.0,
    "sugar_g": 2.5,
    "vitamin_a_ug": 16.0,
    "vitamin_c_mg": 3.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-771",
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
