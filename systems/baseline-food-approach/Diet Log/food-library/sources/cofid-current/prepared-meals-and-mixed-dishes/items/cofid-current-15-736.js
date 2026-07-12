/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "g",
  "description": "Recipe. Thin consistency",
  "id": "cofid-current-15-736",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Curry, black gram, whole, Bengali, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 31.0,
    "carbs_g": 8.5,
    "energy_kcal": 76.0,
    "fat_g": 2.8,
    "fibre_g": 0.0,
    "folate_ug": 13.0,
    "iron_mg": 1.2,
    "magnesium_mg": 29.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 68.0,
    "potassium_mg": 173.0,
    "protein_g": 4.4,
    "salt_g": 0.0825,
    "sat_fat_g": 1.62,
    "sodium_mg": 33.0,
    "sugar_g": 1.6,
    "vitamin_a_ug": 44.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-736",
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
