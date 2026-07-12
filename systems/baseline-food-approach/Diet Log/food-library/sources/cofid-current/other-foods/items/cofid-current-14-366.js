/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Calculated from raw, flesh only using edible conversion factor",
  "id": "cofid-current-14-366",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pears, raw, flesh only, peeled, weighed with skin and core",
  "nutritionPerBasis": {
    "calcium_mg": 5.0,
    "carbs_g": 7.9,
    "energy_kcal": 31.0,
    "fat_g": 0.1,
    "fibre_g": 1.9,
    "folate_ug": 4.0,
    "iron_mg": 0.1,
    "magnesium_mg": 4.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 6.0,
    "potassium_mg": 74.0,
    "protein_g": 0.2,
    "salt_g": 0.0025,
    "sat_fat_g": 0.01,
    "sodium_mg": 1.0,
    "sugar_g": 7.9,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-366",
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
