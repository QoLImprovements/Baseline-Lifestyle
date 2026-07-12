/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Whole cob. Calculated from kernels",
  "id": "cofid-current-13-623",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Sweetcorn, kernels, 'on-the-cob', raw, weighed with core",
  "nutritionPerBasis": {
    "calcium_mg": 2.0,
    "carbs_g": 4.8,
    "energy_kcal": 36.0,
    "fat_g": 1.1,
    "fibre_g": 0.0,
    "folate_ug": 24.0,
    "iron_mg": 0.41,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 54.0,
    "potassium_mg": 213.0,
    "protein_g": 2.0,
    "salt_g": 0.0,
    "sat_fat_g": 0.12,
    "sodium_mg": 0.0,
    "sugar_g": 1.2,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 5.0,
    "vitamin_e_mg": 0.19,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-623",
  "state": "Raw",
  "subcategory": "DG",
  "tags": [
    "dg",
    "other-foods",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
