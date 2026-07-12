/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "Analytical and literature sources",
  "id": "cofid-current-13-355",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Squash, butternut, raw",
  "nutritionPerBasis": {
    "calcium_mg": 48.0,
    "carbs_g": 8.3,
    "energy_kcal": 36.0,
    "fat_g": 0.1,
    "fibre_g": 0.0,
    "folate_ug": 27.0,
    "iron_mg": 0.7,
    "magnesium_mg": 34.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 33.0,
    "potassium_mg": 350.0,
    "protein_g": 1.1,
    "salt_g": 0.01,
    "sat_fat_g": 0.0,
    "sodium_mg": 4.0,
    "sugar_g": 4.5,
    "vitamin_a_ug": 605.0,
    "vitamin_c_mg": 21.0,
    "vitamin_e_mg": 1.83,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-355",
  "state": "Raw",
  "subcategory": "DG",
  "tags": [
    "dg",
    "raw",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
