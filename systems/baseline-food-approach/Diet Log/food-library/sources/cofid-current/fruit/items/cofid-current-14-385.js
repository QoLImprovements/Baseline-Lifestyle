/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "g",
  "description": "Calculated from 14-384",
  "id": "cofid-current-14-385",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Grapefruit, flesh only, raw, weighed with peel and pips",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 4.9,
    "energy_kcal": 24.0,
    "fat_g": 0.4,
    "fibre_g": 0.6,
    "folate_ug": 16.0,
    "iron_mg": 0.06,
    "magnesium_mg": 6.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 13.0,
    "potassium_mg": 92.0,
    "protein_g": 0.6,
    "salt_g": 0.0025,
    "sat_fat_g": 0.05,
    "sodium_mg": 1.0,
    "sugar_g": 4.9,
    "vitamin_a_ug": 37.0,
    "vitamin_c_mg": 25.0,
    "vitamin_e_mg": 0.19,
    "vitamin_k_ug": 0.01
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-385",
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
