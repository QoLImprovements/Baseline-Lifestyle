/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "IFR; removed from cob",
  "id": "cofid-current-13-622",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Sweetcorn, kernels, raw",
  "nutritionPerBasis": {
    "calcium_mg": 3.0,
    "carbs_g": 8.1,
    "energy_kcal": 60.0,
    "fat_g": 1.8,
    "fibre_g": 0.0,
    "folate_ug": 41.0,
    "iron_mg": 0.7,
    "magnesium_mg": 37.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 91.0,
    "potassium_mg": 260.0,
    "protein_g": 3.4,
    "salt_g": 0.0025,
    "sat_fat_g": 0.2,
    "sodium_mg": 1.0,
    "sugar_g": 2.0,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 8.0,
    "vitamin_e_mg": 0.33,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-622",
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
