/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "6 samples, 5 products",
  "id": "cofid-current-11-903",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Semolina, raw",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 77.9,
    "energy_kcal": 349.0,
    "fat_g": 1.6,
    "fibre_g": 2.9,
    "folate_ug": 29.0,
    "iron_mg": 1.29,
    "magnesium_mg": 34.0,
    "omega3_g": 0.03,
    "phosphorus_mg": 161.0,
    "potassium_mg": 214.0,
    "protein_g": 10.6,
    "salt_g": 0.0025,
    "sat_fat_g": 0.23,
    "sodium_mg": 1.0,
    "sugar_g": 0.6,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.43,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-903",
  "state": "Raw",
  "subcategory": "AA",
  "tags": [
    "aa",
    "other-foods",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
