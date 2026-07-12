/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "19 samples, autumn and winter, UK grown and imported",
  "id": "cofid-current-13-522",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Rocket, raw",
  "nutritionPerBasis": {
    "calcium_mg": 216.0,
    "carbs_g": 0.0,
    "energy_kcal": 18.0,
    "fat_g": 0.4,
    "fibre_g": 1.7,
    "folate_ug": 88.0,
    "iron_mg": 1.26,
    "magnesium_mg": 28.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 44.0,
    "potassium_mg": 326.0,
    "protein_g": 3.6,
    "salt_g": 0.075,
    "sat_fat_g": 0.07,
    "sodium_mg": 30.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 190.0,
    "vitamin_c_mg": 20.0,
    "vitamin_e_mg": 0.22,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-522",
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
