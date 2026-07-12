/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Purchased alive",
  "id": "cofid-current-16-497",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Mussels, raw",
  "nutritionPerBasis": {
    "calcium_mg": 38.0,
    "carbs_g": 2.5,
    "energy_kcal": 74.0,
    "fat_g": 1.8,
    "fibre_g": 0.0,
    "folate_ug": 37.0,
    "iron_mg": 2.53,
    "magnesium_mg": 23.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 240.0,
    "potassium_mg": 90.0,
    "protein_g": 12.1,
    "salt_g": 0.725,
    "sat_fat_g": 0.4,
    "sodium_mg": 290.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.74,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-497",
  "state": "Raw",
  "subcategory": "JM",
  "tags": [
    "jm",
    "other-foods",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
