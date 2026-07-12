/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Analysis and calculation from raw; fish without heads, deep fried",
  "id": "cofid-current-16-219",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Sprats, fried",
  "nutritionPerBasis": {
    "calcium_mg": 120.0,
    "carbs_g": 0.0,
    "energy_kcal": 415.0,
    "fat_g": 35.0,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 1.4,
    "magnesium_mg": 46.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 300.0,
    "potassium_mg": 410.0,
    "protein_g": 24.9,
    "salt_g": 0.6,
    "sat_fat_g": 5.3,
    "sodium_mg": 240.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 74.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 5.58,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-219",
  "state": "Fried",
  "subcategory": "JC",
  "tags": [
    "fried",
    "jc",
    "other-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
