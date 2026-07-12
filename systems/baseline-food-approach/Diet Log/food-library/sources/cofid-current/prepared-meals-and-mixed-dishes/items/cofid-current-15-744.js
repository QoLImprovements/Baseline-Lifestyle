/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "g",
  "description": "Recipe,",
  "id": "cofid-current-15-744",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Curry, chick pea, whole, Gujerati type, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 89.0,
    "carbs_g": 21.8,
    "energy_kcal": 183.0,
    "fat_g": 7.6,
    "fibre_g": 0.0,
    "folate_ug": 39.0,
    "iron_mg": 3.96,
    "magnesium_mg": 65.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 147.0,
    "potassium_mg": 501.0,
    "protein_g": 9.7,
    "salt_g": 0.1075,
    "sat_fat_g": 0.59,
    "sodium_mg": 43.0,
    "sugar_g": 1.2,
    "vitamin_a_ug": 24.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 2.35,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-744",
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
