/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "g",
  "description": "Recipe",
  "id": "cofid-current-15-748",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Curry, chick pea, UK type, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 42.0,
    "carbs_g": 14.3,
    "energy_kcal": 109.0,
    "fat_g": 3.5,
    "fibre_g": 0.0,
    "folate_ug": 47.0,
    "iron_mg": 1.81,
    "magnesium_mg": 30.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 68.0,
    "potassium_mg": 290.0,
    "protein_g": 5.9,
    "salt_g": 0.03,
    "sat_fat_g": 0.28,
    "sodium_mg": 12.0,
    "sugar_g": 2.7,
    "vitamin_a_ug": 28.0,
    "vitamin_c_mg": 4.0,
    "vitamin_e_mg": 1.44,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-748",
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
