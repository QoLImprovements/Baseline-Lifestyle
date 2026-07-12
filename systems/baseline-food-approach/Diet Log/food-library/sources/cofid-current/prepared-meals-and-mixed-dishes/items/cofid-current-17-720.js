/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "g",
  "description": "20 samples, 3 brands",
  "id": "cofid-current-17-720",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Curry paste",
  "nutritionPerBasis": {
    "calcium_mg": 150.0,
    "carbs_g": 11.3,
    "energy_kcal": 253.0,
    "fat_g": 21.3,
    "fibre_g": 6.8,
    "folate_ug": 0.0,
    "iron_mg": 12.8,
    "magnesium_mg": 75.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 110.0,
    "potassium_mg": 520.0,
    "protein_g": 4.7,
    "salt_g": 3.8,
    "sat_fat_g": 0.0,
    "sodium_mg": 1520.0,
    "sugar_g": 7.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-720",
  "state": "Unspecified",
  "subcategory": "WC",
  "tags": [
    "prepared-meals-and-mixed-dishes",
    "unspecified",
    "wc"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
