/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "g",
  "description": "Recipe from dietary survey records",
  "id": "cofid-current-15-095",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Curry, black-eye bean, Punjabi, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 13.7,
    "energy_kcal": 111.0,
    "fat_g": 4.0,
    "fibre_g": 0.0,
    "folate_ug": 140.0,
    "iron_mg": 1.3,
    "magnesium_mg": 30.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 97.0,
    "potassium_mg": 240.0,
    "protein_g": 6.0,
    "salt_g": 0.0,
    "sat_fat_g": 2.5,
    "sodium_mg": 0.0,
    "sugar_g": 1.1,
    "vitamin_a_ug": 46.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.16,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-095",
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
