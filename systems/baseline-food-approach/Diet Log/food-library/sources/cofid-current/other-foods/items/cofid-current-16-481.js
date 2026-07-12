/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Calculated from 16-389 using edible portion of 0.54",
  "id": "cofid-current-16-481",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Prawns, king, purchased cooked, weighed with shells",
  "nutritionPerBasis": {
    "calcium_mg": 26.0,
    "carbs_g": 0.0,
    "energy_kcal": 37.0,
    "fat_g": 0.2,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 0.15,
    "magnesium_mg": 11.0,
    "omega3_g": 0.04,
    "phosphorus_mg": 68.0,
    "potassium_mg": 35.0,
    "protein_g": 8.7,
    "salt_g": 0.8675,
    "sat_fat_g": 0.05,
    "sodium_mg": 347.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.89,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-481",
  "state": "Raw",
  "subcategory": "JK",
  "tags": [
    "jk",
    "other-foods",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
