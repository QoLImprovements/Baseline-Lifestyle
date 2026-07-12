/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "g",
  "description": "Recipe, thick consistency",
  "id": "cofid-current-15-737",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Curry, black gram, whole, Gujerati, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 61.0,
    "carbs_g": 15.3,
    "energy_kcal": 154.0,
    "fat_g": 6.7,
    "fibre_g": 0.0,
    "folate_ug": 24.0,
    "iron_mg": 2.41,
    "magnesium_mg": 58.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 132.0,
    "potassium_mg": 387.0,
    "protein_g": 8.4,
    "salt_g": 0.1775,
    "sat_fat_g": 3.96,
    "sodium_mg": 71.0,
    "sugar_g": 2.5,
    "vitamin_a_ug": 102.0,
    "vitamin_c_mg": 4.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-737",
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
