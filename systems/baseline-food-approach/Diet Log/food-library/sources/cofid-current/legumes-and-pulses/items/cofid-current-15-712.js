/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "g",
  "description": "Recipe adapted from a recipe from Leeds Polytechnic.",
  "id": "cofid-current-15-712",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Casserole, bean and mixed vegetable, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 6.6,
    "energy_kcal": 42.0,
    "fat_g": 0.7,
    "fibre_g": 0.0,
    "folate_ug": 58.0,
    "iron_mg": 0.62,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 54.0,
    "potassium_mg": 211.0,
    "protein_g": 2.7,
    "salt_g": 0.145,
    "sat_fat_g": 0.11,
    "sodium_mg": 58.0,
    "sugar_g": 3.4,
    "vitamin_a_ug": 356.0,
    "vitamin_c_mg": 14.0,
    "vitamin_e_mg": 0.43,
    "vitamin_k_ug": 1.78
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-712",
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
