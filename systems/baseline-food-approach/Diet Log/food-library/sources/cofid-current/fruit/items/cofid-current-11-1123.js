/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "g",
  "description": "Recipe",
  "id": "cofid-current-11-1123",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Tartlets, strawberry, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 31.0,
    "carbs_g": 27.2,
    "energy_kcal": 202.0,
    "fat_g": 10.1,
    "fibre_g": 2.2,
    "folate_ug": 22.0,
    "iron_mg": 0.56,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 38.0,
    "potassium_mg": 101.0,
    "protein_g": 2.4,
    "salt_g": 0.215,
    "sat_fat_g": 6.18,
    "sodium_mg": 86.0,
    "sugar_g": 7.7,
    "vitamin_a_ug": 124.0,
    "vitamin_c_mg": 19.0,
    "vitamin_e_mg": 0.48,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-1123",
  "state": "Raw",
  "subcategory": "AP",
  "tags": [
    "ap",
    "fruit",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
