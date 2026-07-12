/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "g",
  "description": "Punjabi dish. Split chick peas and tomato. Recipe from dietary survey records",
  "id": "cofid-current-15-641",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Curry, chick pea dhal, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 17.8,
    "energy_kcal": 152.0,
    "fat_g": 6.1,
    "fibre_g": 0.0,
    "folate_ug": 32.0,
    "iron_mg": 1.99,
    "magnesium_mg": 40.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 118.0,
    "potassium_mg": 390.0,
    "protein_g": 7.9,
    "salt_g": 0.08,
    "sat_fat_g": 0.68,
    "sodium_mg": 32.0,
    "sugar_g": 1.9,
    "vitamin_a_ug": 23.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 3.1,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-641",
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
