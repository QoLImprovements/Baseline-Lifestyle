/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "As raw, cooked for 3-8 minutes",
  "id": "cofid-current-13-498",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Carrots, old, microwaved",
  "nutritionPerBasis": {
    "calcium_mg": 36.0,
    "carbs_g": 7.5,
    "energy_kcal": 32.0,
    "fat_g": 0.2,
    "fibre_g": 2.8,
    "folate_ug": 17.0,
    "iron_mg": 0.25,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 23.0,
    "potassium_mg": 267.0,
    "protein_g": 0.6,
    "salt_g": 0.11,
    "sat_fat_g": 0.06,
    "sodium_mg": 44.0,
    "sugar_g": 7.2,
    "vitamin_a_ug": 1887.0,
    "vitamin_c_mg": 3.0,
    "vitamin_e_mg": 0.09,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-498",
  "state": "Unspecified",
  "subcategory": "DG",
  "tags": [
    "dg",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
