/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "g",
  "description": "Recipe",
  "id": "cofid-current-19-582",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Frankfurter with bun, ketchup, fried onions and mustard",
  "nutritionPerBasis": {
    "calcium_mg": 89.0,
    "carbs_g": 26.5,
    "energy_kcal": 194.0,
    "fat_g": 7.4,
    "fibre_g": 2.0,
    "folate_ug": 13.0,
    "iron_mg": 1.04,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 93.0,
    "potassium_mg": 184.0,
    "protein_g": 6.8,
    "salt_g": 1.18,
    "sat_fat_g": 2.08,
    "sodium_mg": 472.0,
    "sugar_g": 6.7,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.07,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-582",
  "state": "Fried",
  "subcategory": "MI",
  "tags": [
    "condiments-and-sauces",
    "fried",
    "mi"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
