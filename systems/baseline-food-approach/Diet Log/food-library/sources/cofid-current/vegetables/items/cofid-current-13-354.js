/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "Literature sources and calculation from raw",
  "id": "cofid-current-13-354",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Squash, acorn, baked",
  "nutritionPerBasis": {
    "calcium_mg": 44.0,
    "carbs_g": 12.6,
    "energy_kcal": 56.0,
    "fat_g": 0.1,
    "fibre_g": 0.0,
    "folate_ug": 19.0,
    "iron_mg": 0.9,
    "magnesium_mg": 43.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 45.0,
    "potassium_mg": 440.0,
    "protein_g": 1.1,
    "salt_g": 0.01,
    "sat_fat_g": 0.0,
    "sodium_mg": 4.0,
    "sugar_g": 1.6,
    "vitamin_a_ug": 43.0,
    "vitamin_c_mg": 11.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-354",
  "state": "Baked",
  "subcategory": "DG",
  "tags": [
    "baked",
    "dg",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
