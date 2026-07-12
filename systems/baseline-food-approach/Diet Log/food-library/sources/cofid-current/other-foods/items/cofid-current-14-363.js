/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Bramley variety; calculated from 14-362",
  "id": "cofid-current-14-363",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Apples, cooking, raw, flesh only, weighed with skin and core",
  "nutritionPerBasis": {
    "calcium_mg": 3.0,
    "carbs_g": 6.5,
    "energy_kcal": 27.0,
    "fat_g": 0.2,
    "fibre_g": 1.2,
    "folate_ug": 0.0,
    "iron_mg": 0.07,
    "magnesium_mg": 2.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 5.0,
    "potassium_mg": 64.0,
    "protein_g": 0.2,
    "salt_g": 0.0025,
    "sat_fat_g": 0.04,
    "sodium_mg": 1.0,
    "sugar_g": 6.4,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 10.0,
    "vitamin_e_mg": 0.09,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-363",
  "state": "Raw",
  "subcategory": "F",
  "tags": [
    "f",
    "other-foods",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
