/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "11 samples, closed cap and button, UK grown and imported, pre-packed and loose",
  "id": "cofid-current-13-505",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Mushrooms, white, raw",
  "nutritionPerBasis": {
    "calcium_mg": 3.0,
    "carbs_g": 0.3,
    "energy_kcal": 7.0,
    "fat_g": 0.2,
    "fibre_g": 0.7,
    "folate_ug": 40.0,
    "iron_mg": 0.21,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 94.0,
    "potassium_mg": 378.0,
    "protein_g": 1.0,
    "salt_g": 0.01,
    "sat_fat_g": 0.04,
    "sodium_mg": 4.0,
    "sugar_g": 0.3,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.01,
    "vitamin_k_ug": 0.28
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-505",
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
