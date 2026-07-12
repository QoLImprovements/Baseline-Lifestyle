/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "g",
  "description": "Recipe, Gujerati dish.",
  "id": "cofid-current-15-738",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Curry, black-eye bean, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 30.0,
    "carbs_g": 18.4,
    "energy_kcal": 139.0,
    "fat_g": 4.4,
    "fibre_g": 0.0,
    "folate_ug": 106.0,
    "iron_mg": 2.83,
    "magnesium_mg": 49.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 142.0,
    "potassium_mg": 422.0,
    "protein_g": 8.1,
    "salt_g": 0.0575,
    "sat_fat_g": 0.44,
    "sodium_mg": 23.0,
    "sugar_g": 1.0,
    "vitamin_a_ug": 15.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-738",
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
