/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "g",
  "description": "6 samples, containing okra, onions, tomatoes and spices",
  "id": "cofid-current-15-627",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Curry, bhindi subji, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 108.0,
    "carbs_g": 4.9,
    "energy_kcal": 71.0,
    "fat_g": 4.6,
    "fibre_g": 7.2,
    "folate_ug": 25.0,
    "iron_mg": 0.78,
    "magnesium_mg": 56.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 78.0,
    "potassium_mg": 372.0,
    "protein_g": 2.9,
    "salt_g": 1.0925,
    "sat_fat_g": 0.4,
    "sodium_mg": 437.0,
    "sugar_g": 4.4,
    "vitamin_a_ug": 46.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 4.1,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-627",
  "state": "Unspecified",
  "subcategory": "DR",
  "tags": [
    "dr",
    "prepared-meals-and-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
