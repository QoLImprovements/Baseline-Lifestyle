/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "16 samples, autumn and winter, UK grown and imported",
  "id": "cofid-current-13-521",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Spinach, baby, raw",
  "nutritionPerBasis": {
    "calcium_mg": 119.0,
    "carbs_g": 0.2,
    "energy_kcal": 16.0,
    "fat_g": 0.6,
    "fibre_g": 1.0,
    "folate_ug": 161.0,
    "iron_mg": 1.89,
    "magnesium_mg": 80.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 44.0,
    "potassium_mg": 682.0,
    "protein_g": 2.6,
    "salt_g": 0.075,
    "sat_fat_g": 0.08,
    "sodium_mg": 30.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 260.0,
    "vitamin_c_mg": 29.0,
    "vitamin_e_mg": 0.48,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-521",
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
