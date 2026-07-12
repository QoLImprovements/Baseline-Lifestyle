/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "g",
  "description": "Calculated from 14-390",
  "id": "cofid-current-14-397",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Papaya, flesh only, raw, weighed with skin and pips",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 5.7,
    "energy_kcal": 27.0,
    "fat_g": 0.4,
    "fibre_g": 1.1,
    "folate_ug": 1.0,
    "iron_mg": 0.13,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 5.0,
    "potassium_mg": 129.0,
    "protein_g": 0.4,
    "salt_g": 0.02,
    "sat_fat_g": 0.11,
    "sodium_mg": 8.0,
    "sugar_g": 5.7,
    "vitamin_a_ug": 47.0,
    "vitamin_c_mg": 41.0,
    "vitamin_e_mg": 0.21,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-397",
  "state": "Raw",
  "subcategory": "FA",
  "tags": [
    "fa",
    "fruit",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
