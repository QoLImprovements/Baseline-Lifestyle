/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "g",
  "description": "Average of ambient and chilled, 12 brands",
  "id": "cofid-current-11-1016",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pizza base, raw",
  "nutritionPerBasis": {
    "calcium_mg": 86.0,
    "carbs_g": 57.5,
    "energy_kcal": 290.0,
    "fat_g": 4.8,
    "fibre_g": 2.5,
    "folate_ug": 8.0,
    "iron_mg": 1.55,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 85.0,
    "potassium_mg": 124.0,
    "protein_g": 7.8,
    "salt_g": 1.0,
    "sat_fat_g": 0.0,
    "sodium_mg": 400.0,
    "sugar_g": 3.4,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-1016",
  "state": "Raw",
  "subcategory": "AE",
  "tags": [
    "ae",
    "prepared-meals-and-mixed-dishes",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
