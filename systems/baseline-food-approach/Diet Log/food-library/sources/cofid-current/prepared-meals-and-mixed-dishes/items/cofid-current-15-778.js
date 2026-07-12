/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "g",
  "description": "Recipe, Gujerati, split pigeon peas",
  "id": "cofid-current-15-778",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Curry, pigeon pea dahl with tomatoes and peanuts, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 16.9,
    "energy_kcal": 121.0,
    "fat_g": 3.3,
    "fibre_g": 0.0,
    "folate_ug": 19.0,
    "iron_mg": 1.06,
    "magnesium_mg": 33.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 103.0,
    "potassium_mg": 439.0,
    "protein_g": 6.9,
    "salt_g": 0.0275,
    "sat_fat_g": 0.48,
    "sodium_mg": 11.0,
    "sugar_g": 1.0,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-778",
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
