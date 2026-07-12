/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Calculated from 14-382",
  "id": "cofid-current-14-383",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cherries, flesh and skin, raw, weighed with stones",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 13.4,
    "energy_kcal": 58.0,
    "fat_g": 0.4,
    "fibre_g": 1.7,
    "folate_ug": 3.0,
    "iron_mg": 0.23,
    "magnesium_mg": 9.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 24.0,
    "potassium_mg": 219.0,
    "protein_g": 1.1,
    "salt_g": 0.0,
    "sat_fat_g": 0.07,
    "sodium_mg": 0.0,
    "sugar_g": 13.4,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 3.0,
    "vitamin_e_mg": 0.13,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-383",
  "state": "Raw",
  "subcategory": "FA",
  "tags": [
    "fa",
    "other-foods",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
