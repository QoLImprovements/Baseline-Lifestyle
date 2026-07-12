/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "6 samples, 5 products, frozen and chilled",
  "id": "cofid-current-16-401",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Sardines, flesh only, raw",
  "nutritionPerBasis": {
    "calcium_mg": 50.0,
    "carbs_g": 0.0,
    "energy_kcal": 134.0,
    "fat_g": 6.1,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 1.55,
    "magnesium_mg": 32.0,
    "omega3_g": 1.32,
    "phosphorus_mg": 257.0,
    "potassium_mg": 387.0,
    "protein_g": 19.8,
    "salt_g": 0.34,
    "sat_fat_g": 1.83,
    "sodium_mg": 136.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 10.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.31,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-401",
  "state": "Raw",
  "subcategory": "JC",
  "tags": [
    "jc",
    "other-foods",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
