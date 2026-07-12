/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "11 samples, UK, trimmed and damaged outer leaves removed",
  "id": "cofid-current-13-624",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Leeks, raw",
  "nutritionPerBasis": {
    "calcium_mg": 52.0,
    "carbs_g": 4.1,
    "energy_kcal": 23.0,
    "fat_g": 0.2,
    "fibre_g": 2.8,
    "folate_ug": 33.0,
    "iron_mg": 0.42,
    "magnesium_mg": 7.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 23.0,
    "potassium_mg": 230.0,
    "protein_g": 1.5,
    "salt_g": 0.0,
    "sat_fat_g": 0.04,
    "sodium_mg": 0.0,
    "sugar_g": 3.8,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 3.1,
    "vitamin_e_mg": 0.35,
    "vitamin_k_ug": 10.1
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-624",
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
