/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "10 samples from different outlets",
  "id": "cofid-current-16-335",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Szechuan prawns with vegetables, takeaway",
  "nutritionPerBasis": {
    "calcium_mg": 40.0,
    "carbs_g": 2.5,
    "energy_kcal": 83.0,
    "fat_g": 4.7,
    "fibre_g": 1.2,
    "folate_ug": 12.0,
    "iron_mg": 1.13,
    "magnesium_mg": 15.0,
    "omega3_g": 0.35,
    "phosphorus_mg": 65.0,
    "potassium_mg": 102.0,
    "protein_g": 7.8,
    "salt_g": 1.34,
    "sat_fat_g": 0.66,
    "sodium_mg": 536.0,
    "sugar_g": 0.8,
    "vitamin_a_ug": 95.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 1.99,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-335",
  "state": "Raw",
  "subcategory": "JR",
  "tags": [
    "jr",
    "other-foods",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
