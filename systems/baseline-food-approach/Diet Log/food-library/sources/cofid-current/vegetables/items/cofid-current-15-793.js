/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "Recipe. Aubergine, okra, spinach and potato.",
  "id": "cofid-current-15-793",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Curry, vegetable, West Indian, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 118.0,
    "carbs_g": 4.1,
    "energy_kcal": 60.0,
    "fat_g": 4.0,
    "fibre_g": 0.0,
    "folate_ug": 37.0,
    "iron_mg": 1.97,
    "magnesium_mg": 49.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 45.0,
    "potassium_mg": 399.0,
    "protein_g": 2.4,
    "salt_g": 0.135,
    "sat_fat_g": 0.37,
    "sodium_mg": 54.0,
    "sugar_g": 2.1,
    "vitamin_a_ug": 218.0,
    "vitamin_c_mg": 9.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-793",
  "state": "Unspecified",
  "subcategory": "DR",
  "tags": [
    "dr",
    "unspecified",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
