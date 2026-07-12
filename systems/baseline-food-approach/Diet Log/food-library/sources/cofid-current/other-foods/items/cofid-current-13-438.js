/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Whole peas, no pods",
  "id": "cofid-current-13-438",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Peas, raw",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 11.3,
    "energy_kcal": 83.0,
    "fat_g": 1.5,
    "fibre_g": 5.3,
    "folate_ug": 62.0,
    "iron_mg": 2.8,
    "magnesium_mg": 34.0,
    "omega3_g": 0.04,
    "phosphorus_mg": 130.0,
    "potassium_mg": 330.0,
    "protein_g": 6.9,
    "salt_g": 0.0025,
    "sat_fat_g": 0.56,
    "sodium_mg": 1.0,
    "sugar_g": 2.3,
    "vitamin_a_ug": 50.0,
    "vitamin_c_mg": 24.0,
    "vitamin_e_mg": 0.21,
    "vitamin_k_ug": 39.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-438",
  "state": "Raw",
  "subcategory": "DF",
  "tags": [
    "df",
    "other-foods",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
