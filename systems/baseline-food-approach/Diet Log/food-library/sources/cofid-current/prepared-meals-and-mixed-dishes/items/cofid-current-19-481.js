/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "g",
  "description": "Beef, Recipe",
  "id": "cofid-current-19-481",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Lasagne, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 104.0,
    "carbs_g": 15.2,
    "energy_kcal": 180.0,
    "fat_g": 9.6,
    "fibre_g": 1.0,
    "folate_ug": 9.0,
    "iron_mg": 0.8,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 143.0,
    "potassium_mg": 220.0,
    "protein_g": 9.6,
    "salt_g": 0.5875,
    "sat_fat_g": 4.18,
    "sodium_mg": 235.0,
    "sugar_g": 2.8,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-481",
  "state": "Unspecified",
  "subcategory": "MR",
  "tags": [
    "mr",
    "prepared-meals-and-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
