/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "g",
  "description": "Literature sources and calculation from raw, baked 30 minutes",
  "id": "cofid-current-13-377",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Taro, baked",
  "nutritionPerBasis": {
    "calcium_mg": 33.0,
    "carbs_g": 32.4,
    "energy_kcal": 130.0,
    "fat_g": 0.2,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 1.0,
    "magnesium_mg": 41.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 69.0,
    "potassium_mg": 430.0,
    "protein_g": 1.7,
    "salt_g": 0.0125,
    "sat_fat_g": 0.0,
    "sodium_mg": 5.0,
    "sugar_g": 1.4,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 7.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-377",
  "state": "Baked",
  "subcategory": "DG",
  "tags": [
    "baked",
    "dg",
    "potatoes-and-starchy-vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
