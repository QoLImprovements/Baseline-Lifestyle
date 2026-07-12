/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "g",
  "description": "Recipe. Gujerati dish. Fried dudhi balls in a tomato and onion sauce",
  "id": "cofid-current-15-774",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Curry, dudhi, kofta, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 27.0,
    "carbs_g": 9.3,
    "energy_kcal": 111.0,
    "fat_g": 6.9,
    "fibre_g": 0.0,
    "folate_ug": 12.0,
    "iron_mg": 0.79,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 37.0,
    "potassium_mg": 196.0,
    "protein_g": 2.6,
    "salt_g": 0.01,
    "sat_fat_g": 1.87,
    "sodium_mg": 4.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 50.0,
    "vitamin_c_mg": 4.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-774",
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
