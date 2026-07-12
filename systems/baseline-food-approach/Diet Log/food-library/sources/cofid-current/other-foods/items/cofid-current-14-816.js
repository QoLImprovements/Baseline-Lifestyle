/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Flesh from kernel, no shell",
  "id": "cofid-current-14-816",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Coconut, flesh only, fresh",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 3.7,
    "energy_kcal": 351.0,
    "fat_g": 36.0,
    "fibre_g": 0.0,
    "folate_ug": 26.0,
    "iron_mg": 2.1,
    "magnesium_mg": 41.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 94.0,
    "potassium_mg": 370.0,
    "protein_g": 3.2,
    "salt_g": 0.0425,
    "sat_fat_g": 31.39,
    "sodium_mg": 17.0,
    "sugar_g": 3.7,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 3.0,
    "vitamin_e_mg": 0.73,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-816",
  "state": "Unspecified",
  "subcategory": "GA",
  "tags": [
    "ga",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
